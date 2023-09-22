
<template >
    <div @click="stopParalax">
        <div ref="preloader" class="lds-roller preloader active">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <p class="preloader_percent">{{ loadPercetn }}%</p>
        </div>
        <div
            ref="webGl"
            class="catalog"
            @click="clickModel"
            @mousemove="throttledHoverModel"
            :class="getActiveClass"
        ></div>
        <div class="tooltip" ref="tooltip">{{ tooltipText }}</div>
        <div class="catalog__btn_container">
            <slot></slot>
        </div>
    </div>
</template>


<script>
import px from "/catalog/environmentMaps/4/px.jpg";
import nx from "/catalog/environmentMaps/4/nx.jpg";
import py from "/catalog/environmentMaps/4/py.jpg";
import ny from "/catalog/environmentMaps/4/ny.jpg";
import pz from "/catalog/environmentMaps/4/pz.jpg";
import nz from "/catalog/environmentMaps/4/nz.jpg";

import _ from "lodash";
import { gsap } from "gsap";
import * as dat from "lil-gui";
import * as THREE from "three";
import { LoadingManager } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CreateModel } from "@/scripts/model_constructor.js";

export default {
    props: {
        descripton: { type: Boolean, default: false },
        qurrentModelKey: { type: Number, default: 0 },
        // qurrentModel: { type: Object, required: true },
        modelsData: { type: Array, required: true },
    },
    data() {
        return {
            targetCamera: new THREE.Vector3(0, 0, 0),
            startTargetCamera: new THREE.Vector3(0, 0, 0),
            startCameraPosition: new THREE.Vector3(4, 2, 5),

            showCameraPosition: new THREE.Vector3(0.3, 0.85, 2.65),
            showTargetPosition: new THREE.Vector3(0.85, 0, 0),

            startParalax: true,
            cursor: {
                x: 0,
                y: 0,
            },

            loadPercetn: 0,

            emissiveOff: { r: 0, g: 0, b: 0 },
            emissiveOn: { r: 0.1, g: 0.1, b: 0.6 },

            hover: true,
            meshes: [],

            highlightedMaterials: [],
            hoveredObject: null,
            tooltipText: "",

            highlightedColor: new THREE.Color(0xff0000),
            selectedPart: null,
            originalColors: new Map(),
            isHighlighted: false,
        };
    },

    mounted() {
        this.canvas = this.$refs.webGl;
        this.tooltip = this.$refs.tooltip;
        this.init();
        this.throttledHoverModel = _.throttle(this.hoverModel, 100);
        // this.getModel(this.getModelData).addModel;
        this.resize();
        this.tick();

        this.canvas.addEventListener("mousedown", () => {
            this.startParalax = false;
        });
        if (this.startParalax) {
            window.addEventListener("mousemove", (event) => {
                this.cursor.x = event.clientX / this.getSizes.width - 0.5;
                this.cursor.y = -(event.clientY / this.getSizes.height - 0.5);
            });
        }
    },

    beforeUnmount() {
        this.destroyScene();
    },

    unmounted() {
        cancelAnimationFrame(this.animationFrameId);
    },

    methods: {
        init() {
            this.scene = new THREE.Scene();
            this.raycaster = new THREE.Raycaster();
            this.mouse = new THREE.Vector2();

            this.getCameraParams();
            this.getRendererParams();
            this.getEnvierment();
            this.getControlsParams(true, 2, 4);

            this.scene.add(this.camera);

            // this.createTestMesh();
            this.createLight();
            this.getModel(this.getModelData).addModel;

            //   this.createGuiParams();
        },
        getCameraParams() {
            this.camera = new THREE.PerspectiveCamera(
                45,
                this.getSizes.width / this.getSizes.height,
                0.01,
                10
            );

            this.camera.position.copy(this.startCameraPosition);
        },
        getRendererParams() {
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
            });

            this.renderer.setSize(this.getSizes.width, this.getSizes.height);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.canvas.appendChild(this.renderer.domElement);
            this.renderer.outputColorSpace = THREE.SRGBColorSpace;
            this.renderer.setClearColor(0x000000, 0);
        },
        getControlsParams(demp, min, max) {
            let demping, mindist, maxdist;

            demp === undefined ? (demping = true) : (demping = demp);
            min === undefined ? (mindist = 1) : (mindist = min);
            max === undefined ? (maxdist = 2) : (maxdist = max);

            this.controls = new OrbitControls(this.camera, this.canvas);
            this.controls.enableDamping = demping;
            this.controls.minDistance = mindist;
            this.controls.maxDistance = maxdist;
            this.controls.target = this.targetCamera;
            this.controls.dampingFactor = 0.1;
        },
        getRaycaster(event) {
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            this.raycaster.setFromCamera(this.mouse, this.camera);
        },
        createLight() {
            this.ambientLight = new THREE.AmbientLight(0x404040, 0.8);
            this.scene.add(this.ambientLight);

            this.pointLight = new THREE.PointLight(0x404040, 10, 100);
            this.pointLight.position.x = 0.8;
            this.pointLight.position.y = 0.8;
            this.pointLight.position.z = 0.8;
            this.sphereSize = 1;
            // this.pointLightHelper = new THREE.PointLightHelper(
            //   this.pointLight,
            //   this.sphereSize
            // );

            //   this.scene.add(this.pointLight);
            // this.scene.add(this.pointLightHelper);
        },
        getPreloader() {
            return new LoadingManager(
                () => {
                    gsap.to(this.canvas, {
                        opacity: 1,
                    });
                    this.$emit("model-loaded", true);
                    this.$refs.preloader.classList.remove("active");
                    this.loadPercetn = 0;
                },
                (itemUrl, itemsLoaded, itemsTotal) => {
                    let loadProc = itemsLoaded / itemsTotal;
                    itemsLoaded / itemsTotal !== 1
                        ? (this.canvas.style.opacity = 0)
                        : "";
                    this.loadPercetn = Math.floor(loadProc * 100);
                }
            );
        },
        getModel({ model, scale, name }) {
            let newModel = new CreateModel({
                model: model,
                scene: this.scene,
                scale: new THREE.Vector3(scale, scale, scale),
                name: name,
                material: this.environmentMap,
                meshStore: this.meshes,
                materialColor: this.originalColors,
                preloader: this.getPreloader(),
            });
            return newModel;
        },
        createTestMesh() {
            this.planeMaterial = new THREE.MeshStandardMaterial({
                transparent: true,
                opacity: 1,
                side: THREE.DoubleSide,
                wireframe: false,
            });

            this.planeMaterial.color.set("0xff0000");

            this.planeGeometry = new THREE.BoxGeometry(1, 1, 1);

            this.plane = new THREE.Mesh(this.planeGeometry, this.planeMaterial);

            this.scene.add(this.plane);
        },
        getEnvierment() {
            this.cubeTextureLoader = new THREE.CubeTextureLoader();
            this.environmentMap = this.cubeTextureLoader.load([
                px,
                nx,
                py,
                ny,
                pz,
                nz,
            ]);

            this.environmentMap.minFilter = THREE.NearestFilter;
            this.environmentMap.magFilter = THREE.NearestFilter;
            this.environmentMap.generateMipmaps = false;

            this.environmentMap.colorSpace = THREE.SRGBColorSpace;
        },

        handleIntersect(intersects, event) {
            const object = intersects[0].object;

            if (object.material && object.material.emissive) {
                if (
                    this.hoveredObject !== null &&
                    this.hoveredObject !== "null" &&
                    this.hoveredObject !== object &&
                    this.hoveredObject?.material
                ) {
                    this.smoothHoverOff(this.hoveredObject.material.emissive);
                }

                this.hoveredObject = object;

                this.smoothHoverOn(this.hoveredObject.material.emissive);

                this.tooltipText = object.name || "";

                const tooltipPosition = this.calculateTooltipPosition(
                    event,
                    this.hoveredObject.position
                );
                this.updateTooltipPosition(tooltipPosition);
            }
        },
        hoverModel(event) {
            this.getRaycaster(event);

            const intersects = this.raycaster.intersectObjects(
                this.scene.children
            );

            if (intersects.length > 0 && this.hover) {
                this.handleIntersect(intersects, event);
            } else {
                if (this.hoveredObject !== null) {
                    this.smoothHoverOff(this.hoveredObject.material.emissive);

                    this.hoveredObject = null;
                    this.tooltipText = "";

                    this.hideTooltip();
                }
            }
        },
        smoothHoverOff(object) {
            this.canvas.style.cursor = "default";
            return gsap.to(object, {
                ...this.emissiveOff,
            });
        },
        smoothHoverOn(object) {
            this.canvas.style.cursor = "pointer";
            return gsap.to(object, {
                ...this.emissiveOn,
            });
        },
        calculateTooltipPosition(event, objectPosition) {
            const offsetX = -200;
            const offsetY = -300;

            const vector = new THREE.Vector3();

            vector.project(this.camera);

            const x = ((vector.x + 1) * window.innerWidth) / 2 + offsetX;
            const y = (-(vector.y - 1) * window.innerHeight) / 2 + offsetY;

            return { x, y };
        },
        updateTooltipPosition(position) {
            this.tooltip.style.left = position.x + "px";
            this.tooltip.style.top = position.y + "px";
            this.tooltip.style.opacity = "1";
        },
        hideTooltip() {
            this.tooltip.style.opacity = "0";
        },
        clickModel(event) {
            // let tl = gsap.timeline();
            this.getRaycaster(event);
            if (this.hoveredObject !== null) {
                gsap.to(this.hoveredObject.material.emissive, {
                    r: 0,
                    g: 0,
                    b: 0,
                });
                this.hoveredObject = null;
                this.tooltipText = "";
                this.hideTooltip();
            }

            // Find intersected objects
            const intersects = this.raycaster.intersectObjects(
                this.scene.children
            );

            if (!this.descripton) {
                this.canvas.style.cursor = "default";
                if (intersects.length > 0) {
                    this.hover = false;

                    const clickedPart = intersects[0].object;

                    if (this.selectedPart === clickedPart) {
                        this.originalColors.forEach((color, part) => {
                            part.visible = true;
                        });

                        this.selectedPart = null;
                    } else {
                        // Hide all parts
                        this.scene.traverse((child) => {
                            if (
                                child.isMesh &&
                                child.name !== clickedPart.name
                            ) {
                                child.material.transparent = true;
                                gsap.to(
                                    child.material,
                                    {
                                        opacity: 0,
                                        duration: 0.8,
                                        onComplete: () => {
                                            child.visible = false;
                                        },
                                    },
                                    "<"
                                );
                            }
                        });
                        clickedPart.material.opacity = 1;
                        clickedPart.visible = true;
                        this.selectedPart = clickedPart;
                    }

                    let target = clickedPart.position.clone();

                    this.moveCameraPosition(target, this.showCameraPosition);

                    this.$emit(
                        "show-description",
                        clickedPart.userData.key,
                        clickedPart.userData.parentName
                    );
                }
            }
        },
        changeModel() {
            this.$refs.preloader.classList.add("active");
            this.destroyModel();
            this.moveCameraPosition(
                this.startTargetCamera,
                this.startCameraPosition
            );
            this.getModel(this.getModelData).addModel;
        },
        moveCameraPosition(target, position) {
            let tl = gsap.timeline();
            if (!this.showDescripton) {
                tl.to(this.targetCamera, {
                    ...target,
                    duration: 1,
                    onComplete: () => {
                        this.controls.enabled = true;
                    },
                }).to(
                    this.camera.position,
                    {
                        ...position,
                        duration: 1,
                    },
                    "<"
                );
            }
        },
        destroyScene() {
            gsap.killTweensOf(this.targetCamera);
            window.removeEventListener("resize", this.resize);
            window.removeEventListener("mousemove", this.throttledHoverModel);
            window.removeEventListener("click", this.clickModel);

            this.meshes.forEach((mesh) => {
                mesh.traverse((child) => {
                    if (child.isMesh) {
                        child.geometry.dispose();
                        child.geometry = null;
                        if (child.material.map) {
                            child.material.map.dispose();
                            child.material.map = null;
                        }
                        child.material.dispose();
                        child.material = null;

                        child.userData.parentName = NaN;
                        child.userData.key = NaN;
                        child.userData.originalColor = NaN;
                        if (child instanceof THREE.Texture) {
                            child.dispose();
                            child = null;
                        }
                    }
                });
            });

            this.meshes = [];
            this.originalColors = [];
            this.environmentMap = null;

            this.renderer.forceContextLoss();
            this.renderer.renderLists.dispose();
            this.renderer.dispose();

            this.canvas.removeChild(this.renderer.domElement);

            this.renderer = null;
            this.camera = null;
            this.scene = null;
        },
        destroyModel() {
            this.scene.traverse((child) => {
                if (child.isMesh) {
                    child.geometry.dispose();
                    child.geometry = null;
                    if (child.material.map) {
                        child.material.map.dispose();
                        child.material.map = null;
                    }
                    child.material.dispose();
                    child.material = null;

                    child.userData.parentName = NaN;
                    child.userData.key = NaN;
                    child.userData.originalColor = NaN;
                    if (child instanceof THREE.Texture) {
                        child.dispose();
                        child = null;
                    }
                }
                if (child.isGroup) {
                    this.scene.remove(child);
                }
            });

            this.meshes = [];
            this.originalColors = new Map();
        },
        stopParalax() {
            this.startParalax = false;
        },
        tick() {
            //   this.clock = new THREE.Clock();
            //   const elapsedTime = this.clock.getElapsedTime();
            //   let delta = elapsedTime - this.prev;
            //   this.prev = delta;

            /** Test mesh */
            // this.planeMaterial.color.set(""#0083c4"");
            // this.plane.rotation.y += 0.01;

            if (
                this.startParalax &&
                (this.cursor.x !== 0 || this.cursor.y !== 0)
            ) {
                let initialCameraPosition;
                if (this.camera?.position) {
                    initialCameraPosition = this.camera.position.clone();

                    const targetX =
                        initialCameraPosition.x + this.cursor.x * 0.03;
                    const targetY =
                        initialCameraPosition.y + this.cursor.y * 0.03;

                    gsap.to(this.camera.position, {
                        duration: 0.2,
                        x: targetX,
                        y: targetY,
                    });
                }
            }

            // Controls
            this.controls.update();
            // Render
            this.renderer !== null
                ? this.renderer.render(this.scene, this.camera)
                : "";

            requestAnimationFrame(this.tick);
        },
        resize() {
            window.addEventListener("resize", () => {
                // Update sizes
                this.getSizes.width = window.innerWidth;
                this.getSizes.height = window.innerHeight;

                // Update camera
                this.camera.aspect = this.getSizes.width / this.getSizes.height;
                this.camera.updateProjectionMatrix();

                // Update renderer
                this.renderer.setSize(
                    this.getSizes.width,
                    this.getSizes.height
                );
                this.renderer.setPixelRatio(
                    Math.min(window.devicePixelRatio, 2)
                );
            });
        },
        createGuiParams() {
            // Debug;
            this.gui = new dat.GUI({
                width: 500,
            });

            this.gui
                .add(this.camera.position, "x")
                .min(0)
                .max(5)
                .step(0.001)
                .name("Camera X");
            this.gui
                .add(this.camera.position, "y")
                .min(0)
                .max(5)
                .step(0.001)
                .name("Camera Y");
            this.gui
                .add(this.camera.position, "z")
                .min(0)
                .max(5)
                .step(0.001)
                .name("Camera Z");

            this.gui
                .add(this.targetCamera, "x")
                .min(0)
                .max(5)
                .step(0.001)
                .name("target x");
            this.gui
                .add(this.targetCamera, "y")
                .min(0)
                .max(5)
                .step(0.001)
                .name("target y");
            this.gui
                .add(this.targetCamera, "z")
                .min(0)
                .max(5)
                .step(0.001)
                .name("target z");

            //   this.gui
            //     .add(this.pointLight.position, "x")
            //     .min(-1)
            //     .max(5)
            //     .step(0.001)
            //     .name("P_Light X");
            //   this.gui
            //     .add(this.pointLight.position, "y")
            //     .min(-1)
            //     .max(5)
            //     .step(0.001)
            //     .name("P_Light Y");
            //   this.gui
            //     .add(this.pointLight.position, "z")
            //     .min(-1)
            //     .max(5)
            //     .step(0.001)
            //     .name("P_Light Z");
            //   this.gui
            //     .add(this.pointLight, "intensity")
            //     .min(-1)
            //     .max(10)
            //     .step(0.001)
            //     .name("P_Light intensity");
            //   this.gui
            //     .add(this.ambientLight, "intensity")
            //     .min(-1)
            //     .max(5)
            //     .step(0.001)
            //     .name("A_Light intensity");
        },
    },
    computed: {
        getSizes() {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },
        getActiveClass() {
            return {
                active: this.descripton,
            };
        },
        getModelData() {
            return this.modelsData[this.qurrentModelKey];
        },
    },
    watch: {
        descripton() {
            if (!this.descripton && this.meshes.length > 0) {
                this.meshes.forEach((item) => {
                    item.traverse((child) => {
                        if (child.isMesh && child.userData.originalColor) {
                            gsap.to(child.material, {
                                opacity: 1,
                                duration: 0.8,
                                ease: "Circ.inOut",
                                onComplete: () => {
                                    child.material.transparent = false;
                                    this.hover = true;
                                },
                            });
                            child.visible = true;
                        }
                    });
                });
                this.moveCameraPosition(
                    this.startTargetCamera,
                    this.startCameraPosition
                );
            }
        },
        qurrentModelKey() {
            //   this.destroyModel();
            this.changeModel();
        },
        $route() {
            this.$refs.webGl.style.pointerEvents = "none";
        },
    },
};
</script>

<style scoped>
.tooltip {
    position: absolute;
    pointer-events: none;
    background-color: rgba(145, 152, 215, 0.8);
    color: white;
    padding: 5px;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    border-radius: 3px;
    font-weight: 600;
    font-size: 25px;
    z-index: 3;
}
</style>
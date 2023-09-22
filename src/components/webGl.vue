<template >
    <div>
        <div ref="webGl" class="webGl"></div>
        <div class="webGl__btn_container">
            <slot></slot>
        </div>
    </div>
</template>
  
  
<script>
// import store from "~~/store";
import * as dat from "lil-gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
    data() {
        return {
            states: [],
            color: "#0083c4",
        };
    },

    mounted() {
        this.sizes = this.getSizes();
        this.init();
        this.resize();
        this.tick();
    },

    methods: {
        init() {
            // Debug
            // this.gui = new dat.GUI({
            //   width: 500,
            // });

            this.canvas = this.$refs.webGl;

            this.scene = new THREE.Scene();

            this.camera = new THREE.PerspectiveCamera(
                45,
                this.sizes.width / this.sizes.height,
                0.01,
                10
            );

            this.camera.position.x = 4;
            this.camera.position.y = 2;
            this.camera.position.z = 5;

            /**
             * Renderer
             */
            this.renderer = new THREE.WebGLRenderer({
                antialias: true,
            });
            // renderer.outputEncoding = THREE.sRGBEncoding;

            this.renderer.setSize(this.sizes.width, this.sizes.height);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.canvas.appendChild(this.renderer.domElement);

            this.scene.add(this.camera);

            /** Controls */
            this.controls = new OrbitControls(this.camera, this.canvas);
            this.controls.enableDamping = true;
            this.controls.minDistance = 3;
            this.controls.maxDistance = 6;

            /**
             * Mesh
             */

            this.planeMaterial = new THREE.MeshStandardMaterial({
                transparent: true,
                opacity: 1,
                side: THREE.DoubleSide,
                wireframe: false,
            });

            this.planeMaterial.color.set(this.color);

            this.planeGeometry = new THREE.BoxGeometry(1, 1, 1);

            this.plane = new THREE.Mesh(this.planeGeometry, this.planeMaterial);

            this.scene.add(this.plane);

            /** Light */

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

            this.scene.add(this.pointLight);
            // this.scene.add(this.pointLightHelper);

            // this.gui
            //   .add(this.pointLight.position, "x")
            //   .min(-1)
            //   .max(5)
            //   .step(0.001)
            //   .name("P_Light X");
            // this.gui
            //   .add(this.pointLight.position, "y")
            //   .min(-1)
            //   .max(5)
            //   .step(0.001)
            //   .name("P_Light Y");
            // this.gui
            //   .add(this.pointLight.position, "z")
            //   .min(-1)
            //   .max(5)
            //   .step(0.001)
            //   .name("P_Light Z");
            // this.gui
            //   .add(this.pointLight, "intensity")
            //   .min(-1)
            //   .max(10)
            //   .step(0.001)
            //   .name("P_Light intensity");
            // this.gui
            //   .add(this.ambientLight, "intensity")
            //   .min(-1)
            //   .max(5)
            //   .step(0.001)
            //   .name("A_Light intensity");

            /** Clock */

            this.clock = new THREE.Clock();
        },

        tick() {
            const elapsedTime = this.clock.getElapsedTime();
            let delta = elapsedTime - this.prev;
            this.prev = delta;

            this.planeMaterial.color.set(this.color);
            this.plane.rotation.y += 0.01;

            // Controls
            this.controls.update();
            // Render
            this.renderer.render(this.scene, this.camera);

            requestAnimationFrame(this.tick);
        },

        getSizes() {
            return {
                width: window.innerWidth,
                height: window.innerHeight,
            };
        },

        resize() {
            window.addEventListener("resize", () => {
                // Update sizes
                this.sizes.width = window.innerWidth;
                this.sizes.height = window.innerHeight;

                // Update camera
                this.camera.aspect = this.sizes.width / this.sizes.height;
                this.camera.updateProjectionMatrix();

                // Update renderer
                this.renderer.setSize(this.sizes.width, this.sizes.height);
                this.renderer.setPixelRatio(
                    Math.min(window.devicePixelRatio, 2)
                );
            });
        },
        check(first, second) {
            this.color = second;
        },
    },
};
</script>
  
<style>
</style>
  
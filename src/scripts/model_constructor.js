/** Constructor */
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


export class CreateModel {

    constructor(options) {

        this.options = options
    }

    get addModel() {

        return this._loader(this.options.model, this.options.scene, this.options.scale, this.options.name, this.options.meshStore, this.options.material, this.options.materialColor, this.options.preloader)

    }

    _loader(model, scene, scale, name, mStore, material, materialColor, preloader) {

        new GLTFLoader(preloader).load(model, (gltf) => {

            let otherMesh = gltf.scene

            mStore.push(gltf.scene)
            otherMesh.children.forEach((child, key) => {


                if (child.isMesh) {
                    // console.log(child)
                    otherMesh.userData[child.name] = child.material
                    // child.material.transparent = true
                    child.material.envMap = material
                    child.material.envMapIntensity = 6
                    child.material.needsUpdate = true
                    child.userData.parentName = name
                    child.userData.key = key
                    child.userData.originalColor = child.material.color.clone();
                    materialColor.set(child, child.material.color.clone())

                }

            })


            otherMesh.name = name

            scale ? otherMesh.scale.set(scale.x, scale.y, scale.z) : ''

            scene.add(otherMesh)

        }
        )

    }
}

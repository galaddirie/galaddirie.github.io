import * as THREE from './threejs/build/three.module.js';
import { GLTFLoader } from './threejs/module/loader/GLTFLoader.js';
import { OrbitControls } from './threejs/module/OrbitControls.js';
import { TWEEN } from './threejs/module/tween.module.min.js';
import Stats from './threejs/module/stats.module.js';
import { EffectComposer } from './threejs/module/postprocessing/EffectComposer.js';
import { RenderPass } from './threejs/module/postprocessing/RenderPass.js';

import { fxaa, bloom, gamaCorrection } from './postProcess/postProcess.js';
let container,
    stats,
    composer,
    camera,
    cameraControls,
    scene,
    renderer,
    model,
    sphere,
    fxaaPass,
    object,
    mixer

// clock = new THREE.Clock()         // Used for anims, which run to a clock instead of frame rate 


const start = Date.now();



listeners();
application();


function application() {

    // RENDERER
    const canvas = document.getElementById("canvas-render");
    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

    renderer.autoClear = false;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.gammaInput = true;
    renderer.gammaOutput = true;
    renderer.setClearColor(0x000000, 0.0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    renderer.setSize(window.innerWidth, window.innerHeight);

    // STATS
    container = document.createElement('div');
    document.body.appendChild(container);
    stats = new Stats();
    container.appendChild(stats.dom);



    // CAMERA
    var aspect = window.innerWidth / window.innerHeight;

    const size = 100;

    camera = new THREE.PerspectiveCamera(25, aspect, .1, 10000);

    const s = 100

    camera.position.x = 650 + (-0.1 * window.innerWidth);
    camera.position.y = 1.5 * s;
    camera.position.z = 700 + (-0.1 * window.innerHeight);//5
    camera.rotation.set(.3, .87, -.17)

    //cameraControls = new OrbitControls( camera, canvas );
    //cameraControls.enabled = false 


    scene = new THREE.Scene();
    // scene.background = new THREE.Color('black')  
    const ambient = new THREE.AmbientLight(0xFFFFFF); // soft white light
    ambient.intensity = 1
    scene.add(ambient);

    const loadingManager = new THREE.LoadingManager(() => {

        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('fade-out');

        // optional: remove loader from DOM via event listener
        loadingScreen.addEventListener('transitionend', onTransitionEnd);

    });
    loadmodel(loadingManager);


    scene.add(sphere)
    camera.updateProjectionMatrix();
    //cameraControls.target.set(model)

    // POST PROCESS


    const renderScene = new RenderPass(scene, camera);
    composer = new EffectComposer(renderer);

    composer.addPass(renderScene);
    fxaaPass = fxaa(renderer)
    const gammaPass = gamaCorrection()

    const bloomPass = bloom()

    //composer.addPass( fxaaPass  );
    //composer.addPass( bloomPass );

    //composer.addPass( gammaPass );
    animate();
};

function onProgress(xhr) {

    if (xhr.lengthComputable) {

        const percentComplete = xhr.loaded / xhr.total * 100;
        console.log(Math.round(percentComplete, 2) + '% downloaded');

    }

}

function onError() {
    console.log('an error has occurred')
}

function loadmodel(loadingManager) {
    var loader = new GLTFLoader(loadingManager);


    loader.load(
        'assets/models/monkey/scene.glb',
        function (gltf) {

            model = gltf.scene;
            model.position.y = window.pageYOffset * .1
            const s = 100 // THREE.Group
            model.scale.set(s, s, s) // scale here


            model.traverse(c => {



                if (c.isMesh) {
                    object = c
                    c.material.metalness = .9
                    c.rotation.z = 0.2
                    //c.material.dithering

                }
                if (c) {
                    c.castShadow = true
                    c.receiveShadow = true
                    //console.log(c)
                }

                if (c.isLight) {
                    c.shadow.mapSize.width = 2048; // default
                    c.shadow.mapSize.height = 2048; // default

                    const x = 1000;
                    c.shadow.camera.left = -x;
                    c.shadow.camera.right = x;
                    c.shadow.camera.top = x;
                    c.shadow.camera.bottom = -x;
                    //const helper = new THREE.CameraHelper( c.shadow.camera )
                    //scene.add(helper)
                }
            });



            gltf.asset;
            scene.add(gltf.scene);

        },

        onProgress,
        onError
    );
};




// EVENTS //
function listeners() {
    //EVENT LISTENERS
    window.addEventListener('resize', onWindowResize, false);

    document.addEventListener('scroll', onScrollEvent);
    //document.addEventListener('mouseleave', onMouseLeave);
};

function onWindowResize() {

    // updating the aspect ratio
    const aspect = window.innerWidth / window.innerHeight;
    camera.aspect = aspect

    const s = 100
    camera.position.x = 650 + (-0.1 * window.innerWidth);
    camera.position.z = 700 + (-0.1 * window.innerHeight);


    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
    const pixelRatio = renderer.getPixelRatio();

    fxaaPass.material.uniforms['resolution'].value.x = 1 / (window.innerWidth * pixelRatio);
    fxaaPass.material.uniforms['resolution'].value.y = 1 / (window.innerHeight * pixelRatio);

};

function onTransitionEnd(event) {

    event.target.remove();

}

// credits:https://stackoverflow.com/questions/31223341/detecting-scroll-direction
//let oldScrollY = 0;
function onScrollEvent(event) {
    if (object) {
        model.position.y = window.scrollY * .6
        object.rotation.z -= .01
        //console.log(window.pageYOffset)
    };
    // var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    // if (st > oldScrollY){
    //     if(object){


    //     }
    // } else {
    //     if(object){
    //         model.position.y =window.pageYOffset*.1
    //         object.rotation.z -=.01
    //     }
    // }
    //oldScrollY = st <= 0 ? 0 : st;



    //console.log(event.scrollY );
}
//////////////

function animate() {
    requestAnimationFrame(animate);
    stats.update();

    // TWEEN.update();
    if (camera) {
        //console.log(camera.position.x)
    }
    composer.render();


};

function render() {

    const timer = Date.now() - start;


    sphere.rotation.y = ((timer * 0.002)) * 1;

    //cameraControls.update();

    renderer.render(scene, camera);

};
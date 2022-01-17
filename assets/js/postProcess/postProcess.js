import * as THREE from '../threejs/build/three.module.js';
import { ShaderPass } from '../threejs/module/postprocessing/ShaderPass.js';
// import { CopyShader } from './threejs/module/shaders/CopyShader.js';
import { FXAAShader } from '../threejs/module/shaders/FXAAShader.js';
import { UnrealBloomPass } from '../threejs/module/postprocessing/UnrealBloomPass.js';
import { GammaCorrectionShader } from '../threejs/module/shaders/GammaCorrectionShader.JS';
function fxaa(renderer){
    const fxaaPass = new ShaderPass( FXAAShader );
    
    const pixelRatio = renderer.getPixelRatio();
    fxaaPass.material.uniforms[ 'resolution' ].value.x = 1 / (window.innerWidth * pixelRatio );
    fxaaPass.material.uniforms[ 'resolution' ].value.y = 1 / ( window.innerHeight * pixelRatio );
    
    
    return fxaaPass
    
}

function bloom(){
    const params = {
        exposure: 1,
        bloomStrength: .6,
        bloomThreshold: 0,
        bloomRadius: 1
    };

    const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
    bloomPass.threshold = params.bloomThreshold;
    bloomPass.strength = params.bloomStrength;
    bloomPass.radius = params.bloomRadius;
    
    return bloomPass
}


function gamaCorrection(){
    return new ShaderPass( GammaCorrectionShader );
}
export {fxaa, bloom, gamaCorrection}
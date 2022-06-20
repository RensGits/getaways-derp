import './App.css';
import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei';
import CustomLoader from './Functional/CustomLoader';

import Derp from './GLTFJSX/Derp.js';
import logo from './Images/getaways-logo.png';
import derpIcon from './Images/derp_icon.svg'
import derpLogo from './Images/derp_logo.svg'


function App() {
  return (
    <>
    <div className = "canvas-container">
      <Canvas
        style={{ height: '100%', width: '100%', zIndex: ''}}
        camera = {{
          position: [90, 5, 30],
          fov: 10
        }}
        shadows
        
      >
        <Suspense fallback = {<CustomLoader color="white" />}>
          <group position={[4.05, 6.31, -1.05]} rotation={[1.89, 0.88, -2.05]}>
            <spotLight intensity={1} angle={3} penumbra={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
            <ambientLight intensity={0.05}/>
          </group>
          <OrbitControls enableZoom={true} enablePan={true} minDistance={55} maxDistance={55} enableRotate={true} enablePan={false}   maxPolarAngle={2} minPolarAngle={1.5}/>
          <group>
            <Derp/>
            </group>
          
        </Suspense>
      </Canvas>
      <img className='getaways-header' src = {logo} alt="" />
      <img className='derp-icon' src={derpIcon} alt="" />
      <img className='derp-logo' src={derpLogo} alt="" />
    </div>
   
    </>
  );
}

export default App;

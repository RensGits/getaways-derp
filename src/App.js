//
//
//
//
//
// ▒█▀▀█ ▒█▀▀▀ ▀▀█▀▀ ░█▀▀█ ▒█░░▒█ ░█▀▀█ ▒█░░▒█ ▒█▀▀▀█ 
// ▒█░▄▄ ▒█▀▀▀ ░▒█░░ ▒█▄▄█ ▒█▒█▒█ ▒█▄▄█ ▒█▄▄▄█ ░▀▀▀▄▄ 
// ▒█▄▄█ ▒█▄▄▄ ░▒█░░ ▒█░▒█ ▒█▄▀▄█ ▒█░▒█ ░░▒█░░ ▒█▄▄▄█
//
//
// https://projectgetaways.com
// https://discord.gg/mQ2KAVNU9v
// 
// For any questions regarding Getaways join our discord channel
//
//                                                                                                                  
// @&&%%%%%#                                                                                                
// @@@@@%%%%%&&&&#                                                                                             
// @@@@@&%%#&&&&&&&&&&&&&&&&&&&&&&,       (/*,                                                                  
// @@@@@@@@@@@&&&&&&&&&&&&&&&&&&&&&&&&/.  (*****                                                               
//   @@@@@@@&@&&&&&&&&&&&&&&&&&&%%%%,..../#/,,,,                                                               
//                            ((%@%%%#.....%*,,,,                                                              
//      %       @@@@@&&&&&@&(//////**(%*....%****                                                              
// @&&&%#%&&&&&&&&&&&&&&&&&&&&&&(*****,,#....#///*,,,,,,,,,,,,,,,,,,,.,                                        
// @@@@&%&&&&&&&&&&&&&&&&&&&&&&&&&&&&/,,,,*,..,,,,,,,,,,,..................,,                                   
// &@@@@@&&&&&&&&&&&@@@@@@@@@@@&@@*@@&&#,,***,,,,,,,,,,,.........................,.                              
// @@@@@@@&@@                      /,,,,,,,,,,,,,,,,,,..............................,,                           
//                           *(,,,,,,,,,,,,,,,,,,,,,................................,,.                        
//                         (((,,,,,,,,,,,,,,,,,,,,,,...................................,,                      
//                       ((((,,,,,,,,,,,,,,,,,,,,,,,,............................  ......,,                    
//                    ,(((((,,,,,,,,,,,,,,,......... ..........................  ...........,                  
//                  (((((((,,,,,,,,,,,,................... ...................................,                
//                 %######***********..........................................................                
//               *%######*********,,.............................................................              
//               #######(********(.......................................... ......................            
//             (########*******((,,,,,,,,,.......................,.................................*           
//             %#######*******(((,,,,,,,,,........................,,,..............................*.          
//            ########********((,,,,,,,,,,........................,,,,,,,,,........................**          
//      @@@@  ########(///////((,,,,,,,,,,........................,,,,,,,,,........................,**         
//    @@@   .&@@@@@%##(((/////((,,,,,,,,,,........................,,,,,,,,,,,,,,....................**         
//    @&&&&&&&&&@@&%#@@((((///(((,,,,,,,*,,,......................,,,,,,,,,,,,,,,..................*,**        
//    @&&&&&&&&&&&&&@@%((((((((((,,,,,****,,,,,,...............,,,,,,,,,,,,,,,,,,,.....,,,,,.....,,,*,*        
//     &&&&&&&&&&&&&@@&((((((((((/********,,,,,,,,,,,...,,,,,,,,,,,,,,,,,,,,,,,,,,,..,,,,,,,,,.,,,****(,       
//     *&&&&&&&&&&&&&&&&(((((((((((/*******,,,,,,,,,,,,,,,,,,,,,,,,*****************////*,///////*****(        
//      @@(&&&&&&&&&&&&&##########((((((***,,,,,,,,,,,,,,,,,,,*****************************///*******((        
//       @@ *&&&&&&&&&&&############((((((((((*,,,,,,,,,,*/(/**********,.....,***********************(/        
//       @@@  .%&&&&@##############(((((((((((((((((///////////******,,,,.......,*******************/((        
//       @#@@@&/##&&@##############((((((((((((((((((/////////////((((,,,,,,,...,,,*****************((         
//        (@@   %#################(((((((((((((///////////////////((((*,,,,,,,,.,,,,***************/#%         
//         @@@@/ #################(((((((((((((((////////////////###/((,,,,,,,,,,,,,,//(((((((((((##%          
//         @@@&&@%###############(((((((((((#######(((((((((((((((#####(,,,,,,,,,,,,,,((((((((((/###           
//          *@@@@@&#########%((((%%%%%%##############(((((((((((((######(/,,,,,,,,,,,,/((/((((((###            
//            @@@@@@@@@@@@@@######%&&@@@%#############((((((((((((##########(,,,,,,,,,*(((((((####*            
//                   %######&&&&&&&&&@@@%##############((((((((##############(,,,,,,,,*((((((####              
//                    ,#################################(((((#################*,,,,,,,,((((#####               
//                      #################################((####################/,,,,,,,######%                 
//                       *######################################################/,,,,,,#####                   
//                          %####################################################(***//##%                     
//                            %####################################################////%                       
//                              #####################################################(/                        
//                                 *%###########################################(%####                         
//                                       %#################################%.    ####                          
//                                            %%%##################%%%/       
//
//
//
//
//                                 


import './App.css';
import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei';
import { SelectiveBloom, DepthOfField, EffectComposer } from '@react-three/postprocessing'
import CustomLoader from './Functional/CustomLoader';
import logo from './Images/getaways-logo.png';
import derpIcon from './Images/derp_icon.svg'
import derpLogo from './Images/derp_logo.svg'


function App() {

  const spotL = useRef();
  const ambientL = useRef();
  const smallRedLights = useRef();
  const smallGreenLights = useRef();

  function Derp() {

    const group = useRef()
    const { nodes, materials, animations } = useGLTF('derp.glb')
    const { actions } = useAnimations(animations, group)

    useEffect(() => {
      actions.idleanimation.play()
    });
    return (
      <group ref={group} dispose={null} scale={2} position={[0, -5.5, 0]}>
        <group name="Scene">
          <group name="Sun" position={[4.87, 6.93, -3.65]} />
          <group name="Spot" position={[10.78, 5.76, 1.71]} rotation={[0.16, 0, -1.03]} />
          <group name="Point" position={[3.91, 7.33, 8.67]} />
          <group name="Empty" position={[-4.52, 7.43, -7.7]} rotation={[1.57, -0.03, -1.6]} scale={2.91} />
          <group name="Armature" rotation={[0, 0, 0.02]}>
            <primitive object={nodes.body} />
            <primitive object={nodes['tail_high#']} />
            <group name="Sphere003">
              <skinnedMesh name="Sphere003_1" geometry={nodes.Sphere003_1.geometry} material={materials['body_alternative.001']} skeleton={nodes.Sphere003_1.skeleton} />
              <skinnedMesh name="Sphere003_2" geometry={nodes.Sphere003_2.geometry} material={materials.body} skeleton={nodes.Sphere003_2.skeleton} />
              <skinnedMesh name="Sphere003_3" geometry={nodes.Sphere003_3.geometry} material={materials.white} skeleton={nodes.Sphere003_3.skeleton} />
              <skinnedMesh name="Sphere003_4" geometry={nodes.Sphere003_4.geometry} material={materials.allu} skeleton={nodes.Sphere003_4.skeleton} />
              <skinnedMesh name="Sphere003_5" geometry={nodes.Sphere003_5.geometry} material={materials.body_alternative} skeleton={nodes.Sphere003_5.skeleton} />
              <skinnedMesh name="Sphere003_6" geometry={nodes.Sphere003_6.geometry} material={materials.black} skeleton={nodes.Sphere003_6.skeleton} />
              <skinnedMesh name="Sphere003_7" geometry={nodes.Sphere003_7.geometry} material={materials.dark_green} skeleton={nodes.Sphere003_7.skeleton} />
              <skinnedMesh name="Sphere003_8" geometry={nodes.Sphere003_8.geometry} material={materials.red} skeleton={nodes.Sphere003_8.skeleton} />
              <skinnedMesh name="Sphere003_9" geometry={nodes.Sphere003_9.geometry} material={materials.purple} skeleton={nodes.Sphere003_9.skeleton} />
              <skinnedMesh name="Sphere003_10" geometry={nodes.Sphere003_10.geometry} material={materials['Material.002']} skeleton={nodes.Sphere003_10.skeleton} />
              <skinnedMesh name="Sphere003_11" geometry={nodes.Sphere003_11.geometry} material={materials.green_small_lights_glow} skeleton={nodes.Sphere003_11.skeleton} ref={smallGreenLights} />
              <skinnedMesh name="Sphere003_12" geometry={nodes.Sphere003_12.geometry} material={materials.red_small_lights_glow} skeleton={nodes.Sphere003_12.skeleton} ref={smallRedLights} />
              <skinnedMesh name="Sphere003_13" geometry={nodes.Sphere003_13.geometry} material={materials.green_sword_glow} skeleton={nodes.Sphere003_13.skeleton} />
            </group>
          </group>
        </group>
      </group>
    )
  }

  useGLTF.preload('derp.glb')

  return (
    <div className="canvas-container">
      <Canvas
        style={{ height: '100%', width: '100%'}}
        camera={{
          position: [90, 5, 30],
          fov: 10
        }}
        shadows
      >
        <Suspense fallback={<CustomLoader color="white" />}>

          <group position={[4.05, 6.31, -1.05]} rotation={[1.89, 0.88, -2.05]}>
            <spotLight ref={spotL} intensity={1} angle={3} penumbra={1} decay={2} rotation={[-Math.PI / 2, 0, 0]} />
            <ambientLight ref={ambientL} intensity={0.15} />
          </group>
          <OrbitControls enableZoom={true} minDistance={55} maxDistance={55} enableRotate={true} enablePan={false} maxPolarAngle={2} minPolarAngle={1.5} />
          <group>
            <Derp />
          </group>

          <EffectComposer autoclear={false} multisampling={0} disableNormalPass={true}>
            <DepthOfField
              focusDistance={0}
              focalLength={0.0}
              bokehScale={0}
              height={480}
            />
            <SelectiveBloom
              selection={[smallGreenLights, smallRedLights]}
              intensity={3}
              luminanceThreshold={0}
              luminanceSmoothing={0.025}
              lights={[spotL, ambientL]}
            />
          </EffectComposer>

        </Suspense>
      </Canvas>
      <img className='getaways-header' src={logo} alt="" />
      <img className='derp-icon' src={derpIcon} alt="" />
      <img className='derp-logo' src={derpLogo} alt="" />
    </div>
  );
}

export default App;

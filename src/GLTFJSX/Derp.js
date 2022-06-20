import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('derp.glb')
  const { actions } = useAnimations(animations, group)
 
  useEffect(()=> {
    actions.idleanimation.play()});
  return (
    <group ref={group} {...props} dispose={null} scale={2} position={[0,-5.5,0]}>
      <group name="Scene">
        <group name="Sun" position={[4.87, 6.93, -3.65]} />
        <group name="Spot" position={[10.78, 5.76, 1.71]} rotation={[0.16, 0, -1.03]} />
        <group name="Point" position={[3.91, 7.33, 8.67]} />
        <group name="Empty" position={[-4.52, 7.43, -7.7]} rotation={[1.57, -0.03, -1.6]} scale={2.91} />
        <group name="Armature" rotation={[0, 0, 0.02]}>
          <primitive object={nodes.body} />
          <primitive object={nodes['tail_high#']} />
          <group name="Sphere026">
            <skinnedMesh name="Sphere032" geometry={nodes.Sphere032.geometry} material={materials['body_alternative.001']} skeleton={nodes.Sphere032.skeleton} />
            <skinnedMesh name="Sphere032_1" geometry={nodes.Sphere032_1.geometry} material={materials.body} skeleton={nodes.Sphere032_1.skeleton} />
            <skinnedMesh name="Sphere032_2" geometry={nodes.Sphere032_2.geometry} material={materials.white} skeleton={nodes.Sphere032_2.skeleton} />
            <skinnedMesh name="Sphere032_3" geometry={nodes.Sphere032_3.geometry} material={materials.allu} skeleton={nodes.Sphere032_3.skeleton} />
            <skinnedMesh name="Sphere032_4" geometry={nodes.Sphere032_4.geometry} material={materials.body_alternative} skeleton={nodes.Sphere032_4.skeleton} />
            <skinnedMesh name="Sphere032_5" geometry={nodes.Sphere032_5.geometry} material={materials.black} skeleton={nodes.Sphere032_5.skeleton} />
            <skinnedMesh name="Sphere032_6" geometry={nodes.Sphere032_6.geometry} material={materials.dark_green} skeleton={nodes.Sphere032_6.skeleton} />
            <skinnedMesh name="Sphere032_7" geometry={nodes.Sphere032_7.geometry} material={materials.red} skeleton={nodes.Sphere032_7.skeleton} />
            <skinnedMesh name="Sphere032_8" geometry={nodes.Sphere032_8.geometry} material={materials.purple} skeleton={nodes.Sphere032_8.skeleton} />
            <skinnedMesh name="Sphere032_9" geometry={nodes.Sphere032_9.geometry} material={materials['Material.002']} skeleton={nodes.Sphere032_9.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('derp.glb')

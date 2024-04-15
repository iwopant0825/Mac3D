import { Box, OrbitControls, Plane } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { MacModel } from "./components/MacModel"
import { Suspense } from "react"
import Loding from "./components/Loding"

function App() {
  return (
    <>
    <Suspense fallback={<Loding/>}>
      <Canvas
        shadows
        gl={{antialias:true}}
        camera={{
          position:[1,1,1]
        }}
      >
        <directionalLight shadow-mapSize={4096} castShadow position={[-4, 11, 4]} intensity={6} />
        <ambientLight intensity={1}/>
        <color attach={'background'} args={['skyblue']}/>
        <OrbitControls />
        <MacModel/>
        <mesh receiveShadow rotation-x={-Math.PI/2}>
          <planeGeometry args={[4,4,4]}/>
          <meshStandardMaterial color={'orange'}/>
        </mesh>
      </Canvas>      
    </Suspense>
    </>
  )
}

export default App

import { Box, OrbitControls, Plane } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { MacModel } from "./components/MacModel"

function App() {
  return (
    <>
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
    </>
  )
}

export default App

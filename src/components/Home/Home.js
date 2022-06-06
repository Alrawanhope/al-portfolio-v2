import React, { Suspense,useRef } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import {
  Html,
  useProgress,
  // OrbitControls,
  useGLTF,
  PresentationControls,
} from "@react-three/drei";
import {
  homeSession,
  homeHeader,
  home3DModel,
  homeLoadContainer,
  homeLoad,
  homeProgress,
} from "./Home.module.css";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className={homeLoadContainer}>
        <div className={homeLoad}></div>
        <div className={homeProgress}>{Math.floor(progress)}%</div>
      </div>
    </Html>
  );
}

function Rotate(props) {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.005))
  return <group ref={ref} {...props} />
}


const Home = ({ sanityHome }) => {
  console.log("sanityHome", sanityHome);

  return (
    <section className={homeSession}>
      <div className={homeHeader}>
        <h1>{sanityHome.title}</h1>
        <p>{sanityHome.subtitle}</p>
      </div>
      <div className={home3DModel}>
        <Canvas>
          <Suspense fallback={<Loader />}>
            <ambientLight />
            <PresentationControls
              global={true} // Spin globally or by dragging the model
              cursor={true} // Whether to toggle cursor style on drag
              snap={false} // Snap-back to center (can also be a spring config)
              speed={8.5} // Speed factor
              zoom={1} // Zoom factor when half the polar-max is reached
              rotation={[0, 0, 0]} // Default rotation
              polar={[Math.PI / 7.5,Math.PI / 7]} // Vertical limits
              azimuth={[-Infinity, Infinity]} // Horizontal limits
              config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
            >
            <Rotate>
            <mesh position={[0, -3.5, 0]} scale={[3.5, 3.5, 3.5]}>
              <Model url={sanityHome.modal.asset.url} />
            </mesh>
            </Rotate>
            </PresentationControls>
          </Suspense>
          {/* <OrbitControls
            enableZoom={false}
            autoRotate={true}
            rotateSpeed={1.1}
            enableDamping
            enablePan={false}
            dampingFactor={0.05}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2.5}
          /> */}
      
        </Canvas>
      </div>
    </section>
  );
};

export default Home;

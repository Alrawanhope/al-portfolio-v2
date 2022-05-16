import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress, OrbitControls, useGLTF } from "@react-three/drei";
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
            <mesh position={[0, -3.5, 0]} scale={[3.5, 3.5, 3.5]}>
              <Model url={sanityHome.modal.asset.url} />
            </mesh>
          </Suspense>
          <OrbitControls
            enableZoom={false}
            autoRotate={true}
            rotateSpeed={1.1}
            enableDamping
            enablePan={false}
            dampingFactor={0.05}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2.5}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Home;

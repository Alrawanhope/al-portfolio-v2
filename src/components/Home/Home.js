import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Html, useProgress, OrbitControls, useGLTF } from "@react-three/drei";
import {
  homeSession,
  homeHeader,
  home3DModel,
  homeLoad,
  homeProgress,
} from "./Home.module.css";

// function Model(props) {
//   const { scene } = useGLTF("https://raw.githubusercontent.com/dwqdaiwenqi/react-3d-viewer/master/site/src/lib/model/DamagedHelmet.gltf");
//   return <primitive object={scene} />;
// }

// function Loader() {
//   const { progress } = useProgress();
//   return (
//     <Html center>
//       <div className={homeLoad}>
//         <div className={homeProgress}>{Math.floor(progress)}%</div>
//       </div>
//     </Html>
//   );
// }

const Home = ({ sanityHome }) => {
  console.log("sanityHome", sanityHome);

  return (
    <section className={homeSession}>
      <div className={homeHeader}>
        <h1>{sanityHome.title}</h1>
        <p>{sanityHome.subtitle}</p>
      </div>
      {/* <div className={home3DModel}>
        <Canvas>
          <Suspense fallback={<Loader />}>
            <ambientLight />
            <mesh position={[0, 0, 0]} scale={[2, 2, 2]}>
              <Model />
            </mesh>
          </Suspense>
          <OrbitControls
            enableZoom={false}
            rotateSpeed={1.1}
            enableDamping
            enablePan={false}
            dampingFactor={0.05}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 2.5}
            autoRotate={true}
          />
        </Canvas>
      </div> */}
    </section>
  );
};

export default Home;

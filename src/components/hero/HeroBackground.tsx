"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <Stars
                        radius={60}
                        depth={50}
                        count={1200}
                        factor={4}
                        saturation={0}
                        fade
                        speed={0.6}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
}



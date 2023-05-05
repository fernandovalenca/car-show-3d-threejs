"use client";
import CarShow from "@/components/car-show";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Suspense fallback={null}>
        <Canvas shadows>
          <CarShow />
        </Canvas>
      </Suspense>
    </main>
  );
}

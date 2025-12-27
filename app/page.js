"use client";
import Selector from "../components/Selector";
import Output from "../components/Output";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");

  return (
    <main className="min-h-screen p-6 relative">
      <h1 className="text-3xl font-bold mb-4">
        AI Guide to VFX & Animation Movies 🎬
      </h1>

      <Selector setResult={setResult} />
      <Output result={result} />

      {/* Images at bottom corners */}
      <img src="/f1.jpg" className="fixed bottom-2 left-2 w-28" />
      <img src="/f2.jpg" className="fixed bottom-2 right-2 w-28" />
    </main>
  );
}

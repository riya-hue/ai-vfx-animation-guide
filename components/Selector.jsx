"use client";

export default function Selector({ setResult }) {
  function generateContent(type, level) {
    const data = {
      "2D": {
        Beginner:
          "2D Animation uses hand-drawn or digital frames. Movies like Disney classics use this. Pipeline: Storyboard → Keyframes → In-betweening → Rendering.",
        Intermediate:
          "Advanced 2D includes rigging, tweening, and effects using tools like Toon Boom and After Effects."
      },
      "3D": {
        Beginner:
          "3D Animation builds characters using models. Steps: Modeling → Texturing → Rigging → Animation → Rendering.",
        Intermediate:
          "Used in Pixar movies. Includes lighting, camera movement, and physics simulation."
      },
      "VFX": {
        Beginner:
          "VFX blends real footage with CGI. Examples: explosions, green screen, digital environments.",
        Intermediate:
          "Advanced VFX uses motion tracking, compositing, and simulations (fire, water). Tools: Maya, Nuke."
      }
    };

    setResult(data[type][level]);
  }

  return (
    <div className="space-x-4 mb-6">
      <button onClick={() => generateContent("2D", "Beginner")} className="btn">
        2D Beginner
      </button>
      <button onClick={() => generateContent("3D", "Beginner")} className="btn">
        3D Beginner
      </button>
      <button onClick={() => generateContent("VFX", "Beginner")} className="btn">
        VFX Beginner
      </button>
    </div>
  );
}

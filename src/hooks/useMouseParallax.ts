import { useState, useEffect } from "react";

export function useMouseParallax(factor = 20) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * factor;
      const y = (e.clientY / window.innerHeight - 0.5) * factor;
      setCoords({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [factor]);

  return coords;
}

import { useEffect, DependencyList } from "react";
import gsap from "gsap";

export function useGSAP(callback: () => void, dependencies: DependencyList = []) {
  useEffect(() => {
    const ctx = gsap.context(callback);
    return () => ctx.revert();
  }, dependencies);
}

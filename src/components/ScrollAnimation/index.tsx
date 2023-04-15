import type { CSSProperties, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";

export type ScrollAnimationProps = {
  children: ReactNode;
  height: Pick<CSSProperties, "height">;
  direction: "up" | "down" | "left" | "right";
  rootMargin: string;
  triggerOnce: boolean;
};

const animationType = {
  up: "animate__animated animate__bounceInUp",
  down: "animate__animated animate__bounceInDown",
  left: "animate__animated animate__bounceInLeft",
  right: "animate__animated animate__bounceInRight",
};

function ScrollAnimation({
  children,
  height,
  direction,
  rootMargin,
  triggerOnce,
}: ScrollAnimationProps) {
  const { ref, inView } = useInView({
    rootMargin,
    triggerOnce,
  });

  const animateClass = animationType[direction];

  console.log(inView);

  return (
    <div ref={ref} style={height}>
      {inView && <div className={animateClass}>{children}</div>}
    </div>
  );
}

export default ScrollAnimation;

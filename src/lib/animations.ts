export const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 1, 0.5, 1], // premium ease-out
    },
  }),
};

export const TILT_VARIANTS = {
  rest: { scale: 1, y: 0, rotateX: 0, rotateY: 0 },
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

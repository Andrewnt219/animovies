export const animation = {
  popup: {
    basic: {
      initial: { opacity: 0 },
      enter: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fromTop: {
      initial: { opacity: 0, y: -5 },
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -5 },
    },
    fromBottom: {
      initial: { opacity: 0, y: 5 },
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 5 },
    },
    fromLeft: {
      initial: { opacity: 0, x: -5 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -5 },
    },
    fromRight: {
      initial: { opacity: 0, x: 5 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 5 },
    },
  },
};

export const animation = {
  stagger: {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
    },
    child: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    },
  },
  popup: {
    basic: {
      initial: { opacity: 0 },
      enter: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.2 },
    },
    fromTop: {
      initial: { opacity: 0, y: -5 },
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -5 },
      transition: { duration: 0.2 },
    },
    fromBottom: {
      initial: { opacity: 0, y: 5 },
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 5 },
      transition: { duration: 0.2 },
    },
    fromLeft: {
      initial: { opacity: 0, x: -5 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -5 },
      transition: { duration: 0.2 },
    },
    fromRight: {
      initial: { opacity: 0, x: 5 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 5 },
      transition: { duration: 0.2 },
    },
  },
};

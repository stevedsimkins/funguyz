export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 2,
      delay: 0.5,
    }
  }
}

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

export const rotate = {
  intial: {
    rotate: 0,
  },
  animate: {
    rotate: 45,
  },
}

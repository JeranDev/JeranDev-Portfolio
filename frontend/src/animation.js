export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: { duration: 0.75, ease: 'easeOut' },
    },
  },
}

export const carouselFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: 'easeIn' },
  },
}

export const backgroundFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2, ease: 'easeOut' },
  },
}

export const titleAnim = {
  hidden: { y: -200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}

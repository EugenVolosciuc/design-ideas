import ANIMATION_DELAY_FACTOR from 'constants/ANIMATION_DELAY_FACTOR'

export const firstRectVariants = {
  visible: { 
    x: 0,
    opacity: 1,
    transition: { type: 'tween' }
  },
  hidden: { x: -100, opacity: 0 }
}

export const secondRectVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 1 * ANIMATION_DELAY_FACTOR, type: 'tween' }
  },
  hidden: { y: -200, opacity: 0 }
}

export const thirdRectVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 2 * ANIMATION_DELAY_FACTOR, type: 'tween' }
  },
  hidden: { x: 200 , opacity: 0 }
}

export const fourthRectVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 3 * ANIMATION_DELAY_FACTOR, type: 'tween' }
  },
  hidden: { y: 100, opacity: 0 }
}
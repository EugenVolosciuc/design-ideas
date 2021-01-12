import ANIMATION_DELAY_FACTOR from 'constants/ANIMATION_DELAY_FACTOR'
import ANIMATED_TEXT_DURATION from 'constants/ANIMATED_TEXT_DURATION'

export const animatedTextVariants = {
  visible: {
    opacity: [0, 1, 1, 0],
    transition: { 
      delay: 6 * ANIMATION_DELAY_FACTOR,
      type: 'tween', 
      duration: ANIMATED_TEXT_DURATION - ANIMATION_DELAY_FACTOR
    },
    transitionEnd: { display: 'none' }
  },
  hidden: { opacity: 0 }
}

export const introductionTextVariants = {
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      delay: 6 * ANIMATION_DELAY_FACTOR + ANIMATED_TEXT_DURATION - (ANIMATION_DELAY_FACTOR * 2)
    }
  },
  hidden: { opacity: 0 },
  exit: { opacity: 0 }
}

export const ideaVariants = {
  visible: {
    opacity: 1,
    transition: { type: 'tween' }
  },
  hidden: { opacity: 0 },
  exit: { opacity: 0 }
}
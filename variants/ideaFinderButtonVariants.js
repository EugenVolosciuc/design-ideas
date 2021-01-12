import ANIMATION_DELAY_FACTOR from 'constants/ANIMATION_DELAY_FACTOR'

export const buttonVariants = {
  visible: { 
    opacity: 1,
    transition: { 
      delay: 7 * ANIMATION_DELAY_FACTOR, 
      type: 'tween', 
      duration: .5
    }
  },
  hidden: { opacity: 0 }
}
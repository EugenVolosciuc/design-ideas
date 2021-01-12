import React from 'react'
import { motion } from "framer-motion"

import styles from 'styles/component-styles/IdeasList.module.scss'
import { animatedTextVariants, introductionTextVariants } from 'variants/ideasListVariants'

const IdeasList = () => {
  return (
    <motion.div className={styles.list}>
      <motion.h3
        initial="hidden"
        animate="visible"
        variants={animatedTextVariants}
        className={styles['animated-text']}>
        Welcome
      </motion.h3>
      <div className={styles.container}>
        <motion.h3
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={introductionTextVariants}
          className={styles['introduction-text']}>
          Click the button to add ideas.
      </motion.h3>
      </div>
    </motion.div>
  )
}

export default IdeasList

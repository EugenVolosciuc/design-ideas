import React from 'react'
import { motion } from "framer-motion"

import styles from 'styles/component-styles/WebsiteFrame.module.scss'
import { animatedTextVariants, introductionTextVariants } from 'variants/websiteFrameVariants'

const WebsiteFrame = ({ src }) => {
  return (
    <div className={styles['frame-container']}>
      <motion.h3
        initial="hidden"
        animate="visible"
        variants={animatedTextVariants}
        className={styles['animated-text']}>
        To
      </motion.h3>
      {src
        ? <iframe src="" frameborder="0" />
        : null
      }
      <div className={styles.container}>
        <motion.h3
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={introductionTextVariants}
          className={styles['introduction-text']}>
          Click the button to view design examples.
      </motion.h3>
      </div>
    </div>
  )
}

export default WebsiteFrame

import React from 'react'
import { motion } from "framer-motion"

import styles from 'styles/component-styles/WebsiteFrame.module.scss'
import { animatedTextVariants, introductionTextVariants } from 'variants/websiteFrameVariants'

const WebsiteFrame = ({ currentIdea, showWebsite, toggleShowWebsite }) => {
  return (
    <div className={styles['frame-container']}>
      <motion.h3
        initial="hidden"
        animate="visible"
        variants={animatedTextVariants}
        className={styles['animated-text']}>
        To
      </motion.h3>
      {showWebsite
        ? <iframe src={showWebsite} frameBorder="0" className={styles.iframe} />
        : <div className={styles.container}>
          <motion.h3
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={introductionTextVariants}
            className={styles['introduction-text']}>
            {currentIdea ? 'Click on an example above to view it.' : 'Click the button to view design examples.'}
          </motion.h3>
        </div>
      }
      <h4 
        onClick={() => toggleShowWebsite()}
        className={`${styles.close} ${showWebsite ? styles['show-close'] : ''}`}>
        Close example
      </h4>
    </div>
  )
}

export default WebsiteFrame

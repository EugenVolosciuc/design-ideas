import React from 'react'
import { motion } from "framer-motion"

import styles from 'styles/component-styles/IdeaFinderButton.module.scss'
import { buttonVariants } from 'variants/ideaFinderButtonVariants'

const IdeaFinderButton = ({ onClick }) => {
  return (
    <motion.button 
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
      className={`${styles.button} serif`}
      onClick={onClick}
    >
      <span className="block">Find</span>
      <span className="block">Idea</span>
    </motion.button>
  )
}

export default IdeaFinderButton

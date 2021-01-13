import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

import styles from 'styles/component-styles/IdeaFinderButton.module.scss'
import { buttonVariants } from 'variants/ideaFinderButtonVariants'

const IdeaFinderButton = ({ onClick, ideaIsLoading }) => {
  const [haveLoadingClass, setHaveLoadingClass] = useState(false)

  useEffect(() => {
    if (!ideaIsLoading && setHaveLoadingClass) {
      setTimeout(() => setHaveLoadingClass(false), 1100)
    }

    if (ideaIsLoading) setHaveLoadingClass(true)
  }, [ideaIsLoading])

  return (
    <motion.button 
      initial="hidden"
      animate="visible"
      variants={buttonVariants}
      className={`serif ${styles.button} ${haveLoadingClass ? styles.loading : ''}`}
      onClick={onClick}
    >
      <span className="block">Find</span>
      <span className="block">Idea</span>
    </motion.button>
  )
}

export default IdeaFinderButton

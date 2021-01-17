import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import isEmpty from 'lodash/isEmpty'

import styles from 'styles/component-styles/IdeasList.module.scss'
import { animatedTextVariants, introductionTextVariants } from 'variants/ideasListVariants'
import ANIMATED_TEXT_DURATION from 'constants/ANIMATED_TEXT_DURATION'
import ANIMATION_DELAY_FACTOR from 'constants/ANIMATION_DELAY_FACTOR'

const timeoutNumber = (ANIMATED_TEXT_DURATION + ANIMATION_DELAY_FACTOR * 4) * 1000

const IdeasList = ({ viewedIdeas, setCurrentIdea }) => {
  const [seenIntro, setSeenIntro] = useState(false)

  useEffect(() => {
    setTimeout(() => setSeenIntro(true), timeoutNumber);
  }, [])

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
        {seenIntro && !isEmpty(viewedIdeas)
          ? <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
            <h2 className="text-center">Viewed ideas</h2>
            <ul className={styles.list}>
              {viewedIdeas.map(idea => (
                <li onClick={() => setCurrentIdea(idea)} key={`idea-list-${idea.id}`} className={styles['list-item']}>
                  <p className="text-center">{idea.title}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          : <motion.h3
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={introductionTextVariants}
            className={styles['introduction-text']}>
            Click the button to add ideas.
          </motion.h3>
        }
      </div>
    </motion.div>
  )
}

export default IdeasList

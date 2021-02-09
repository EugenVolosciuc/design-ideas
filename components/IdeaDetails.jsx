import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import styles from 'styles/component-styles/IdeaDetails.module.scss'
import { animatedTextVariants, introductionTextVariants, ideaVariants } from 'variants/ideaDetailsVariants'

const IdeaDetails = ({ idea, toggleShowWebsite }) => {
  return (
    <div className={styles.details}>
      <motion.h3
        initial="hidden"
        animate="visible"
        variants={animatedTextVariants}
        className={styles['animated-text']}>
        Design Ideas
      </motion.h3>
      <motion.div
        className={styles.container}
      >
        <AnimatePresence>
          {idea
            ? <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={ideaVariants}
              className={styles.idea}>
              <motion.h3 className={styles.title}>{idea.title}</motion.h3>
              <div>
                <div>
                  <h4>Description</h4>
                  <p className={styles.description}>{idea.description}</p>
                </div>
                <div>
                  <h4>Examples</h4>
                  <div className={styles.examples}>
                    {idea.examples.map(example => (
                      <p
                        className={styles.example}
                        key={'example-' + example.id}
                        onClick={() => toggleShowWebsite(example.url)}>
                        {example.title}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            : <motion.h3
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={introductionTextVariants}
              className={styles['introduction-text']}>
              When in search of inspiration, press the button.
            </motion.h3>
          }
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default IdeaDetails

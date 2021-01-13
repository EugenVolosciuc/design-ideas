import { useState } from 'react'
import axios from 'axios'
import { motion } from "framer-motion"

import styles from 'styles/page-styles/Homepage.module.scss'
import IdeaFinderButton from 'components/IdeaFinderButton'
import IdeaDetails from 'components/IdeaDetails'
import IdeasList from 'components/IdeasList'
import WebsiteFrame from 'components/WebsiteFrame'
import {
  firstRectVariants,
  secondRectVariants,
  thirdRectVariants,
  fourthRectVariants
} from 'variants/homepageVariants'

const Homepage = () => {
  const [currentIdea, setCurrentIdea] = useState(null)
  const [ideaIsLoading, setIdeaIsLoading] = useState(false)
  const [showWebsite, setShowWebsite] = useState(false)

  const handleFindIdea = async () => {
    try {
      setIdeaIsLoading(true)
      const { data } = await axios.get('/api/ideas/random')
      setCurrentIdea(data)
      setIdeaIsLoading(false)
    } catch (error) {
      setIdeaIsLoading(false)
      console.log("ERRROR!!!", error)
    }
  }

  const toggleShowWebsite = id => {
    if (id) return setShowWebsite(id)
    
    setShowWebsite(null)
  }

  return (
    <div className={styles.homepage}>
      <div className={styles.row}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={firstRectVariants}
          className={`${styles['sm-square']} ${styles['finder-container']} bg-black`}
        >
          <IdeaFinderButton onClick={handleFindIdea} ideaIsLoading={ideaIsLoading} />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={secondRectVariants}
          className={`${styles['lg-square']} bg-beige`}
        >
          <IdeaDetails idea={currentIdea} toggleShowWebsite={toggleShowWebsite} />
        </motion.div>
      </div>
      <div className={styles.row}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fourthRectVariants}
          className={`${styles['sm-square']} bg-beige`}
        >
          <IdeasList />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={thirdRectVariants}
          className={`${styles['lg-square']} bg-black`}
        >
          <WebsiteFrame />
        </motion.div>
      </div>
    </div>
  )
}

export default Homepage
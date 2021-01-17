import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from "framer-motion"
import uniqBy from "lodash/uniqBy"

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
  const [viewedIdeas, setViewedIdeas] = useState([])
  const [currentIdea, setCurrentIdea] = useState(null)
  const [ideaIsLoading, setIdeaIsLoading] = useState(false)
  const [showWebsite, setShowWebsite] = useState(false)

  const handleFindIdea = async () => {
    if (showWebsite) setShowWebsite(false)

    try {
      setIdeaIsLoading(true)

      const { data } = await axios.get('/api/ideas/random')

      setCurrentIdea(data)
      setIdeaIsLoading(false)

      const uniqueViewedIdeas = uniqBy([data, ...viewedIdeas], idea => idea.id)
      setViewedIdeas(uniqueViewedIdeas)

      window.sessionStorage.setItem('DI-ideas', JSON.stringify(uniqueViewedIdeas))
    } catch (error) {
      setIdeaIsLoading(false)
      console.log("ERRROR!!!", error)
    }
  }

  const toggleShowWebsite = url => {
    if (url) return setShowWebsite(url)

    setShowWebsite(null)
  }

  useEffect(() => {
    const dataFromSessionStorage = window.sessionStorage.getItem('DI-ideas')

    if (dataFromSessionStorage) setViewedIdeas(JSON.parse(dataFromSessionStorage))
  }, [])

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
          <IdeasList
            viewedIdeas={viewedIdeas}
            setCurrentIdea={idea => {
              setCurrentIdea(idea)
              toggleShowWebsite()
            }}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={thirdRectVariants}
          className={`${styles['lg-square']} ${showWebsite ? styles.show : ''} bg-black`}
        >
          <WebsiteFrame currentIdea={currentIdea} showWebsite={showWebsite} toggleShowWebsite={toggleShowWebsite} />
        </motion.div>
      </div>
    </div>
  )
}

export default Homepage
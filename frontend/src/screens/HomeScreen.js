//Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const HomeScreen = () => {
  return (
    <div>
      <motion.h1
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        exit='exit'
      >
        Home!
      </motion.h1>
    </div>
  )
}

export default HomeScreen

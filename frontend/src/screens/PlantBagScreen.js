//Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const PlantBagScreen = () => {
  return (
    <motion.h1
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      Plant Bag
    </motion.h1>
  )
}

export default PlantBagScreen

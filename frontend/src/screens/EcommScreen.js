//Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const EcommScreen = () => {
  return (
    <motion.h1
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      Ecomm
    </motion.h1>
  )
}

export default EcommScreen

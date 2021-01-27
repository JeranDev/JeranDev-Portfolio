//Animation
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const HellovitScreen = () => {
  return (
    <motion.h1
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      Hellovit
    </motion.h1>
  )
}

export default HellovitScreen

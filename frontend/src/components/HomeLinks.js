//Styling
import { motion } from 'framer-motion'
import { pageAnimation, fade } from '../animation'
import { StyledLinks } from '../styles'

const HomeLinks = () => {
  return (
    <>
      <StyledLinks variants={pageAnimation} initial='hidden' animate='show'>
        <motion.a
          variants={fade}
          initial='hidden'
          animate='show'
          href='https://www.linkedin.com/in/jeran-burget-2181651a3/'
          target='_blank'
        >
          <motion.i className='fab fa-linkedin' whileHover={{ scale: 1.2 }} />
        </motion.a>

        <motion.a
          variants={fade}
          initial='hidden'
          animate='show'
          href='https://github.com/JeranDev'
          target='_blank'
        >
          <motion.i
            className='fab fa-github-square'
            whileHover={{ scale: 1.2 }}
          ></motion.i>
        </motion.a>

        <motion.a
          variants={fade}
          initial='hidden'
          animate='show'
          href='mailto:jerandev@outlook.com'
        >
          <motion.i
            className='fas fa-envelope-square'
            whileHover={{ scale: 1.2 }}
          ></motion.i>
        </motion.a>
      </StyledLinks>
    </>
  )
}

export default HomeLinks

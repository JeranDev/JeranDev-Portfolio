//Styling
import { motion } from 'framer-motion'
import { pageAnimation, fade } from '../animation'
import { StyledLinks } from '../styles'

const ProjectLinks = ({ website, code }) => {
  return (
    <>
      <StyledLinks
        className='flex-item'
        variants={pageAnimation}
        initial='hidden'
        animate='show'
      >
        <motion.a
          variants={fade}
          initial='hidden'
          animate='show'
          href={website}
          target='_blank'
        >
          <motion.span>Website</motion.span>
          <motion.i className='fas fa-desktop' style={{ fontSize: ' 3rem' }} />
        </motion.a>

        <motion.a
          variants={fade}
          initial='hidden'
          animate='show'
          href={code}
          target='_blank'
        >
          <motion.span>Code</motion.span>
          <motion.i
            className='fab fa-github-square'
            style={{ fontSize: ' 3rem' }}
          ></motion.i>
        </motion.a>
      </StyledLinks>
    </>
  )
}

export default ProjectLinks

import styled from 'styled-components'
import { motion } from 'framer-motion'
import resume from '../images/Jeran-Burget-Resume.pdf'

const Links = () => {
  return (
    <>
      <StyledLinks>
        <motion.a
          href='https://www.linkedin.com/in/jeran-burget-2181651a3/'
          target='_blank'
        >
          <motion.i class='fab fa-linkedin' whileHover={{ scale: 1.2 }} />
        </motion.a>

        <motion.a href='https://github.com/JeranDev' target='_blank'>
          <motion.i
            class='fab fa-github-square'
            whileHover={{ scale: 1.2 }}
          ></motion.i>
        </motion.a>

        <motion.a href='mailto:jerandev@outlook.com'>
          <motion.i
            class='fas fa-envelope-square'
            whileHover={{ scale: 1.2 }}
          ></motion.i>
        </motion.a>
      </StyledLinks>
      <StyledButton>
        <motion.a href={resume} target='_blank'>
          Resumé
        </motion.a>
      </StyledButton>
    </>
  )
}

const StyledLinks = styled(motion.div)`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
  i {
    font-size: 4rem;
    padding: 0 1.5rem;
    &:hover {
      color: #46eb43;
      cursor: pointer;
    }
  }
  a {
    color: inherit;
  }
  @media (min-width: 2800px) {
    i {
      font-size: 8rem;
      padding: 0 2.5rem;
    }
  }
`

const StyledButton = styled(motion.button)`
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
  a {
    color: inherit;
    text-decoration: none;
  }
  @media (min-width: 2800px) {
    font-size: 2.2rem;
    padding: 2rem 4rem;
    margin-top: 4rem;
  }
`

export default Links

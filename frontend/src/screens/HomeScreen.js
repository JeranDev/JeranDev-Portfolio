import styled from 'styled-components'
import { motion } from 'framer-motion'
import code from '../images/code.jpg'

const HomeScreen = () => {
  return (
    <Cover>
      <Home />
      <Info>
        <h2>
          <span>Full-Stack Web Developer</span>
        </h2>
      </Info>
    </Cover>
  )
}

const Cover = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
`

const Home = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-image: url(${code});
  background-position: 50% 100%;
  background-size: cover;
  z-index: -1;
`

const Info = styled(motion.div)`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  height: 30%;
  justify-content: center;
  align-items: center;
  z-index: 1;
  h2 {
    border-bottom: 1px solid #46eb43;
    padding-bottom: 1rem;
  }
  @media (max-width: 800px) {
    h2 {
      font-size: 2rem;
    }
  }
`

export default HomeScreen

//Styles
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { backgroundFade, pageAnimation, titleAnim } from '../animation'
import { Cover, Background } from '../styles'
import code from '../images/code.jpg'
//Components
import HomeLinks from '../components/HomeLinks'

const HomeScreen = () => {
  //Hide Scrollbar
  document.body.style.overflow = 'hidden'

  return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show'>
      <Cover style={{ height: '100%' }}>
        <Background
          variants={backgroundFade}
          initial='hidden'
          animate='show'
          style={{ backgroundImage: `url(${code})` }}
        />
        <Info>
          <motion.h2 variants={titleAnim} initial='hidden' animate='show'>
            <motion.span>Full-Stack Web Developer</motion.span>
          </motion.h2>
        </Info>
        <HomeLinks />
      </Cover>
    </motion.div>
  )
}

const Info = styled(motion.div)`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  height: 45%;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 2rem;
  z-index: 1;
  h2 {
    border-bottom: 1px solid #46eb43;
    padding-bottom: 1rem;
  }
  @media (max-height: 700px) {
    margin-top: 4rem;
  }
`

export default HomeScreen

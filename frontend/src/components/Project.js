import { useState, useEffect } from 'react'
//Styling
import { motion } from 'framer-motion'
import { pageAnimation, fade } from '../animation'
import { Container, Wrapper, ImageWrapper } from '../styles'
//Components
import ProjectLinks from '../components/ProjectLinks'

const Project = ({ name, description, website, code, images, nameColor }) => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (counter >= images.length - 1) {
        setCounter(0)
      } else {
        setCounter(counter + 1)
      }
      console.log(counter)
    }, 5000)
  }, [counter, images.length])

  return (
    <Container
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Wrapper>
        <motion.h2 className='flex-item'>
          Project:{' '}
          <motion.span
            style={{ color: nameColor }}
            variants={fade}
            initial='hidden'
            animate='show'
          >
            {name}
          </motion.span>
        </motion.h2>
        <ProjectLinks website={website} code={code} />
        <motion.p className='flex-item'>{description}</motion.p>
      </Wrapper>
      <ImageWrapper>
        <motion.figure className='flex-item'>
          <motion.img src={images[counter]} alt={`${name} Pages`} />
          <motion.a href={website}>
            <motion.figcaption>
              Visit Live Site <i className='fas fa-arrow-right' />
            </motion.figcaption>
          </motion.a>
        </motion.figure>
      </ImageWrapper>
    </Container>
  )
}

export default Project

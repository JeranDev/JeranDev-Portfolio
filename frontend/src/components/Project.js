import { useState, useEffect } from 'react'
//Styling
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
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
          <motion.span style={{ color: nameColor }}>{name}</motion.span>
        </motion.h2>
        <ProjectLinks website={website} code={code} />
        <motion.p className='flex-item'>{description}</motion.p>
      </Wrapper>
      <ImageWrapper>
        <motion.img
          className='flex-item'
          src={images[counter]}
          alt={`${name} Pages`}
        />
      </ImageWrapper>
    </Container>
  )
}

export default Project

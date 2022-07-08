import { useState, useEffect } from 'react'
//Styling
import { motion } from 'framer-motion'
import { pageAnimation, fade, carouselFade, backgroundFade } from '../animation'
import {
  Container,
  Wrapper,
  ImageWrapper,
  Slide,
  Cover,
  Background,
} from '../styles'
//Components
import ProjectLinks from '../components/ProjectLinks'

const Project = ({
  name,
  description,
  technologies,
  website,
  code,
  images,
  nameColor,
  backgroundImage,
  extraContent,
}) => {
  //Reveal Scrollbar
  document.body.style.overflow = 'auto'

  //Create Carousel
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if (counter >= images.length - 1) {
        setCounter(0)
      } else {
        setCounter(counter + 1)
      }
    }, 5000)
  }, [counter, images.length])

  return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show'>
      <Cover>
        <Background
          variants={backgroundFade}
          initial='hidden'
          animate='show'
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <Container>
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
            <motion.h3>{extraContent}</motion.h3>
            <ProjectLinks website={website} code={code} />
            <motion.p className='flex-item'>{description}</motion.p>
            <motion.p className='flex-item' style={{ textAlign: 'center' }}>
              <motion.span>{technologies}</motion.span>
            </motion.p>
          </Wrapper>
          <ImageWrapper>
            <motion.figure className='flex-item'>
              {counter === 0 && (
                <Slide
                  variants={carouselFade}
                  initial='hidden'
                  src={images[counter]}
                  alt={`${name} Pages`}
                />
              )}
              {counter === 1 && (
                <Slide
                  variants={carouselFade}
                  initial='hidden'
                  animate='show'
                  src={images[counter]}
                  alt={`${name} Pages`}
                />
              )}
              {counter === 2 && (
                <Slide
                  variants={carouselFade}
                  initial='hidden'
                  animate='show'
                  src={images[counter]}
                  alt={`${name} Pages`}
                />
              )}
              <motion.a href={website} target='_blank'>
                <motion.figcaption>
                  Visit Live Site <i className='fas fa-arrow-right' />
                </motion.figcaption>
              </motion.a>
            </motion.figure>
          </ImageWrapper>
        </Container>
      </Cover>
    </motion.div>
  )
}

export default Project

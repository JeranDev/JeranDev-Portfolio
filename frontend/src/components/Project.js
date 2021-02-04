import { useState, useEffect } from 'react'
//Styling
import { motion } from 'framer-motion'
import { pageAnimation, fade, backgroundFade } from '../animation'
import { Container, Wrapper, ImageWrapper, Cover, Background } from '../styles'
//Components
import ProjectLinks from '../components/ProjectLinks'

const Project = ({
  name,
  description,
  website,
  code,
  images,
  nameColor,
  backgroundImage,
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
            <ProjectLinks website={website} code={code} />
            <motion.p className='flex-item'>{description}</motion.p>
          </Wrapper>
          <ImageWrapper>
            <motion.figure className='flex-item'>
              <motion.img src={images[counter]} alt={`${name} Pages`} />
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

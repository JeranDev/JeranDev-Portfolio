//Styling
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import { Container, Wrapper } from '../styles'
import oldegg from '../images/oldegg.png'
//Components
import ProjectLinks from '../components/ProjectLinks'

const EcommScreen = () => {
  return (
    <Container
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Wrapper>
        <motion.h2 className='flex-item'>
          Project: <motion.span>Oldegg</motion.span>
        </motion.h2>
        <ProjectLinks />
        <motion.img className='flex-item' src={oldegg} />
        <motion.p className='flex-item'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, sint
          pariatur at porro laborum dicta architecto debitis unde delectus iure
          perferendis totam illo quaerat dolorem fuga placeat nisi autem tempore
          culpa fugit odit vel cum! Harum ad dignissimos tenetur error culpa
          amet, maxime qui perferendis recusandae sunt incidunt repellendus,
          iure ipsum? Porro, at hic! Ipsum totam sunt quod ducimus suscipit
          magni nihil consequatur commodi eos aliquam illo provident quam iste
          repellat, eum placeat est! Architecto voluptas eum vitae voluptatum
          eaque.
        </motion.p>
      </Wrapper>
    </Container>
  )
}

export default EcommScreen

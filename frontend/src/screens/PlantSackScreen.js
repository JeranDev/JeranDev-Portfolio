//Images
import plantsack from '../images/plantsack.png'
import plantsackDetails from '../images/plantsackDetails.png'
import plantsackLoading from '../images/plantsackLoading.png'
import plantsackBackground from '../images/plantsackBackground.jpg'
//Components
import Project from '../components/Project'

const PlantSackScreen = () => {
  const description =
    'A single-page plant database using the MERN stack. By pulling data from the Trefle API, the components are dynamically rendered, allowing you to see more of plant details. Features include “infinite” scrolling, smooth animations using Framer-Motion, and styling using Styled-Components.'
  const technologies =
    'Tech-Stack Includes React, Redux, MongoDB, Express.js, and Node.js'
  const images = [plantsack, plantsackDetails, plantsackLoading]
  return (
    <Project
      name='Plant Sack'
      nameColor='#88B981'
      description={description}
      technologies={technologies}
      backgroundImage={plantsackBackground}
      website='https://plantsackproject.herokuapp.com/'
      code='https://github.com/JeranDev/Plant-Sack'
      images={images}
    />
  )
}

export default PlantSackScreen

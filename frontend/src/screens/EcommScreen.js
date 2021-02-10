//Images
import oldegg from '../images/oldegg.png'
import oldeggItem from '../images/oldeggItem.png'
import oldeggOrder from '../images/oldeggOrder.png'
import oldeggBackground from '../images/oldeggBackground.jpg'
//Components
import Project from '../components/Project'

const EcommScreen = () => {
  const description = `The one-stop shop for all things electronics! A top-products carousel, user review system, protected logins, admin logins for fufilling orders, styled with React-Bootstrap, and using the PayPal API, this is the perfect starting E-Commerce platform that can be scaled and adapted to any business.`
  const technologies =
    'Tech-Stack Includes React, Redux, MongoDB, Express.js, and Node.js'
  const images = [oldegg, oldeggItem, oldeggOrder]
  return (
    <Project
      name='Oldegg'
      nameColor='#577AAC'
      description={description}
      technologies={technologies}
      backgroundImage={oldeggBackground}
      website='https://oldeggproject.herokuapp.com'
      code='https://github.com/JeranDev/Oldegg'
      images={images}
    />
  )
}

export default EcommScreen

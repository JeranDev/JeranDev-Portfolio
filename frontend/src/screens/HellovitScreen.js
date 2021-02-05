//Images
import hellovit from '../images/hellovit.png'
import hellovitStore from '../images/hellovitStore.png'
import hellovitAbout from '../images/hellovitAbout.png'
import hellovitBackground from '../images/hellovitBackground.jpg'
//Components
import Project from '../components/Project'

const HellovitScreen = () => {
  const description =
    'A simple yet dynamic page for my brother-in-law’s musical career. Using EJS templating, SCSS, and vanilla JavaScript, features implemented were an Express.js back-end, NodeMailer API for the contact page, Mailchimp API for advertising, and Stripe API for card-processing.'
  const technologies =
    'Tech-Stack Includes EJS Templating, MongoDB / MySQL, Express.js, and Node.js'
  const images = [hellovit, hellovitStore, hellovitAbout]
  return (
    <Project
      name='Hellovit'
      nameColor='#9ACD32'
      description={description}
      technologies={technologies}
      backgroundImage={hellovitBackground}
      website='https://hellovitproject.herokuapp.com/'
      code='https://github.com/JeranDev/Hellovit'
      images={images}
    />
  )
}

export default HellovitScreen

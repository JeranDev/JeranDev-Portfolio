//Images
import hellovit from '../images/hellovit.png'
import hellovitStore from '../images/hellovitStore.png'
import hellovitAbout from '../images/hellovitAbout.png'
//Components
import Project from '../components/Project'

const HellovitScreen = () => {
  const description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil corporis dicta amet! Ipsam velit optio, molestiae dolor odio eos quidem consequuntur recusandae quaerat numquam dolorem a quas ea libero eius ut aliquam natus officiis soluta mollitia, eum culpa delectus atque. Eligendi soluta hic itaque dicta possimus qui sint unde autem accusamus nisi, expedita quae officia minus vel facilis quam mollitia placeat nihil sunt repudiandae voluptate consequuntur. Minima laudantium eum quis totam reiciendis voluptatum unde incidunt! Eaque nam quis praesentium?'
  const images = [hellovit, hellovitStore, hellovitAbout]
  return (
    <Project
      name='Hellovit'
      nameColor='#9ACD32'
      description={description}
      website='https://fathomless-temple-81469.herokuapp.com'
      code='https://github.com/JeranDev/Hellovit'
      images={images}
    />
  )
}

export default HellovitScreen

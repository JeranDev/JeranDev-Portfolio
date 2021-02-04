//Images
import oldegg from '../images/oldegg.png'
import oldeggItem from '../images/oldeggItem.png'
import oldeggOrder from '../images/oldeggOrder.png'
import oldeggBackground from '../images/oldeggBackground.jpg'
//Components
import Project from '../components/Project'

const EcommScreen = () => {
  const description =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum inventore nam maxime facilis, dignissimos architecto? Et quas sunt saepe nisi facere! Voluptatum modi quae necessitatibus earum ea, tenetur consequuntur eos repudiandae cum id rerum quisquam vel possimus nihil exercitationem corrupti velit? Voluptatum totam eius dolor iste iure accusamus. Nemo, expedita pariatur? Aut minus iure magni consequuntur provident libero nobis illo laudantium dolorum, optio distinctio velit debitis inventore nulla pariatur illum voluptates et beatae quod iusto dignissimos voluptate consectetur perferendis! Obcaecati.'
  const images = [oldegg, oldeggItem, oldeggOrder]
  return (
    <Project
      name='Oldegg'
      nameColor='#577AAC'
      description={description}
      backgroundImage={oldeggBackground}
      website='https://mernshopproject.herokuapp.com'
      code='https://github.com/JeranDev/Oldegg'
      images={images}
    />
  )
}

export default EcommScreen

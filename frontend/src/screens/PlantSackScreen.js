//Images
import plantsack from '../images/plantsack.png'
import plantsackDetails from '../images/plantsackDetails.png'
import plantsackLoading from '../images/plantsackLoading.png'
//Components
import Project from '../components/Project'

const PlantSackScreen = () => {
  const description =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia obcaecati doloremque a. Reiciendis praesentium ea quos laborum, deserunt saepe quas tempora eos iusto quia ipsam voluptatem. Cum porro libero molestias vel hic ex, eligendi nesciunt. Saepe maxime sequi hic doloremque, iste corrupti error voluptates minus dignissimos. Asperiores, deserunt! Fugit accusantium laboriosam unde voluptatibus corrupti! Dicta aspernatur necessitatibus maxime quas similique illo perferendis nihil praesentium! Voluptates sit sapiente natus earum aut, iusto quibusdam minus laboriosam ipsa numquam enim vitae! Sunt, vel.'
  const images = [plantsack, plantsackDetails, plantsackLoading]
  return (
    <Project
      name='Plant Sack'
      nameColor='#88B981'
      description={description}
      website=''
      code='https://github.com/JeranDev/Plant-Sack'
      images={images}
    />
  )
}

export default PlantSackScreen

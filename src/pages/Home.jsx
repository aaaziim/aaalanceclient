 
import Carousel from '../components/Carousel'
import CategoriesTab from '../components/CategoriesTab'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  
  return (
    <div>
       
        <Carousel></Carousel>
        <CategoriesTab  ></CategoriesTab>
    </div>
  )
}

export default Home

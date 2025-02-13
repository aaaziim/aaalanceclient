 
import Carousel from '../components/Carousel'
import CategoriesTab from '../components/CategoriesTab'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const jobs = useLoaderData() 
  return (
    <div>
       
        <Carousel></Carousel>
        <CategoriesTab jobs={jobs}></CategoriesTab>
    </div>
  )
}

export default Home

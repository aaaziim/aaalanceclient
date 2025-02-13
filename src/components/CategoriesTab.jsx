import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios'
const CategoriesTab = ( ) => {

  const [jobs, setJobs] = useState([])

  useEffect(()=>{
    const getData = async() =>{
      const {data} = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
      setJobs(data)
    }

    getData()
  }, [])
  return (
    <div className='container my-6 mx-auto py-6'>
        <Tabs>
        <h1 className="text-4xl text-center font-bold ">Browse by  Categories</h1>
        <p className="text-lg text-center font-light py-6">Find The Best Freelancer For Your Project</p>
          <div className="flex justify-center items-center">
           
          <TabList >
                 <Tab>Web Development</Tab>
                 <Tab>Graphics Design</Tab>
                 <Tab>Digital Marketing</Tab>
            </TabList>

          </div>

          <TabPanel>
            <div className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 mt-8'>
            {
             jobs.filter(job=>job.category === 'Web Development').map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
            </div>
            
              
         </TabPanel>


         <TabPanel>
         <div className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 mt-8'>
            {
             jobs.filter(job=>job.category === 'Graphics Design').map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
            </div>
            
         </TabPanel>


         <TabPanel>
         <div className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 mt-8'>
            {
             jobs.filter(job=>job.category === 'Digital Marketing').map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
            </div>
         </TabPanel>


        </Tabs>
        
    </div>
  )
}

export default CategoriesTab

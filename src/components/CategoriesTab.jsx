import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const CategoriesTab = () => {
  return (
    <div className='container my-6 mx-auto py-6'>
        <Tabs>
        <h1 className="text-4xl text-center font-bold ">Browse by  Categories</h1>
        <p className="text-lg text-center font-light py-6">Find The Best Freelancer For Your Project</p>
          <div className="flex justify-center items-center">
           
          <TabList >
                 <Tab>Web Development</Tab>
                 <Tab>Digital Marketing</Tab>
                 <Tab>VIdeo Editing</Tab>
            </TabList>

          </div>
            <TabPanel>
                <h2>Any content 1</h2>
         </TabPanel>
         <TabPanel>
                <h2>Any content 2</h2>
         </TabPanel>
         <TabPanel>
                <h2>Any content 3</h2>
         </TabPanel>
        </Tabs>
        
    </div>
  )
}

export default CategoriesTab

import DatePicker from "react-datepicker";
import axios from 'axios'
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";






const AddJob = () => {

  const {user} = useContext(AuthContext)

   const [startDate, setStartDate] = useState(new Date());


   const handleAddJob = async(e) =>{
    e.preventDefault();
    const form = e.target;
    const job_title = form.job_title.value;
    const buyer_email = form.email.value;
    const deadline = startDate;
    const category = form.category.value;
    const min_price = form.min_price.value;
    const max_price = form.max_price.value;
    if(max_price<=min_price) return toast.error("Maximum Price Should Be More Than Minimum Price")
    
    const description = form.description.value;

    const newJob = {
      job_title,
      buyer_email,
      deadline,
      category,
      min_price,
      max_price,
      description,
      buyer: {
        name: user?.displayName,
        photo: user?.photoURL
      }
    }
    try{
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jobs`, newJob)
      console.log(data)
     } catch(err){
        console.log(err)
     }
 

   }


    return (
      <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
        <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
          <h2 className='text-lg font-semibold text-gray-700 capitalize '>
            Post a Job
          </h2>
  
          <form onSubmit={handleAddJob}>
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' htmlFor='job_title'>
                  Job Title
                </label>
                <input
                  id='job_title'
                  name='job_title'
                  type='text'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='emailAddress'>
                  Email Address
                </label>
                <input
                  id='emailAddress'
                  type='email'
                  name='email'
                  defaultValue={user?.email}
                  disabled
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700'>Deadline</label>
                      <DatePicker className="block w-full px-4 py-2  text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring" selected={startDate} onChange={(date) => setStartDate(date)} />
                {/* Date Picker Input Field */}
              </div>
  
              <div className='flex flex-col gap-2 '>
                <label className='text-gray-700 ' htmlFor='category'>
                  Category
                </label>
                <select
                  name='category'
                  id='category'
                  className='border p-2 rounded-md'
                >
                  <option value='Web Development'>Web Development</option>
                  <option value='Graphics Design'>Graphics Design</option>
                  <option value='Digital Marketing'>Digital Marketing</option>
                </select>
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='min_price'>
                  Minimum Price
                </label>
                <input
                  id='min_price'
                  name='min_price'
                  type='number'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='max_price'>
                  Maximum Price
                </label>
                <input
                  id='max_price'
                  name='max_price'
                  type='number'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
              <label className='text-gray-700 ' htmlFor='description'>
                Description
              </label>
              <textarea
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                name='description'
                id='description'
              ></textarea>
            </div>
            <div className='flex justify-end mt-6'>
              <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    )
  }
  
  export default AddJob
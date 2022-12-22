import React from 'react'
import {Link} from 'react-router-dom'
// import StudentForm from './StudentForm'
import {useState,useEffect} from 'react'
import axios from 'axios'

const SuperAdmin = () => {
    const [studentsDatas, setStudentsDatas] = useState([])
const getStudentsData =async (data)=>{
    const response = await axios.get("http://localhost:4040/v1/attendance/user/getAll",data)
    console.log(response.data.data)
    setStudentsDatas  (response.data.data);
}
useEffect(()=>{
  getStudentsData();
},[])
    
    return (
        <div>
            
            <div class="table w-full p-2 shadow overflow-hidden rounded border-b border-gray-200 bg-white mt-20">
           <Link to="/dashboard/StudentForm"><button  class="bg-gray-800 py-3 px-4 text-white  float-right ... ">Add Student</button></Link> 
                <table class="w-full border mt-20 ">
                
                    <thead class="bg-gray-800 text-white">
                        <tr >
                            
                            <th class="p-2 border-r cursor-pointer text-lg  text-white">
                                <div class="flex items-center justify-center">
                                firstName
                                    
                                </div>
                            </th>

                            <th class="p-2 border-r cursor-pointer text-lg  text-white">
                                <div class="flex items-center justify-center">
                                lastName
                                    
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-lg  text-white">
                                <div class="flex items-center justify-center">
                                Phone Number
                                    
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-lg  text-white">
                                <div class="flex items-center justify-center">
                                   Emails 
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-lg  text-white">
                                <div class="flex items-center justify-center">
                                className
                                   
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-lg  text-white">
                                <div class="flex items-center justify-center">
                                Cohort
                                    
                                </div>
                            </th>

                            <th class="p-2 border-r cursor-pointer text-lg  text-white">
                                <div class="flex items-center justify-center">
                                    Action
                                   
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentsDatas?.map((studentsData)=>( <tr>
                           
                                <td class="p-2 border-r  h-20"> {studentsData?.firstName} </td>
                                <td class="p-2 border-r  h-20"> {studentsData?.lastName}</td>
                                <td class="p-2 border-r">{studentsData?.phone}</td>
                                <td class="p-2 border-r">{studentsData?.email}</td>
                                <td class="p-2 border-r">{studentsData?.class}</td>
                                <td class="p-2 border-r">{studentsData?.cohort}</td>
                                
                                <td className='pl-5'>
                                <button type="button" class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Update</button>
                                
                                    <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                                </td>
                            </tr>))
                        }
                       
                        {/* <tr class="  bg-gray-100">
                           
                            <td class="p-2 border-r h-20"> Adam </td>
                            <td class="p-2 border-r h-20">  Smith</td>
                            <td class="p-2 border-r">078888888</td>
                            <td class="p-2 border-r">adam@gmail.com</td>
                            <td class="p-2 border-r">NetBrain</td>
                            <td class="p-2 border-r">cohort 7</td>
                            
                            <td className='pl-5'>
                                <button type="button" class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Update</button>
                            
                                <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td>
                        </tr>
                        <tr class=" ">
                            
                            <td class="p-2 border-r h-20"> Jean </td>
                            <td class="p-2 border-r h-20"> Doe</td>
                            <td class="p-2 border-r">078888888</td>
                            <td class="p-2 border-r">jean@gmail.com</td>
                            <td class="p-2 border-r">BigSur</td>
                            <td class="p-2 border-r">cohort 7</td>
                            
                            <td className='pl-5'>
                            <button type="button" class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Update</button>
                            
                                <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td>
                        </tr>
                        <tr class="bg-gray-100  h-30">
                            
                            <td class="p-2 border-r h-20"> Jean </td>
                            <td class="p-2 border-r h-20"> Doe</td>
                            <td class="p-2 border-r"> 0788888888</td>
                            <td class="p-2 border-r">jean@gmail.com</td>
                            <td class="p-2 border-r">NetBrain</td>
                            <td class="p-2 border-r">cohort 7</td>
                            <td className='pl-5'>
                            <button type="button" class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Update</button>
                            
                                <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td>
                        </tr>
                        <tr >
                            
                            <td class="p-2 border-r h-20">Jean </td>
                            <td class="p-2 border-r h-20"> Doe</td>
                            <td class="p-2 border-r">078888888</td>
                            <td class="p-2 border-r">jean@gmail.com</td>
                            <td class="p-2 border-r">BigSur</td>
                            <td class="p-2 border-r">cohort 7</td>
                            
                            <td className='pl-5'>
                            <button type="button" class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Update</button>
                            
                                <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>


            {/* <div class="md:px-32 py-8 w-full">
                <div class="shadow overflow-hidden rounded bg-gray border-gray-200">
                    <button class="bg-gray-800 py-3 px-4 text-white  float-right ... ">Add Student</button>
                    <table class="min-w-full bg-white mt-20 ">
                        <thead class="bg-gray-800 text-white">
                            <tr>
                                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm flex space-x-4 ...">Names</th>
                                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Phone Number</th>
                                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Class</th>
                                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700">
                            <tr>
                                <td class="w-1/3 text-left py-3 px-4">Aline</td>
                                <td class="w-1/3 text-left py-3 px-4">Smith</td>
                                <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="tel:622322662">622322662</a></td>
                                <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="mailto:jonsmith@mail.com">honorineuwituze896@gmail.com</a></td>
                                <td class=" w-1/3 text-left py-3 px-4">
                                    <button type="button" class="mr-3 text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Update</button>

                                    <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                                </td>
                            </tr>
                            <tr class="bg-gray-100">
                                <td class=" text-left py-3 px-4">Emma</td>
                                <td class=" text-left py-3 px-4">Johnson</td>
                                <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="tel:622322662">622322662</a></td>
                                <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="mailto:jonsmith@mail.com">jonsmith@gmail.com</a></td>
                            </tr>
                            <tr>
                                <td class=" text-left py-3 px-4">Oliver</td>
                                <td class=" text-left py-3 px-4">Williams</td>
                                <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="tel:622322662">622322662</a></td>
                                <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="mailto:jonsmith@mail.com">jonsmith@gmail.com</a></td>
                            </tr>
                            <tr class="bg-gray-100">
                                <td class=" text-left py-3 px-4">Isabella</td>
                                <td class=" text-left py-3 px-4">Brown</td>
                                <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="tel:622322662">622322662</a></td>
                                <td class="text-left py-3 px-4"><a class="hover:text-blue-500 no-underline" href="mailto:jonsmith@mail.com">jonsmith@gmail.com</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> */}

        </div>
    )
}

export default SuperAdmin

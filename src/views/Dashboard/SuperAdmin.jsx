import React from 'react'

const SuperAdmin = () => {
    return (
        <div>

            <div class="table w-full p-2">
                <table class="w-full border">
                    <thead>
                        <tr class="bg-gray-50 border-b">
                            <th class="border-r p-2">
                                <input type="checkbox" />
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div class="flex items-center justify-center">
                                Names
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div class="flex items-center justify-center">
                                Emails
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div class="flex items-center justify-center">
                                    Phone Number
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div class="flex items-center justify-center">
                                    cohort
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>
                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div class="flex items-center justify-center">
                                    Class
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>

                            <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                <div class="flex items-center justify-center">
                                    Action
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                    </svg>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr class="border-b hover:bg-orange-100 bg-gray-100">
                            <td class="p-2 border-r">
                                <input type="checkbox" />
                            </td>
                            <td class="p-2 border-r  h-20">1. John Doe</td>
                            <td class="p-2 border-r">john@gmail.com</td>
                            <td class="p-2 border-r">0788888888</td>
                            <td class="p-2 border-r">cohort 7</td>
                            <td class="p-2 border-r">Bigsur</td>
                            <td className='pl-5'>
                            <button type="button" class="mr-3 text-sm bg-green-500 hover:bg-green-500 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Update</button>
                            
                                <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td>
                        </tr>
                        <tr class="border-b hover:bg-orange-100 bg-gray-100">
                            <td class="p-2 border-r">
                                <input type="checkbox" />
                            </td>
                            <td class="p-2 border-r h-20">2. Adam Smith</td>
                            <td class="p-2 border-r">adam@gmail.com</td>
                            <td class="p-2 border-r">078888888</td>
                            <td class="p-2 border-r">cohort 7</td>
                            <td class="p-2 border-r">NetBrain</td>
                            <td className='pl-5'>
                                <button type="button" class="mr-3 text-sm bg-green-500 hover:bg-green-500 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Update</button>
                            
                                <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td>
                        </tr>
                        <tr class="border-b hover:bg-orange-100 bg-gray-100">
                            <td class="p-2 border-r">
                                <input type="checkbox" />
                            </td>
                            <td class="p-2 border-r h-20">3. Jean Doe</td>
                            <td class="p-2 border-r">jean@gmail.com</td>
                            <td class="p-2 border-r">078888888</td>
                            <td class="p-2 border-r">cohort 7</td>
                            <td class="p-2 border-r">BigSur</td>
                            <td className='pl-5'>
                            <button type="button" class="mr-3 text-sm bg-green-500 hover:bg-green-500 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Update</button>
                            
                                <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td>
                        </tr>
                        <tr class="border-b hover:bg-orange-100 bg-gray-100 h-30">
                            <td class="p-2 border-r">
                                <input type="checkbox" />
                            </td>
                            <td class="p-2 border-r h-20">4. Jean Doe</td>
                            <td class="p-2 border-r">jean@gmail.com</td>
                            <td class="p-2 border-r"> 0788888888</td>
                            <td class="p-2 border-r">cohort 7</td>
                            <td class="p-2 border-r">NetBrain</td>
                            <td className='pl-5'>
                            <button type="button" class="mr-3 text-sm bg-green-500 hover:bg-green-500 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Update</button>
                            
                                <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td>
                        </tr>
                        <tr class="border-b hover:bg-orange-100 bg-gray-100">
                            <td class="p-2 border-r">
                                <input type="checkbox" />
                            </td>
                            <td class="p-2 border-r h-20">5. Jean Doe</td>
                            <td class="p-2 border-r">jean@gmail.com</td>
                            <td class="p-2 border-r">078888888</td>
                            <td class="p-2 border-r">cohort 7</td>
                             <td class="p-2 border-r">BigSur</td>
                            <td className='pl-5'>
                            <button type="button" class="mr-3 text-sm bg-green-500 hover:bg-green-500 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Update</button>
                            
                                <button type="button" class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default SuperAdmin

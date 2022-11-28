import React from 'react'

const Mentors = () => {
  return (
    <>
 
<div class="md:px-32 py-8 w-full">
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <button class="bg-green-200 py-3 px-4">Add Mentor</button>
    <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">First name</th>
          <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
        </tr>
      </thead>
    <tbody class="text-gray-700">
      <tr>
        <td class="w-1/3 text-left py-3 px-4">Aline</td>
        <td class="w-1/3 text-left py-3 px-4">Smith</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">honorineuwituze896@gmail.com</a></td>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">Emma</td>
        <td class="w-1/3 text-left py-3 px-4">Johnson</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@gmail.com</a></td>
      </tr>
      <tr>
        <td class="w-1/3 text-left py-3 px-4">Oliver</td>
        <td class="w-1/3 text-left py-3 px-4">Williams</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@gmail.com</a></td>
      </tr>
      <tr class="bg-gray-100">
        <td class="w-1/3 text-left py-3 px-4">Isabella</td>
        <td class="w-1/3 text-left py-3 px-4">Brown</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@gmail.com</a></td>
      </tr>
    </tbody>
    </table>
  </div>
</div>

    
    </>
  )
}

export default Mentors
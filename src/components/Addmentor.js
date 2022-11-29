import React from "react"



function Addmentor() {
  return (
    <>
    
<div className="flex items-center justify-center p-12">
 
 
  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="fName"
              className="mb-3 block text-base font-medium text-[#07074D] required"
            >
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            required/>
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="lName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            required/>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <label
          for="phone"
          className="mb-3 block text-base font-medium text-[#07074D]" required
        >
          phone
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="+250"
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        required/>
      </div>

      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            required>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md required"
            required/>
          </div>
        </div>
        
      </div>

      

      <div>
        <button className=" rounded-md bg-gray-800 py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Savementor
        </button>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export default Addmentor

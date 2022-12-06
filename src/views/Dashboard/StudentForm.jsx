import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

const StudentForm = () => {
    const [emails, setEmails] = useState({ emails: "" });
    const changeEmails = (e) => {
        setEmails({ ...emails, [e.target.name]: e.target.value })
    };
    const { register, handleSubmit,formState: { errors }
    } = useForm();
    const onSubmit = async (data) => {
        console.log(JSON.stringify(data));
        const response  = await axios.post("http://localhost:4040/v1/attendance/student/import",data);
         };




    return (
        <div>

            <div class="max-w-2xl mx-auto mt-10">

                <form onSubmit={handleSubmit(onSubmit)} method="POST">
                    <div class="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                        <div class="flex justify-between items-center py-2 px-3 border-b dark:border-gray-600">

                        </div>
                        <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                            <label for="editor" class="sr-only">Publish post</label>
                            <textarea onChange={changeEmails} id="editor" rows="8"
                                class="block px-0 w-full text-2xl text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                placeholder="Add new emails..."
                                {...register("emails", { required: "Emails is required" })}
                            ></textarea>
                        </div>
                        {errors.email && <p className="text-red-700 text-xl" role="alert">{errors.email?.message}</p>}

                    </div>
                    <button type="submit" class="inline-flex items-center px-5 py-2.5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Add New Student
                    </button>
                </form>

                <p class="mt-5 text-3xl">
                    You can now add a  new student to the classroom
                </p>

            </div>
        </div>
    )
}

export default StudentForm

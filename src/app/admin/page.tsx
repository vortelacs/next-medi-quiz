'use client'
import React,{useState} from 'react'
import { useRouter } from 'next/navigation';


const Admin = () => {
    const router = useRouter(); 
    const ChooseQuiz = () =>{
        return(
        <section>
            <button 
            onClick={() => router.push('/admin/add-question')} 
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <p className='text-lg'>Add a new question</p>

            </span>
            
            </button>
        </section>
        )
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen md:py-2 bg-gradient-radial from-gray-600 to-gray-900">
        <main className="flex px-2 md:px-20 items-center">
        <ChooseQuiz/>
        </main>
        </div>
    )
}

export default Admin
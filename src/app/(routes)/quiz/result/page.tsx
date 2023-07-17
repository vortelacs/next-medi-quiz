'use client'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';


const ResultForm: React.FC<ResultFormProps> = ({ result, total })=> {

return (
    <div className="flex w-screen flex-col items-center justify-center min-h-screen md:py-2 bg-gradient-radial from-gray-600 to-gray-900">
        <main className="flex  px-2 md:px-20 items-center">
            <p>You got {result} correct answers out of {total}</p>
        </main>
     </div>
)
}

export default ResultForm
'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { ICourse } from '@/app/models/Course';
            
export default function Course() {
    const { courseId } = useParams();

    const [ course, setCourse ] = useState<ICourse>();
    const [ error, setError ] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`/api/course/${courseId}`);
            if(!response.ok) return setError(true)
            const course : ICourse = await response.json();
            console.log(course)
            return setCourse(course)
        }

        fetchData();
    }, [])

    return (
        <div>
        {!course &&
            <h1> Curso não encontrado! </h1>
        }
        {course &&
        <div className="full-w border border-gray-200 rounded-lg shadow p-5 mt-10">
            <div className='bg-indigo-300'>
                <img width="100%" height="100%" className="object-cover" src={"http://172.19.0.2:9000/courses-thumbnail/"+course.thumbnail} alt="" />
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {course.title}
                    </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    <span className='font-bold'> Professor: </span> {course.teacher}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {course.description}
                </p>
                <div className='flex flex-row justify-end'>
                <button className="relative inline-flex items-center justify-center p-0.5 mt-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Adicionar à minha conta
                    </span>
                </button>
                </div>
            </div>
        </div>
        }
        </div>
    )
}
'use client';

import React, { useEffect, useState } from 'react';
import { ICourse } from '../../models/Course';
import { FaCheck } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import DotLButton from '@/app/components/DotLButton';
import Link from 'next/link';

export default function CoursesList() {
    interface IResponseData {
        courses: ICourse[]
    }

    const [ courses, setCourses ] = useState<ICourse[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/courses');
            const result : IResponseData = await response.json();
            setCourses(result.courses);
        }

        fetchData();
    }, [])

    return (
        <div className='w-2/5 mt-10 justify-center'>
            <div className='m-5'>
                <h2> Cursos </h2>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Título
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Professor 
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ativo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Preço
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ações 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map( (course, idx) => (
                        <tr className="bg-white border-b dark:bg-black dark:border-gray-700" key={idx}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div title={course.title}>
                                    { course.title.slice(0,37) }

                                    { course.title.length > 37 &&
                                        <span>...</span>
                                    }
                                </div>
                            </th>
                            <td className="px-6 py-4">
                                { course.teacher } 
                            </td>
                            <td className="px-6 py-4">
                                {course.active ?
                                    <FaCheck color='green' /> : <FaX color='red' />
                                }
                            </td>
                            <td className="px-6 py-4">
                                R${ course.price / 100 }
                            </td>
                            <td>
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    Editar
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {courses.length == 0 &&
            <div>
                <h1> Nenhum curso cadastrado até agora. :( </h1>
            </div>
            }

            <div className="flex justify-end mt-10">
                <Link href="/admin/courses/create">
                    <DotLButton loading={false}>
                        Criar um curso  
                    </DotLButton>
                </Link>
            </div>
        </div>
    )
}
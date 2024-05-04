'use client'

import React, { useState, useEffect } from 'react';

import CourseCard from './DotLCourseCard';
import { ICourse } from '@/app/models/Course';

export default function Home() {
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
        <>
            {courses.map( (course, idx ) => (
                <CourseCard title={course.title} price={course.price} key={idx}> </CourseCard> 
            ))}
        </>
    )
}
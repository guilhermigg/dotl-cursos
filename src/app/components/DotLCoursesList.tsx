import CourseCard from './DotLCourseCard';
import { ICourse } from '@/app/models/Course';

export default async function Home() {
    interface IResponseData {
        courses: ICourse[]
    }

    const response = await fetch('http://localhost:3000/api/courses');
    const result : IResponseData = await response.json();
    const courses : ICourse[] = result.courses

    return (
        <>
            {courses.map( (course, idx ) => (
                <CourseCard title={course.title} price={course.price} key={idx} thumbnail={course.thumbnail} />
            ))}
        </>
    )
}
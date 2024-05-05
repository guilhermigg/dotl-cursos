import CoursesList from './components/DotLCoursesList';

export default async function Home() {
    return (
        <div className='flex flex-row mt-5 flex-wrap justify-center items-center'>
            <CoursesList />
        </div>
    )
}
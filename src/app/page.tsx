import CourseCard from './components/DotLCourseCard';

export default async function Home() {
    return (
        <div className='flex flex-row mt-5 flex-wrap justify-start items-start'>
           <CourseCard title="Curso de Node.JS" price={2000}> </CourseCard> 
           <CourseCard title="Teste" price={2000}> </CourseCard> 
           <CourseCard title="kkk" price={5090}> </CourseCard> 
        </div>
    )
}
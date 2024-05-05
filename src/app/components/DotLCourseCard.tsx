export default async function CourseCard({title, price, thumbnail} : {title: string ; price : number, thumbnail : string}) {
    return (
        <div className="w-full max-w-sm bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
            <a href="#">
                <img height={720} width={1280} className="p-1 rounded-t-lg" src={"http://172.19.0.2:9000/courses-thumbnail/"+thumbnail} alt="course thumbnail" />
            </a>
            <div className="px-3 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        { title }
                    </h5>
                </a>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        R$ {price / 100}
                    </span>
                </div>
            </div>
        </div>
    )  
}
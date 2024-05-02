export default async function CourseCard({children, title, price} : {children: any ; title: string ; price : number}) {
    return (
        <div className="w-full max-w-sm bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <a href="#">
                <img className="p-1 rounded-t-lg" src="https://criarestilosnet.com/wp-content/uploads/2020/04/youtube-video-thumbnail-1200x675.jpg" alt="product image" />
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
export default function DotLInput(
    {children, label, inputType, value, setValue, placeholder} : {children: any, label: string, inputType: string, value : any, setValue : any, placeholder : string})
    {
    return (
        <div className="w-full mb-5 mt-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {label}
            </label>

            <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                {children}
            </span>
            <input type={inputType}
                className="rounded-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={placeholder}
                value={value} 
                onChange={e => setValue(e.target.value)}
                />
            </div>
        </div>
    )
}
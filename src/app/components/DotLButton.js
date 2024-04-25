
export default function Button({children, ...props}) {
    return (
        <button type="button" className="w-full py-3.5 text-base font-medium text-white inline-flex items-center justify-center bg-blue-699 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {children}
        </button>
    )
}
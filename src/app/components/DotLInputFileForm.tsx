export default function DotLFileInput(
    {children, label, changeHandler} : {children: any, label: string, changeHandler: any})
    {
    return (
        <div className="w-full mb-5 mt-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="upload_file">
            { label }
          </label>

          <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="upload_file"
            type="file"
            accept="image/*"
            onChange={(e) => changeHandler(e)}
          />
        </div>
    )
}
import DotLButton from "./components/DotLButton";
import { FaCloudUploadAlt } from "react-icons/fa"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col flex-start items-center p-24">
      <div className="">
        <h1 className="font-bold"> DotL - Upload and stream </h1>
      </div>
      <div>
      <form className="w-80 h-full">
        <div className="w-full mb-5 mt-10">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Título do curso
          </label>

          <input type="text" id="course-title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Título"
            required
            />
        </div>
      </form>

      </div>
      <div className="w-80 h-full">
        <DotLButton>
            <FaCloudUploadAlt className="w-10 text-white me-2"/> Upload video
        </DotLButton>
      </div>
    </main>
  );
}

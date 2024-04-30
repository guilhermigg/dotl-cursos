"use client"
import DotLButton from "@/app/components/DotLButton";
import { FormEvent } from "react";
import { FaMoneyBill } from "react-icons/fa6"
import { useState } from "react";

export default function Home() {
  const [ title, setTitle ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ description, setDescription ] = useState("");

  async function testRequest(e : FormEvent) {
    e.preventDefault();

    if(!title || !description || !price)
      return console.error("Todos os campos são obrigatórios")

    fetch("/api/courses", {
      "method": "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        price,
        description
      }),
    })
  }

  return (
    <div className="flex w-2/5 justify-center flex-col">
      <form className="w-full h-full" onSubmit={testRequest}>
        <div className="w-full mb-5 mt-10">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Título do curso
          </label>

          <input type="text"
            id="course-title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
            />
        </div>

        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Preço
          </label>

          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
              <FaMoneyBill />
            </div>
            <input 
              type="number"
              lang="pt-BR"
              step="0.1"
              id="course-price"
              className="block p-2.5 w-full z-20 ps-10 text-sm text-gray-900 bg-gray-50 rounded-lg border-e-gray-50 border-e-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-e-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Preço do curso"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="w-full mb-5 mt-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Descrição do Curso
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Escreva aqui uma descrição para o curso"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
            />
        </div>
        <div className="flex justify-end w-full">
          <DotLButton>
            Criar
          </DotLButton>
        </div>
      </form>
    </div>
  );
}

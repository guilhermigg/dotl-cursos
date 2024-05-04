"use client"

import DotLButton from "@/app/components/DotLButton";
import DotLInput from "@/app/components/DotLInputForm";
import Spinner from "@/app/components/Spinner";
import { FormEvent } from "react";
import { FaLock, FaCircleExclamation, FaUser, FaEnvelope } from "react-icons/fa6"
import { useState } from "react";
import { useRouter } from 'next/navigation';
import DotLFileInput from "@/app/components/DotLInputFileForm";

export default function Home() {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ role, setRole ] = useState("");
  const [ image, setImage ] = useState(null);

  const [ loading, setLoading ] = useState(false);
  const [ errors, setErrors ] = useState<string[]>([])

  const router = useRouter();

  const handleUserImage = (event : any) => {
    setImage(event.target.files[0]);
  };

  async function validate(){
    setErrors(prevErrors => []);

    if(!name || name.trim().length < 3)
      setErrors(prevErrors => [...prevErrors, "Nome deve ter no mínimo 3 caracteres"])
    if(!email || email.trim().length < 3)
      setErrors(prevErrors => [...prevErrors, "Email deve ter no mínimo 3 caracteres"])
    if(!password || password.trim().length < 8)
      setErrors(prevErrors => [...prevErrors, "Senha deve ter no mínimo 8 caracteres"])
  }

  async function createRequest(e : FormEvent) {
    e.preventDefault();

    await validate();

    if(errors.length > 0) return
  
    setLoading(true)

    const fd = new FormData();
    fd.append('name', name);
    fd.append('password', password);
    fd.append('email', email);
    fd.append('role', role);
    
    try{
      const response = await fetch("/api/users", {
        method: "POST",
        body: fd
      });

      if (response.ok) router.push('/api/users');
    } catch(e) {
      console.error(e)
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex w-2/5 justify-center flex-col">
      { errors.length > 0 &&
      <div className="flex p-4 mt-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
        <FaCircleExclamation className="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" />
        <span className="sr-only">Erros</span>
        <div>
          <span className="font-medium">
            Verifique se os requerimentos estão sendo atendidos:
          </span>
            <ul className="mt-1.5 list-disc list-inside">
              {errors.map( (error, idx ) => (
                <li key={idx}>
                  { error }
                </li>
              ))}
          </ul>
        </div>
      </div>
      }
      <form className="w-full h-full" onSubmit={createRequest}>
        <DotLInput label="Nome" inputType="text" value={name} setValue={setName} placeholder="Nome do usuário">
          <FaUser />
        </DotLInput>

        <DotLInput label="E-mail" inputType="text" value={email} setValue={setEmail} placeholder="Email">
          <FaEnvelope />
        </DotLInput>

        <DotLInput label="Senha" inputType="password" value={password} setValue={setPassword} placeholder="Senha do usuário">
          <FaLock />
        </DotLInput>

        <div className="mb-10">
          <label htmlFor="roles" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Selecionar posição do usuário
          </label>
          <select id="roles" value={role} onChange={e => setRole(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="3">Aluno</option>
            <option value="2">Professor</option>
            <option value="1">Administrador</option>
          </select>
        </div>

        <div className="flex justify-end w-full">
          <DotLButton loading={loading}>
            { loading ?
              <div className="flex justify-center"><Spinner /></div> : "Criar usuário"
            }
          </DotLButton>
        </div>
      </form>
    </div>
  );
}

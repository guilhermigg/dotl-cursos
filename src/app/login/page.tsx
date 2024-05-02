"use client";
import { FormEvent, useState } from "react"
import DotLButton from "../components/DotLButton";

export default function Login() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const loginRequest = (e : FormEvent) => {
        e.preventDefault();
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-extrabold m-10"> Login</h1>

            <form onSubmit={loginRequest}>
                <input
                    type="text"
                    id="user-email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />

                <input
                    type="password"
                    id="user-email"
                    className="bg-gray-50 mt-5 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />

                <div className="w-full">
                    <DotLButton loading={false}>
                        Acessar
                    </DotLButton>
                </div>
            </form>
        </div>
    )
}
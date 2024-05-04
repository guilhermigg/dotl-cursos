import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { comparePassword } from "../../helpers/bcryptHandler";

import Knex from "knex";
import knexConfig from "@/../knexfile";

const knex = Knex(knexConfig);

import { UserModel } from "@/app/models/User";
const userModel = new UserModel(knex);

export const options : NextAuthOptions = {
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Email"
                },
                password: {
                    label: "Senha",
                    type: "text",
                    placeholder: "Senha"
                }
            },

            async authorize(credentials) {
                let userFound;
                try {
                    userFound = await userModel.findByEmail(credentials?.email as string);
                } catch (e) {
                    console.log(e)
                }

                if (userFound == undefined || !credentials)
                    return null
                
                const matchPassword = await comparePassword(credentials?.password, userFound?.password as string)

                if(!matchPassword) return null 
                else {
                    delete userFound.password
                    return userFound 
                }
            }
        })
    ]
};
import { UserProps } from "../types/user"

export const getUsers = async (): Promise<UserProps[]>  => {
    const res = await fetch("/api/userRoute")
    const data = await res.json()

    return data
}


export const deleteUsers = async (id: string) =>{
    const res = await fetch(`/api/userRoute/${id}`, {
        method: "DELETE"
    })

    const data = await res.json()

    return data
}
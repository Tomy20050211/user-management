'use client'
import { getUsers } from "@/src/services/user";
import { deleteUsers } from "@/src/services/user";
import { useEffect, useState } from "react";
import type { UserProps } from "@/src/types/user";
import Table from "@/src/components/ui/TableUsers";



const User = () => {
    //Uso un estado donde se guardara mi lista de usuarios, inicialmente es un array vacio
    const [users, setUsers] = useState<UserProps[]>([])


    //Funcion asincrona para llamar los datos de getUsers
    const fetchData = async () => {

        const result = await getUsers()  //Espero la respuesta de getUsers
        setUsers(result) //Y la guardo en mi estado
    }

    const handleDelete = async(id:string) => {

        await deleteUsers(id)

        setUsers((prev) => prev.filter(user => user._id !== id))
    }

    

    useEffect(() => {
        fetchData()
    }, [])
  
    console.log(users)
    return (
        <>
            <h1>Users Table</h1>

            <div className="max-w-5xl mx-auto p-6">
                <Table users={users} onDelete={handleDelete} />
            </div>
        </>
    )
}

export default User
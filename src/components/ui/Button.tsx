import { ButtonProps } from "@/src/types/button";

//Boton reutilizable 
export default function Button ({text, onClick}: ButtonProps) {
    return (
        <>
         <button onClick={onClick}>{text}</button>
        </>
       
        
    )
}
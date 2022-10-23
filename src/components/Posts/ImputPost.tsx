import { Comment } from "./comment";
import {ReactNode} from 'react'
import { useState } from "react";




interface imputPostProps{
    name?: string
    text?: ReactNode
}

export function ImputPost({name, text}: imputPostProps){
   const hasComment = [name]


   const [comentario, novoComentario] = useState([1,2])

   function HandleCreateNewComment(){
    novoComentario([...comentario, comentario.length + 1])


    event?.preventDefault()
    
}
   
    return(
        <>
        
        <form onSubmit={HandleCreateNewComment} className="mt-6">
            <h2 className="text-white text-bold mb-4">
                Deixe seu feedback
            </h2>
    
            <textarea placeholder='deixe um comentário...'  className="bg-gray1 w-full text-gray6 min-h-[96px] rounded-lg focus:ring focus:ring-green-light text-justify mb-4 p-2" />
        
        
        <button type="submit" className="w-[108px] h-[52px] bg-green text-bold text-lg text-white rounded-lg" >Publicar</button>
        </form>
    
       <div>
       
            {comentario.map(comment => {
                return(
                    hasComment.map(comment =>{
                    
                        if (comment !== undefined){
                            return(<Comment 
                            name={name}
                            text={text}
                            />)}
                    })
                )
            })}
        </div>
        </>
    )
}
import { Comment } from "./comment";
import { ReactNode } from "react";
import { useState } from "react";

interface imputPostProps {
  name?: string;
  text?: ReactNode;
}

export function ImputPost({ name, text }: imputPostProps) {
  const [hasComment, hasCommentSet] = useState(["Comentário muito bacana!"]);

  const [contador, setContador] = useState([name]);
  const [comentario, novoComentario] = useState([1]);

  //comentário é o contador de comentarios
  function HandleCreateNewComment() {
    event?.preventDefault();
    const newCommentTarget = event?.target.textarea.value;
    novoComentario([...comentario, comentario.length + 1]);
    if (hasComment !== undefined) {
      novoComentario([comentario.length + 1]);
      hasCommentSet([...hasComment, newCommentTarget]);
      console.log(hasComment);
    }
  }

  function addNewComment(){
    const newCommentTarget = event?.target.textarea.value;
    setContador([...contador, newCommentTarget]) 
    if(contador.length < 1){
            return(<h1>nada</h1>)
        }
        else{
            return(
                contador.map(comentario=>{
                    
                    
                    <Comment name={name} text= {contador}/>
                })

            )
        }
  }

  return (
    <>
      <form onSubmit={HandleCreateNewComment} className="mt-6">
        <h2 className="text-white text-bold mb-4">Deixe seu feedback</h2>

        <textarea
          placeholder="deixe um comentário..."
          name="textarea"
          className="bg-gray1 w-full text-gray6 min-h-[96px] rounded-lg focus:ring focus:ring-green-light text-justify mb-4 p-2"
        />

        <button
          type="submit"
          className="w-[108px] h-[52px] bg-green text-bold text-lg text-white rounded-lg"
        >
          Publicar
        </button>
      </form>

      <div>
        {contador.map((comentario) => {
          if (comentario !== undefined) {
            return hasComment.map((comment) => {
              return <Comment name={name} text={comment} />;
            });
          } else {addNewComment()}
        })}
      </div>
    </>
  );
}

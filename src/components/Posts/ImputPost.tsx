
export function ImputPost(){
    return(
        <>
        
        <form className="mt-6">
            <h2 className="text-white text-bold mb-4">
                Deixe seu feedback
            </h2>
    
            <textarea placeholder='deixe um comentário...'  className="bg-gray1 w-full text-gray6 min-h-[96px] rounded-lg focus:ring focus:ring-green-light text-justify mb-4 p-2" />
        </form>
    
        <button type="submit" className="w-[108px] h-[52px] bg-green text-bold text-lg text-white rounded-lg" >Publicar</button>
        
        </>
    )
}
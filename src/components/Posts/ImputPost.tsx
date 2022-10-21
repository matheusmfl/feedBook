
export function ImputPost(){
    return(
        <>
        
        <div className="mt-6">
            <h2 className="text-white text-bold mb-4">
                Deixe seu feedback
            </h2>
    
            <input type="text" placeholder="Escreva um comentário..." className="bg-gray1 w-full text-gray6 min-h-[96px] rounded-lg focus:ring focus:ring-green-light text-justify mb-4" />
        </div>
    
        <button type="submit" className="w-[108px] h-[52px] bg-green text-bold text-lg text-white rounded-lg" >Publicar</button>
        
        </>
    )
}
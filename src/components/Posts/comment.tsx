import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'
import {ReactNode} from 'react'
import {posts} from '../../App'


interface CommentProps{
    name?: string,
    text?: ReactNode,

}


export function Comment({name, text} : CommentProps){
    return(
        <>
        
    <div className="w-full flex mt-8 ">
        <img src='https://avatars.githubusercontent.com/u/92310190?v=4' alt="" className="rounded-lg w-[50px] h-[50px]"/>
        <div className="w-full ml-4 bg-gray8 h-[120px] rounded-lg p-4 ">
            <div className='flex place-content-between '>
            <p className="text-gray7 text-lg font-bold">{name}</p>
            <Trash className='text-white hover:text-red-danger hover:cursor-pointer'/>
            </div>
            <p className='pt-4 text-white text-md'>{text}</p>
        </div>
       
           
            
    </div>
        <div className='ml-[82px] flex mt-4 hover:cursor-pointer w-max '>
            <ThumbsUp className='text-gray5 text-lg hover:text-green'/> <p className='text-bold text-md hover:text-green font-sans text-gray5 ml-[10px]'>Aplaudir</p>
                </div>
        </>
    
    )

}
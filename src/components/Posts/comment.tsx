import {Trash} from 'phosphor-react'



export function Comment(){
    return(
    <div className="w-full flex mt-8">
        <img src='https://avatars.githubusercontent.com/u/92310190?v=4' alt="" className="rounded-lg w-[50px] h-[50px]"/>
        <div className="w-full ml-4 bg-gray8 h-[120px] rounded-lg p-4">
            <div className='flex place-content-between'>
            <p className="text-gray7 text-lg font-bold">Marcelo Amorim</p>
            <Trash className='text-white hover:text-red-danger hover:cursor-pointer'/>
            </div>
            <p className='pt-4 text-white text-md'>Muito bom, Parabéns!</p>

        </div>
    </div>
    )

}
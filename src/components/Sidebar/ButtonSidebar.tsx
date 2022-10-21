import {ReactNode} from 'react'
import {PencilLine} from 'phosphor-react'

interface propsButton {
    children: string;
}

export function Button({children}: propsButton) {
   return(

   <button className='flex gap-2 text-green-light h-12 w-[192px] border-[1px] rounded-lg items-center justify-center mt-[32px] hover:text-white hover:bg-green-light hover:border-none'>
        <PencilLine/>
        {children}
    </button>

   )
}
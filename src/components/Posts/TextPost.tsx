import { ReactNode } from "react";

export interface textProps {
    children: ReactNode;
    url?: string;
}

export function TextPost({children, url}: textProps){
    return(
        <>
        
        <p className="text-gray6 mt-6 text-md leading-10 ">
            {children} 
        </p>

        <a href={url} className='text-green-light text-lg font-bold'>
            {url}
            </a>
        
        </>
    )
}
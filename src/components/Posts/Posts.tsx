
import { Comment } from "./comment";
import { ImputPost } from "./ImputPost";
import { ProfilePosts } from "./ProfilePosts";
import { TextPost } from "./TextPost"; 
import {ReactNode} from 'react'
    

interface propsPost {
    url: string,
    name: string,
    profession: string,
    link: string,
    content: ReactNode
    nameComment?: string,
    textComment?: ReactNode

}






export function Posts({url, name, profession, link, content, nameComment, textComment}: propsPost){
    
    const hasComment = [nameComment]
    return(
            

                    <div className="p-10 max-w-[832px] bg-gray2 rounded-lg mb-8">
                    <ProfilePosts
            url={url}
            name={name}
            profession={profession}
            />
                <main className="border-b-[2px] border-gray3 ">
                    <TextPost url={link}>
                        <p> {content}  </p>
                        
                    </TextPost>
    
                </main>
    
            <footer>
                <ImputPost  />
            </footer>
            
            <div>
            {
                hasComment.map(comment =>{
                    if (comment !== undefined){
                        return(<Comment 
                        name={nameComment}
                        text={textComment}
                        />)}
                })
            }
            
            </div>
                    </div>
        
    )

}
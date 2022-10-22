
import { Comment } from "./comment";
import { ImputPost } from "./ImputPost";
import { ProfilePosts } from "./ProfilePosts";
import { TextPost } from "./TextPost";



    // async function getDados(){
    //     let dados = await fetch('https://api.github.com/users/matheusmfl').then(response => { return(response.json())}).then(data =>{
    //         return(data) } )

    //         console.log(dados)
    // }

    // getDados()

    
   




const posts = [
    {
        id: 1,
        author: {
            url: 'https://avatars.githubusercontent.com/u/92957086?v=4',
            name: 'Matheus Fonteles',
            profession: 'Dev FrontEnd'
        },
        content: [
           "Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite Return,evento da Rocketseat. O nome do projeto é Feed Book! 🚀"
        ],
        link: 'github.com/matheusmfl'
        
    },
    {
        id: 2,
        author: {
            url: 'https://avatars.githubusercontent.com/u/92957086?v=4',
            name: 'Marcelo Amorim',
            profession: 'Dev FrontEnd'
        },
        content: [
           "Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite Return,evento da Rocketseat. O nome do projeto é Feed Book! 🚀"
        ],
        link: 'github.com/matheusmfl'
        
    },
    

]

export function Posts(){
    return(
    
       <div>

           {
            posts.map(post =>{
                return(
                    <div className="p-10 max-w-[832px] bg-gray2 rounded-lg mb-8" key={post.id}>
                    
                    <ProfilePosts
            url={post.author.url}
            name={post.author.name}
            profession={post.author.profession}
            />
            <main className="border-b-[2px] border-gray3 ">
                    <TextPost url={post.link}>
                        {post.content}
                    </TextPost>
    
            </main>
    
            <footer>
                <ImputPost  />
            </footer>
            <Comment/>
            </div>
                )
    
            })
           }
       </div>
       
       
       

            
        
    
    )

}
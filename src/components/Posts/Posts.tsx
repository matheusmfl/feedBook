import { ImputPost } from "./ImputPost";
import { ProfilePosts } from "./ProfilePosts";
import { TextPost } from "./TextPost";



export function Posts(){
    return(
    <div className="p-10 max-w-[832px] bg-gray2 rounded-lg">
        <ProfilePosts
        url='https://avatars.githubusercontent.com/u/92957086?v=4'
        name="Matheus Fonteles"
        profession="Desenvolvedor FrontEnd"
        />
        <main className="border-b-[2px] border-gray3 ">
        <TextPost url="github.com/matheusmfl">
            
            Fala galeraa 👋
            <br></br>
            <br></br>
            <br></br>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no Ignite Return,<br></br>
            <br></br>
            evento da Rocketseat. O nome do projeto é Feed Book! 🚀<br></br>
            
        </TextPost>
        </main>
        <footer>
            <ImputPost />
        </footer>

            
        
    </div>
    )

}
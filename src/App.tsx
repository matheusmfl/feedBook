import { Header } from './components/Header/Header'
import { Posts } from './components/Posts/Posts'
import {Sidebar} from './components/Sidebar/Sidebar'
import './styles/global.css'


const posts = [
  {
      id: 1,
      author: {
          url: 'https://avatars.githubusercontent.com/u/92957086?v=4',
          name: 'Matheus Fonteles',
          profession: 'Dev FrontEnd'
      },
      content: [
           {
          type: 'paragrafh',
          value:  "Fala galeraa 👋"
          },
          {
            type: 'paragrafh',
            value:  " Acabei de subir mais um projeto no meu portifa."
          },
          {
            type: 'paragrafh',
            value: ' É um projeto que fiz no Ignite Return,evento da Rocketseat. O nome do projeto é Feed Book! 🚀'
          }
      ]
      ,
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
        {
       type: 'paragrafh',
       value:  "Fala galeraa 👋"
       },
       {
         type: 'paragrafh',
         value:  " Acabei de subir mais um projeto no meu portifa."
       },
       {
         type: 'paragrafh',
         value: ' É um projeto que fiz no Ignite Return,evento da Rocketseat. O nome do projeto é Feed Book! 🚀'
       }
   ],
      link: 'github.com/matheusmfl'
      
  },
]


export function App() {
  

  return (
    <div className='bg-gray1'>
      <Header/>
      <main className='flex gap-8 mt-8'>
      <Sidebar />
        <div className='flex flex-col'>
        {posts.map(post => {

          
          const paragraph = post.content.map(content => {
            if (content.type === 'paragrafh'){
              return(<p>{content.value}</p>)
            }
          })
          

          return(            
         <Posts 
              name={post.author.name} 
              profession={post.author.profession}
              url={post.author.url}
              link={post.link}
              content={paragraph} /> 
)
                })}
        </div>
      </main>
    </div>

  )
}



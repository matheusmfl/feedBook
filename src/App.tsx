import { Header } from './components/Header/Header'
import { Posts } from './components/Posts/Posts'
import {Sidebar} from './components/Sidebar/Sidebar'
import './styles/global.css'

export function App() {
  

  return (
    <div className='bg-gray1'>
      <Header/>
      <main className='flex gap-8 mt-8'>
      <Sidebar />
        <Posts />
      </main>

    </div>
  )
}



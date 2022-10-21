import logo from '../../assets/logoProfile.svg'
import { Button } from './ButtonSidebar'


export function Sidebar() {

    return(
    
    <aside className='ml-40 relative rounded-lg h-72 w-64 bg-gray2 flex flex-col items-center justify-start  ' >
        
        <img src="https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60" alt="" className='object-cover rounded-t-lg h-[72px] w-full' />
        
        <img src={logo} alt="imgLogo" className='h-[60px] w-[60px] absolute top-10 ' />
        <p className='text-gray7 mt-[44px] text-lg font-bold'>Matheus Fonteles</p>
        <p className='text-gray5 text-md'>Dev FrontEnd</p>

        <footer className='h-[106px] w-full border-t-[1px] border-gray3 absolute bottom-0 flex items-center justify-center pb-8'>
        <Button>
            Editar seu perfil
        </Button>
        </footer>

    </aside>

    )
}
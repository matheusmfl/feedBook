import logo from '../../assets/logo-fb.svg'

export function Header(){
    return(
    <header className='flex justify-center items-center w-full bg-gray2 text-white h-24 gap-4'>
        <img src={logo} alt="Logo Alien" className='h-16 w-16'/>
        <p className='font-bold text-xl'> FeedBook </p>
        
    </header>
    )
}
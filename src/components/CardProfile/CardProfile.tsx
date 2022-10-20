import logo from '../../assets/logoProfile.svg'

export function CardProfile() {

    return(
    <div className='ml-[160px] mt-8 rounded-lg h-72 w-64 bg-gray2 flex flex-col items-center justify-start' >
        <img src={logo} alt="imgLogo" className='h-[60px] w-[60px] mt-[40px] ' />
        <p className='text-gray7 mt-4'>Matheus Fonteles</p>
        <p className='text-gray5'>Dev FrontEnd</p>

    </div>

    )
}

interface profileProps{
    url: string;
    name: string;
    profession: string;
}

export function ProfilePosts({url, name, profession}: profileProps){
    return(
        <div className="box-boder flex w-full justify-between">
            <div className="flex">
            <img src={url} alt="" className="h-[60px] w-[60px] border-[4px] border-green-light rounded-lg"/>
            <ul className="ml-4">
            <li className="text-gray7 text-lg font-bold">{name}</li>
            <li className="text-gray5 text-md">{profession}</li>
            </ul>
            </div>
            <p className="text-gray5 text-md">Publicado hà 1 hora</p>
        </div>

    )
}
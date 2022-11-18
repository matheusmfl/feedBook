import { useContext } from "react";
import { PostsContext } from "../../contexts/postsContexts";

export function ProfilePosts() {
  const { profile } = useContext(PostsContext);

  return (
    <div className="box-boder flex w-full justify-between">
      <div className="flex">
        <img
          src={profile.author.url}
          alt=""
          className="h-[60px] w-[60px] border-[4px] border-green-light rounded-lg"
        />
        <ul className="ml-4">
          <li className="text-gray7 text-lg font-bold">
            {profile.author.name}
          </li>
          <li className="text-gray5 text-md">{profile.author.profession}</li>
        </ul>
      </div>
      <p className="text-gray5 text-md">Publicado hà 1 hora</p>
    </div>
  );
}

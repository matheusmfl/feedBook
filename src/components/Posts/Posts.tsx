import { ImputPost } from "./ImputPost";
import { ProfilePosts } from "./ProfilePosts";
import { TextPost } from "./TextPost";
import { useContext } from "react";
import { PostsContext } from "../../contexts/postsContexts";

export function Posts() {
  const { profile } = useContext(PostsContext);
  return (
    <div className="p-10 max-w-[832px] min-w-[645px] bg-gray2 rounded-lg mb-8 w-full">
      <ProfilePosts />
      <main className="border-b-[2px] border-gray3 ">
        <TextPost />
      </main>
      <footer>
        <ImputPost />
      </footer>
    </div>
  );
}

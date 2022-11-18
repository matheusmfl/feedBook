import { ReactNode, useContext } from "react";
import { PostsContext } from "../../contexts/postsContexts";

export function TextPost() {
  const { profile } = useContext(PostsContext);
  return (
    <>
      <p className="text-gray6 mt-6 text-md leading-10 flex w-full ">
        Testando 1234
      </p>

      <a
        href={profile.author.url}
        className="text-green-light text-lg font-bold"
      >
        TextPost.tsx aqui é o conteúdo do post
      </a>
    </>
  );
}

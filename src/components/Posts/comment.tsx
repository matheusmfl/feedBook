import { Trash } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../../contexts/postsContexts";

export function Comment() {
  const { posts } = useContext(PostsContext);

  return (
    <>
      {posts.map((post) => {
        return (
          <>
            <div className="w-full flex mt-8 ">
              <img
                src="https://avatars.githubusercontent.com/u/92310190?v=4"
                alt=""
                className="rounded-lg w-[50px] h-[50px]"
              />
              <div className="w-full ml-4 bg-gray8 h-[120px] rounded-lg p-4 ">
                <div className="flex place-content-between ">
                  <p className="text-gray7 text-lg font-bold">Marcelo Amorim</p>
                  <Trash className="text-white hover:text-red-danger hover:cursor-pointer" />
                </div>
                <p className="pt-4 text-white text-md">{post.content}</p>
              </div>
            </div>
            <div className="ml-[82px] flex mt-4 hover:cursor-pointer w-max items-center ">
              <ThumbsUp
                className="text-gray5 text-lg hover:text-green"
                onClick={() => (post.likes += 1)}
              />
              {""}
              <span className="text-gray5 ml-2">{post.likes}</span>

              <p
                className="text-bold text-md hover:text-green font-sans text-gray5 ml-[10px]"
                onClick={() => (post.likes += 1)}
              >
                Aplaudir
              </p>
            </div>
          </>
        );
      })}
    </>
  );
}

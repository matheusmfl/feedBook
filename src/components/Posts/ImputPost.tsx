import { ReactNode, useContext } from "react";
import { useState } from "react";
import { PostsContext } from "../../contexts/postsContexts";
import { Comment } from "./Comment";

// criar um estado que recebe um array com o valor do textarea, sempre que o enter for digitado ele adicionar o
//value como um novo valor do array, depois na hora de imprimir ele tenta, fazer um MAP no array retornado
// e adicionar uma tag diferente para cada posição do array

export function ImputPost() {
  const { posts, setPosts } = useContext(PostsContext);

  const [comment, setComment] = useState("");
  // const [paragraph, setParagraph] = useState([]);
  const postComment = posts.map((post) => {
    return post.content;
  });

  function handleCreateNewPost() {
    event?.preventDefault();
    const newPost = {
      id: Math.random(),
      content: comment,
      createdAt: new Date().toISOString(),
      likes: 0,
    };
    setPosts((state) => [...state, newPost]);
    console.log(posts);
  }

  // function captureKey(e) {
  //   setComment(e.target.value);
  //   if (e.target.value == "l") {
  //     setParagraph([postComment]);
  //   }
  //   console.log("Aqui");

  //   console.log(paragraph);
  // }
  // console.log(posts);
  return (
    <>
      {posts.length == 0 && (
        <form className="mt-6" onSubmit={handleCreateNewPost}>
          <h2 className="text-white text-bold mb-4">Deixe seu feedback</h2>

          <textarea
            placeholder="deixe um comentário..."
            name="textarea"
            onChange={(e) => setComment(e.target.value)}
            className="bg-gray1 w-full text-gray6 min-h-[96px] rounded-lg focus:ring focus:ring-green-light text-justify mb-4 p-2"
          />

          <button
            type="submit"
            className="w-[108px] h-[52px] bg-green text-bold text-lg text-white rounded-lg"
            onClick={(e) => alert(postComment)}
          >
            Publicar
          </button>
        </form>
      )}

      {posts.length > 0 && (
        <form className="mt-6" onSubmit={handleCreateNewPost}>
          <h2 className="text-white text-bold mb-4">Deixe seu feedback</h2>

          <textarea
            placeholder="deixe um comentário..."
            name="textarea"
            onChange={(e) => setComment(e.target.value)}
            className="bg-gray1 w-full text-gray6 min-h-[96px] rounded-lg focus:ring focus:ring-green-light text-justify mb-4 p-2"
          />

          <button
            type="submit"
            className="w-[108px] h-[52px] bg-green text-bold text-lg text-white rounded-lg"
          >
            Publicar
          </button>
          <Comment />
        </form>
      )}
    </>
  );
}

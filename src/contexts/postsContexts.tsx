import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface Iposts {
  id: number;
  content: string;
  createdAt: string;
  likes: number;
}

interface Iprofile {
  id: number;
  author: {
    url: string;
    name: string;
    profession: string;
  };
}

interface postContextProps {
  posts: Iposts[];
  setPosts: Dispatch<SetStateAction<Iposts[]>>;
  profile: Iprofile;
}

interface postContextProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as postContextProps);

export function PostContextProvider({ children }: postContextProviderProps) {
  const [posts, setPosts] = useState<Iposts[]>([]);

  
  const profile: Iprofile = {
    id: 1,
    author: {
      url: "https://avatars.githubusercontent.com/u/92957086?v=4",
      name: "Matheus Fonteles",
      profession: "Dev FrontEnd",
    },
  };

  return (
    <PostsContext.Provider value={{ posts, setPosts, profile }}>
      {children}
    </PostsContext.Provider>
  );
}

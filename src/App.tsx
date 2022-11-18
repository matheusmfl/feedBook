import { Header } from "./components/Header/Header";
import { Posts } from "./components/Posts/Posts";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { PostContextProvider } from "./contexts/postsContexts";
import "./styles/global.css";

export function Comment() {}

export function App() {
  return (
    <PostContextProvider>
      <div className="bg-gray1">
        <Header />
        <main className="flex gap-8 mt-8">
          <Sidebar />
          <div className="flex flex-col">
            <Posts />
          </div>
        </main>
      </div>
    </PostContextProvider>
  );
}

import { Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { NoMatch } from "../pages/NoMatch";
import { Posts } from "../pages/Posts/Posts";
import { PostLists } from "../pages/PostLists";
import { Post } from "../pages/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./appLayout.module.css";
import Content from "../pages/Content/Content";
import Writing from "../pages/Writing/Writing";

export function AppLayout() {
  return (
    <>
      <div className={styles.container}>
        <nav>
          <Header />
        </nav>
        <div className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* 부모 */}
            <Route path="/content" element={<Content />}>
              <Route path="/content/:id" element={<Posts />}>
                <Route path="/content/:id/:menu" element={<Writing />} />
              </Route>
            </Route>
            <Route path="/posts" element={<Posts />}>
              {/* 자식 */}
              <Route index element={<PostLists />} />
              <Route path=":slug" element={<Post />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

import { 
	Routes,
	Route,
	Link
} from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Posts } from './Posts';
import { PostLists } from './PostLists';
import { Post } from './Post';


export function AppLayout() {
	return (
		<>
			<nav style={{ margin: 10}}>
                <Link to="/" style={{ padding: 5 }}>
                Home
                </Link>
                <Link to="/posts" style={{ padding: 5 }}>
                Posts
                </Link>
                <Link to="/about" style={{ padding: 5 }}>
                About
                </Link>
            </nav>
		
            <Routes> 
                <Route path="/" element={<Home />} />
                {/* 부모 */}
                <Route path="/posts" element={<Posts />}> 
                    {/* 자식 */}
                    <Route index element={<PostLists />} />  
                    <Route path=":slug" element={<Post />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="*"	element={<NoMatch />} />
            </Routes>
		</>
    );
}
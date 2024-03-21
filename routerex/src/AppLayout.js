import { 
	Routes,
	Route,
	Link
} from 'react-router-dom';
import { Home } from'./Home';
import { About } from'./About';
import { NoMatch } from'./NoMatch';
import { Posts } from'./Posts';
import { PostLists } from'./PostLists';
import { Post } from'./Post';


export function AppLayout() {
	return (
		<>
			<nav style={{ margin: 10}}>
			<Link to="/" style={{ padding: 5 }}>
			Home
			</Link>
			<Link to="/posts"	style={{ padding: 5 }}>
			Posts
			</Link>
			<Link to="/about"	style={{ padding: 5 }}>
			About
			</Link>
		</nav>
		
		<Routes> 
			<Route path="/"		element={<Home />} />
			<Route path="/posts"	element={<Posts />}>
			<Route index element={<PostLists />} /> // ***포스트리스트. 포스트 태그가 slug에 의해서 넘어감 
			<Route path=":slug"		element={<Post />} /> // ***동적으로 하기 위해서 파라미터를 받는 부분
			</Route>
			<Route path="/about"	element={<About />} />
			<Route path="*"		element={<NoMatch />} />
		</Routes>
		</>
		);
	}
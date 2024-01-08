import News from './components/news/News';
import Pics from './components/pics/Pics';
import Visual from './components/visual/Visual';
import './global.scss';

function App() {
	return (
		<div className='App'>
			<Visual />
			<News />
			<Pics />
		</div>
	);
}

export default App;

/*
	Automatic Batching
	: 여러개의 state가 하나의 핸들러함수 안쪽에서 동시에 변경이 될 때 그룹으로 묶어서 한번만 렌더링 처리
	: React 17에도 Batching 기능이 동작되긴 하나 Promise를 반환하는 핸들러 안쪽에 여러개의 state가 변경될 경우에는 동작안됨
*/
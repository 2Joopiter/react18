import { useState } from 'react';
import './global.scss';

function App() {
	const [Count, setCount] = useState(0);
	const [Items, setItems] = useState([]);

	// 하나의 핸들러함수 안쪽에 화면의 재랜더링을 담당하는 2개의 state값이 있음
	// 아래의 값들은 가상의 예시
	// Count - 중요한 정보값 + 빠르게 연산 가능한 값
	// Items - 상대적으로 덜 중요한 정보값 + 많은 시간이 필요한 연산(무거운 연산)
	// 기존 useTranstion이 없을 때는 덜 중요한 정보값인 Items의 연산이 끝나지 않았기 때문에 상대적으로 빠르게 처리할 수 있는 Count 값까지 화면에 늦게 출력이 됨 > 사용자는 무거운 연산의 State가 끝날때까지 로딩을 기다려야 하는 문제 발생
	const handleClick = () => {
		setCount(Count + 1);

		const arr = Array(10000)
			.fill(1)
			.map((_, idx) => Count + idx);

		setItems(arr);
	};

	return (
		<div className='App'>
			<button onClick={handleClick}>{Count}</button>
			<ul>
				{Items.map((num) => (
					<li key={num}>{num}</li>
				))}
			</ul>
		</div>
	);
}

export default App;

/*
	useTransition
	: 컴포넌트 렌더링시 연산의 우선순위를 지정해서 늦게 렌더링해도 될 것들을 선별지정
	: 기존의 React 17에서는 한번 렌더링 연산이 시작되면 중간에 멈추는 게 불가능
	: 특정 핸들러함수에 의해 화면을 재연산해야 되는 경우 중간에 무거운 로직이 실행되는 연산이 있다면 굳이 무거운 연산이 필요없는 컴포넌트까지 같이 지연이 일어나서 전반적인 로딩속도에 악영향을 미침
*/

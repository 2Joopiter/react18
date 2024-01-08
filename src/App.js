import './global.scss';

function App() {
	return <div className='App'></div>;
}

export default App;

/* 
	React18에서의 Suspense를 활용한 컴포넌트 렌더링의 동기화처리
	- 각 페이징에 구성되어 있는 컴포넌트들을 동시에 호출하는 것이 아닌 영역별로 렌더링 시점을 동기화처리
	- 이전 버전까지는 클라이언트 컴포넌트에서만 제한적으로 동작되는 기술이었지만 18버전부터는 SSR 방식의 컴포넌트에서도 활용 가능하도록 개선됨
	- 전제조건: 프라미스 상태일 때
	
	활용 예시
	- 비동기 데이터를 활용하는 컴포넌트의 경우 비동기 데이터 fetching이 완료될때까지 해당 비동기 데이터 관련 컴포넌트의 렌더링을 시작하지 않으면서 suspense가 Promise의 상태값을 감시
	Promise가 fullfilled나 rejected로 상태가 전환되면 동기적으로 해당 데이터를 활용하는 컴포넌트를 렌더링

	활용 예시2
	- 비동기 데이터의 pending상태가 길어질 때 대신 fallback을 통해서 정적인 UI를 대신 호출 (로딩바 같은 UI)

	useTransition과의 차이
	- 동기화. 아예 물리적으로 호출 자체를 안하는 것. (Promise 객체의 상태를 실시간으로 감시하다가 Pending이 끝났을 때 동기적으로 컴포넌트 호출)
	- useTransition은 동시에 호출되지만(비동기방식), startTransition로 묶어둔 연산의 우선순위를 미루는 것 뿐임(나중에 처리)
	
*/

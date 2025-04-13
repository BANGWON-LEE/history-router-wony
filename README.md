# history-router-wony
바닐라 자바스크립트로 historyRouter 구현

< 설명 >
<br/>
1.모듈화 하는 것을 목표로 구현
- registerHistoryRouter(arg1, arg2) 이와 같은 형식으로 모듈화 되도록 작성함.

2. registerHistoryRouter
- registerHistoryRouter 첫 인자는 경로, 두 번째 인자는 보여주고자 하는 페이지로 된 함수(컴포넌트)이다. 
- registerHistoryRouter 호출 될 때마다, 클로저로 선언한 함수의 set메서드에 리스트를 저장한다.


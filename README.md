# hash-router-wony
바닐라 자바스크립트로 hashRouter 구현

< 설명 >
<br/>
1.모듈화 하는 것을 목표로 구현
- registerHashRouter(arg1, arg2) 이와 같은 형식으로 모듈화 되도록 작성함.

2. registerHashRouter
- registerHashRouter 첫 인자는 경로, 두 번째 인자는 보여주고자 하는 페이지로 된 함수(컴포넌트)이다. 
- registerHashRouter 호출 될 때마다, 클로저로 선언한 함수의 set메서드에 리스트를 저장한다.

3. addEventListener('hasChange'...
- href에 #을 붙인 a태그를 클릭하면 이벤트 리스너의 'hashChane가 인식하여 경로에 맞는 페이지를 보여주게 하였다.

4. 404 notFound 페이지 구현 완료.
-저장된 라우터 경로에 일치하는 게 없으면 undefined 반환하여 404 페이지가 나타날 수 있도록

5. path parameter 구현 완료.
- 등록 path와 방문 path의 세그넌트를 일치시킴.

<해야할 것>
<br/>
1. 응집도 높이는 방법
2. history Router 만들기
# history-router-wony

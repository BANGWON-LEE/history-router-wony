//3번
function pageList() {
  const pageArr = []
  return {
    get: function () {
      return pageArr
    },
    set: function (page) {
      pageArr.push(page)
    },
  }
}

const pagesInfo = pageList()
//6번 또는 12번
function resultPage(resultPage) {
  const target = document.querySelector('#root')
  target.innerHTML = resultPage
}

//8번
export function choicePage() {
  const pageObj = pagesInfo.get()
  const path = location.pathname || '/'

  const page = pageObj.find(el => {
    const pathParamsVaild = pathParams(el, path)
    return pathParamsVaild
  })

  const pathPage = getPathParamsPage(path)
  const pageType = typeof page?.page

  const currentPageStatus = getPage(pageType, pathPage, page)

  resultPage(currentPageStatus)
}

// 11번
const getPage = function (pageType, pathPage, page) {
  // pageType, 즉 리턴된 페이지 타입에 따라 리턴값이 다르다.
  // path parameter가 있는 것은 함수, 없는 것은 문자열로 리턴된다.
  switch (pageType) {
    case 'function':
      // path parameter이 있으면 함수에 값을 파라미터로 넘기어 보여줌.
      return page.page(pathPage)
    case 'undefined':
      return undefined
    default:
      return page.page
  }
}

//10번
function getPathParamsPage(path) {
  // path parameter의 세그넌트를 리턴 하는 것.
  const dividePath = path.split('/')
  const result = dividePath.filter((path, index) => {
    return index > 1 && path
  })

  return result
}

//9번
function pathParams(el, path) {
  // 쿼리 파라미터가 있는지 확인하고, 유무에 따라 해당 객체를 return
  const visitPath = path.split('/')
  const routerPath = el.path.split('/')
  const pathParamsChecking = routerPath.filter((el, index) => {
    return el.includes(':')
  })
  if (visitPath.length !== routerPath.length || visitPath[1] !== routerPath[1])
    return undefined
  if (pathParamsChecking.length > 0) {
    return el
  } else {
    return el.path === path ? el.path === path : null
  }
}

//2번
export function registerHistoryRouter(path, page) {
  //4번
  pagesInfo.set({ path: path, page: page })
}

//6번
function saveHistoryRouterPath(event) {
  const attrPath = event.target.getAttribute('path')
  history.pushState({ page: attrPath }, '', attrPath)
  createMoveEvent(attrPath)
}

//6-2
function createMoveEvent(state) {
  const historyPath = new CustomEvent('movehistory', {
    detail: {
      path: state,
    },
  })

  window.dispatchEvent(historyPath)
}

//7번 커스텀 이벤트 리스너 만들어야 함
window.addEventListener('movehistory', choicePage)

//5번
const btnTag = document.getElementsByTagName('button')

Array.from({ length: btnTag.length }).forEach((_, index) => {
  btnTag[index].getAttribute('path') !== null &&
    btnTag[index].addEventListener('click', event =>
      saveHistoryRouterPath(event)
    )
})

// 14번
function getPopState(event) {
  // 브라우저에서 뒤로가기 앞으로 가기 버튼을 클릭함으로서 호출되는 함수 선언
  const path = event.state.page
  history.replaceState({ page: path }, '', path)

  createMoveEvent(path)
}

//13번
window.addEventListener('popstate', event => getPopState(event))

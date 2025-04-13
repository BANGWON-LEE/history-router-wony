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

//6번
function resultPage(resultPage) {
  const target = document.querySelector('#root')
  target.innerHTML = resultPage
}

//5번
export function choicePage() {
  const pageObj = pagesInfo.get()
  const path = location.pathname || '/'

  const page = pageObj.find(el => {
    const pathParamsVaild = pathParams(el, path)
    return pathParamsVaild
  })

  const pathPage = getPathParamsPage(path)
  const pathType = typeof page?.page

  const currentPageStatus = getPage(pathType, pathPage, page)

  resultPage(currentPageStatus)
}

const getPage = function (pathType, pathPage, page) {
  switch (pathType) {
    case 'function':
      return page.page(pathPage)
    case 'undefined':
      return undefined
    default:
      return page.page
  }
}

function getPathParamsPage(path) {
  const dividePath = path.split('/')
  const result = dividePath.filter((path, index) => {
    return index > 1 && path
  })

  return result
}

function pathParams(el, path) {
  console.log('papa', el, path)
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

  const historyPath = new CustomEvent('movehistory', {
    detail: {
      path: attrPath,
    },
  })

  window.dispatchEvent(historyPath)
}

window.addEventListener('movehistory', choicePage)

//5번
const btnTag = document.getElementsByTagName('button')

Array.from({ length: btnTag.length }).forEach((_, index) => {
  btnTag[index].getAttribute('path') !== null &&
    btnTag[index].addEventListener('click', event =>
      saveHistoryRouterPath(event)
    )
})

//7번 커스텀 이벤트 리스너 만들어야 함

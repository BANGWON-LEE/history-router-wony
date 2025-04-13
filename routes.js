import { registerHistoryRouter } from './main.js'
import { another } from './pages/another.js'
import { home } from './pages/home.js'
import { notFound } from './pages/notFound.js'
import { sub } from './pages/sub.js'
import { subPath } from './pages/subPath.js'

//1번
registerHistoryRouter('/', home())
registerHistoryRouter('/sub', sub())
registerHistoryRouter('/sub/:id', subPath)
// registerHistoryRouter('/sub/:id/:content', subPath)
registerHistoryRouter('/another', another())
// registerNotFoundRouter(notFound())

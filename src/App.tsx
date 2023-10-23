import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles/styles'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import Edit from './pages/Edit'
import { store } from './store'
import { Provider } from 'react-redux'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  },
  {
    path: '/edit',
    element: <Edit />
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App

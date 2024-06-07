import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './containers/Home'
import ItemShow from './containers/ItemShow'
import Error404 from './containers/errors/Error404'
import Login from './containers/auth/Login'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemShow />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App

import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './containers/Home'
import ItemShow from './containers/ItemShow'
import Error404 from './containers/errors/Error404'
import Login from './containers/auth/Login'
import Signup from './containers/auth/Signup'
import Bebidas from './containers/Bebidas'
import Chocolates from './containers/Chocolates'
import CombosBox from './containers/CombosBox'
import ComidaInstantanea  from './containers/ComidaInstantanea'
import Galletas from './containers/Galletas'
import Golosinas from './containers/Golosinas'
import Snacks from './containers/Snacks'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemShow />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/comidaInstantanea" element={<ComidaInstantanea/>} />
          <Route path="/golosinas" element={<Golosinas/>} />
          <Route path="/chocolates" element={<Chocolates/>} />
          <Route path="/galletas" element={<Galletas />} />
          <Route path='/bebidas' element={<Bebidas/>} />
          <Route path='/combosBox' element={<CombosBox/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App

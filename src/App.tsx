import { Provider } from 'react-redux'

import 'bootstrap-icons/font/bootstrap-icons.css'

import Header from './components/Header'
import LayoutWrapper from './components/LayoutWrapper'
import Footer from './components/Footer'

import { store } from './store'

import { GlobalStyles } from './styles'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <LayoutWrapper />
      <Footer />
    </Provider>
  )
}

export default App

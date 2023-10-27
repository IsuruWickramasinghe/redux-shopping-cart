import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter} from 'react-router-dom'
import App from './App.jsx'
import './styles/main.css'
import Layout from './page/Layout.jsx'
import store from './context/store.js'
import { Provider } from 'react-redux'
import ScrollToTop from './components/ScrollToTop'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
      <ScrollToTop />
        <Layout>
          <App />
        </Layout>
      </HashRouter>
    </Provider>
  </React.StrictMode>
)

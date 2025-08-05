
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from 'react-redux';
import MyStore from "./redux-config/Store.jsx"

createRoot(document.getElementById('root')).render(
  <Provider  store={MyStore} >
    <BrowserRouter>
      <GoogleOAuthProvider clientId="853431747321-2j1gb04g51gv51sm262oljdlin9dnfog.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
    </BrowserRouter>
    </Provider>
  
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import LandingScreen from './components/LandingScreen.jsx';
import SignInPage from './components/SignInPage.jsx';
import CreateAc from './components/CreateAc.jsx';
import Profile from './components/Profile.jsx';

const router = createBrowserRouter(
  [
    {
      path: "/", element: <App />, children: [
        { path: "", element: <LandingScreen /> },
        { path: "sign-in", element: <SignInPage /> },
        { path: "create-account", element: <CreateAc /> },
        { path: "profile", element: <Profile /> },
        ]
    },
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

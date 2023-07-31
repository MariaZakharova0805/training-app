import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from './pages/error';
import { Main } from './pages/main'
import { Instructions } from './pages/instructions';
import { Contacts } from './pages/contacts';
import { Provider } from 'react-redux'
import { store } from './shared/store'
import { Statistic } from './pages/statistic';
import { Settings } from './pages/settings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
      {
        path: "/statistic",
        element: <Statistic />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      } 
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)



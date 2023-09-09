import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Error";
import Blog from "./routes/Blog";
import Proj from "./routes/Proj";
import Fun from "./routes/Fun";
import Post from "./routes/Post";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/blog",
        element: <Blog />,
        children: [
            {
                path: "/blog/:postId",
                element: <Post />,
            },
        ],
    },
    {
        path: "/proj",
        element: <Proj />,
    },
    {
        path: "/fun",
        element: <Fun />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

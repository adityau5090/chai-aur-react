import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import { Route } from "react-router-dom"
import Github from './components/github/Github.jsx'
import { githubInfoLoader } from './components/github/GithubInfoLoader.jsx'
import User from './components/user/User.jsx'

const router = createBrowserRouter(
// [
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {path: "",
//         element: <Home />
//       }, {
//         path: "about",
//         element: <About />
//       }
//     ]
//   }
// ]
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="user/:userid" element={<User />}/>
      <Route
      loader={githubInfoLoader }
      path="github" 
      element={<Github />}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

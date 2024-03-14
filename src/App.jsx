import './assets/styles/output.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Page from './pages/Page'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import NotFoundPage from './pages/NotFoundPage'
import Profile from './pages/Profile'
import PrivateRoutes from './routes/PrivateRoutes'
import SingleBlog from './pages/SingleBlog'
function App() {

  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/"/>
          <Route element={<Profile />} path="/profile"/>
          <Route element={<SingleBlog />} path="/single-blog/:blogId"/>
        </Route>
        
        <Route element={<Login />} path="/login"/>
        <Route element={<Register />} path="/register"/>
        
        
        <Route element={<NotFoundPage />} path="*"/>
      </Routes>
      <Page />
    </>
  )
}

export default App

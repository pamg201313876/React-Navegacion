import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Components/HomePage'
import { BlogPage } from './Components/BlogPage'
import { ProfilePage } from './Components/ProfilePage'
import { Menu } from './Components/Menu'
import { BlogPost } from './Components/BlogPost';
import { Login } from './Components/Login';
import { Logout } from './Components/Logout';
import { AuthProvider, useAuth, AuthRoute } from './Data/Auth';


function App() {
  return (
    <HashRouter>
      <AuthProvider>
        <Menu />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/blog" element={<BlogPage />}>
            <Route path=":slug" element={<BlogPost />} />
          </Route>

          <Route path="/logout" element=
            {
              <AuthRoute>
                <Logout />
              </AuthRoute>
            } />
            
          <Route path="/profile" element=
            {
              <AuthRoute>
                <ProfilePage />
              </AuthRoute>
            } />


          <Route path="/login" element={<Login />} />

          
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  );
}

export default App;

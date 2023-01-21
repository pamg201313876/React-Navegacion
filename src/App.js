import logo from './logo.svg';
import './App.css';
import {HashRouter, Routes, Route}  from 'react-router-dom';
import {HomePage} from './Components/HomePage'
import {BlogPage} from './Components/BlogPage'
import {ProfilePage} from './Components/ProfilePage'
import {Menu} from './Components/Menu'
import { BlogPost } from './Components/BlogPost';


function App() {
  return (
    <HashRouter>
        <Menu/>

      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/blog" element={<BlogPage/>}/>
          <Route path="/blog/:slug" element={<BlogPost/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>          
          <Route path="*" element={<p>Not Found</p>}/> 
      </Routes>

    </HashRouter>
  );
}

export default App;

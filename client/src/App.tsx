import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import Login from './pages/auth/Login.tsx'
import SignUp from './pages/auth/Signup.tsx'
import EmailSend from './pages/auth/EmailSend.tsx'
import OtpVerification from './pages/auth/OtpVerfication.tsx'
import ResetPassword from './pages/auth/ResetPassword.tsx'
import SideBar from './components/common/Sidebar.tsx'

import Notification from './pages/main/Notification.tsx'

import HomePage from './pages/Home/HomePage.tsx'
import StoryPage from './pages/Home/StoryPage.tsx'
import Explore from './pages/main/Explore.tsx'
import Profile from './pages/main/Profile.tsx'
import ProfilePage from './pages/main/Profile.tsx'
import ProfileEdit from './pages/main/ProfileEdit.tsx'
import PostDetails from './components/common/PostDeatils.tsx'
import PostPage from './pages/main/Postpage.tsx'
import Create from './components/modals/create/Comps.tsx'
import { Button } from './components/ui/Button.tsx'
import { PostDialog } from './components/modals/create/Form.tsx'

// import { Sidebar } from 'lucide-react'

function App() {
  const location = useLocation();
  const [authUser, setAuthUser] = useState(true)
  const [isStory, setIsStory] = useState(!authUser)
  const [showStatusBar, setShowStatusBar] = useState<boolean>(false);


  


  useEffect(() => {
    
    const st = localStorage.getItem('dark-mode');
    setShowStatusBar(st === 'true')

    const darkModeEnabled = localStorage.getItem('dark-mode') === 'true';
    if (darkModeEnabled) {
      document.documentElement.classList.add('dark');
      setShowStatusBar(true);
    }
  }, []);

  const handleCheckedChange = () => {
    setShowStatusBar(prev => {
      const newStatus = !prev;

      document.documentElement.classList.toggle('dark', newStatus);

      // Save the current state of dark mode in localStorage
      localStorage.setItem('dark-mode', newStatus.toString());
      return newStatus;
    });
  };

  return (
    <>

    <div className="flex dark:bg-black overflow-hidden">
    
      {authUser && !location.pathname.includes("/story") && (
        <SideBar showStatusBar={showStatusBar} handleCheckedChange={handleCheckedChange} />
      )}

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />

        <Route path="/profile/:username" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="edit/:username" element={authUser ? <ProfileEdit showStatusBar={showStatusBar} handleCheckedChange={handleCheckedChange} /> : <Navigate to="/login" />} />

        <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!authUser ? <SignUp /> : <Navigate to="/" />} />
        <Route path="/emailverification" element={<EmailSend />} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        <Route path="/story/:username/:id" element={authUser ? <StoryPage /> : <Navigate to="/login" />} />
        <Route path="post/:username/:postId" element={<PostPage />} />
        <Route path="/notifications" element={authUser ? <Notification /> : <Navigate to="/login" />} />
        <Route path="/explore" element={authUser ? <Explore /> : <Navigate to="/login" />} />
      </Routes>
    </div>
    
    </>

  )
}

export default App

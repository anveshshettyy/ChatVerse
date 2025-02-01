import Navbar from "./Components/Navbar"
import {Routes, Route, Navigate} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import SignUpPage from "./Pages/SignUpPage"
import LoginPage from "./Pages/LoginPage"
import ProfilePage from "./Pages/ProfilePage"
import SettingsPage from "./Pages/SettingsPage"
import { useAuthStore } from "./store/useAuthStore"
import { useEffect } from "react";
import { Loader} from "lucide-react";
import {Toaster} from "react-hot-toast"
import { useThemeStore } from "./store/useThemeStore"
 
const App = () => {
  const {authUser , checkAuth, isCheckingAuth} = useAuthStore();
  const { theme } = useThemeStore();
  useEffect(()=> {
    checkAuth()
  },[checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser) return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10 animate-spin" />
    </div>
  )
  

  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to={"/login"} />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/" } />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={authUser ? <SettingsPage /> : <Navigate to={"/login"} />} /> 
      </Routes>

      <Toaster />
    </div>
  )
}

export default App

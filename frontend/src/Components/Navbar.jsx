import { useAuthStore } from "../store/useAuthStore"
import { Link } from "react-router-dom";
import { LogOut, Settings, User } from "lucide-react";


const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-base-100 border-b border-base-300   fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container flex justify-between mx-auto px-10 h-16">
        <div className="flex items-center   gap-8">
          <Link to={"/"}>
            <div className="h-[7vh] mt-2 w-[10vh]  ">
              <img className="h-full w-full object-fill" src={"/chatVerseLogo.png"} alt="" />
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-12">
          <Link
            to={"/settings"}
            className="btn btn-sm bg-transparent border-0 hover:bg-transparent hover:underline gap-2 transition-colors"
          >
            <Settings className="w-4 h-4 " />
            <span className="hidden sm:inline ">Settings</span>
          </Link>

          {authUser && (
            <>
              <Link
                to={"/profile"}
                className="btn btn-sm gap-2 bg-transparent border-0 hover:bg-transparent hover:underline  transition-colors">
                  <User className="size-5 " />
                  <span className="hidden  sm:inline">Profile</span>
              </Link>

              <button className="flex gap-2 hover:underline items-center" onClick={logout} >
                <LogOut className="size-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
              </>
          )}
            </div>
        </div>
    </header>

  )
}

export default Navbar




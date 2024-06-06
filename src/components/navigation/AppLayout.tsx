import { Outlet } from "react-router-dom"
import Header from "./Header"

const AppLayout = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <Outlet />
    </div>
  )
}

export default AppLayout
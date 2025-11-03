import { SideBar } from "../Sidebar/Sidebar"
import { ChatWindow } from "../Chat/ChatWindow"

export const AppLayout = () => {
  return (
    <div className="flex h-screen bg-dark-600 relative">
      <SideBar />
      <ChatWindow />
    </div>
  )
}

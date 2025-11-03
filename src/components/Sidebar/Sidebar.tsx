import { useState } from "react"
import { Conversations } from "./Conversations"
import { NewChatButton } from "./NewChatButton"
import { SideBarHeader } from "./SidebarHeader"

export const SideBar = () => {
  const [openSideBar, setIsOpenSideBar] = useState(true)

  if (!openSideBar) {
    return (
      <div className="absolute flex z-10 bg-dark-600 rounded-lg top-3 left-3">
        <button
          onClick={() => setIsOpenSideBar(true)}
          className="p-2 focus:outline-none focus:ring-2 focus:ring-purple "
        >
          <img src="/Off.svg" alt="Open sidebar" />
        </button>
      </div>
    )
  }

  return (
    <aside className="w-[296px] shrink-0 bg-dark-700 text-dark-200 flex flex-col p-5">
      <SideBarHeader onClose={() => setIsOpenSideBar(false)} />
      <NewChatButton />
      <Conversations />
    </aside>
  )
}

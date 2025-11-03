import { Conversations } from "./Conversations"
import { NewChatButton } from "./NewChatButton"
import { SideBarHeader } from "./SidebarHeader"

export const SideBar = () => {
  return (
    <aside className="w-[296px] shrink-0 bg-dark-700 text-dark-200 flex flex-col p-5">
      <SideBarHeader />
      <NewChatButton />
      <Conversations />
    </aside>
  )
}

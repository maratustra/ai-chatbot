import { ConversationItem } from "./ConversationItem"

export const Conversations = () => {
  return (
    <div className="flex flex-col pt-4">
      <h1 className="text-sm text-white font-bold pb-3">Conversations</h1>
      <ConversationItem />
      <ConversationItem />
      <ConversationItem />
    </div>
  )
}

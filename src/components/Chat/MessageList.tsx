import type { MessageType } from "../../types/message"
import { Message } from "./Message"

type MessageListProps = {
  messages: MessageType[]
}

export const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="flex flex-col flex-1 overflow-y-auto p-6 gap-5">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  )
}

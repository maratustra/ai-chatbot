import type { MessageType } from "../../types/message"

type MessageProps = {
  message: MessageType
}

export const Message = ({ message }: MessageProps) => {
  const isUser = message.role === "user"

  return (
    <div className="flex flex-col">
      <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
        {!isUser && (
          <div className="flex gap-3 justify-start">
            <img src="/Logo.svg" alt="" />
          </div>
        )}

        <div
          className={`max-w-1/2 text-white px-4 py-3 rounded-lg ${
            isUser ? "bg-purple" : "bg-dark-700"
          }`}
        >
          <p>{message.content}</p>
        </div>
      </div>
    </div>
  )
}

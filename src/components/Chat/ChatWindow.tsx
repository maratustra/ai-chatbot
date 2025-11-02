import type { MessageType } from "../../types/message"
import { MessageInput } from "./MessageInput"
import { MessageList } from "./MessageList"

const mockMessages: MessageType[] = [
  {
    id: "1",
    role: "user",
    content: "Hey my name is Clara! How are you?",
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: "2",
    role: "assistant",
    content:
      "Hi, Clara. I'm doing well. I just got back from the gym. How about yourself?",
    timestamp: new Date(Date.now() - 240000),
  },
  {
    id: "3",
    role: "user",
    content: "What is you favourite movie?",
    timestamp: new Date(Date.now() - 180000),
  },
  {
    id: "4",
    role: "assistant",
    content:
      "My favorite movie of all time is The Godfather Part II. What's your favourite movie?",
    timestamp: new Date(Date.now() - 120000),
  },
  {
    id: "5",
    role: "user",
    content: "Can you tell me more about The Godfather Part II?",
    timestamp: new Date(Date.now() - 60000),
  },
  {
    id: "6",
    role: "assistant",
    content:
      "It was directed by Michael Mann and starring Robert De Niro and Marlon Brando.",
    timestamp: new Date(),
  },
]

export const ChatWindow = () => {
  return (
    <div
      className="flex-1 flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: "url(/BackgroundImage.png)",
        backgroundSize: "auto",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-dark-600/40 z-0" />
      <div className="relative z-10 w-[720px] h-[616px] bg-dark-600 flex flex-col border rounded-lg border-dark-100 shadow-2xl overflow-hidden">
        <MessageList messages={mockMessages} />
        <MessageInput />
      </div>
    </div>
  )
}

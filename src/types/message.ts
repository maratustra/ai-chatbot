export type MessageRole = "user" | "assistant"

export interface MessageType {
  id: string
  role: MessageRole
  content: string
  timestamp: Date
}

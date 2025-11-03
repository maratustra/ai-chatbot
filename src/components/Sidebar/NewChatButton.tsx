export const NewChatButton = () => {
  return (
    <button className="flex items-center border-2 border-dark-400 rounded-lg py-2 pl-3 gap-2 focus:outline-none focus:ring-2 focus:ring-purple">
      <img src="/Add.svg" alt="Start new conversation" className="w-6 h-6" />
      <span className="text-dark-50 font-medium text-sm">New Chat</span>
    </button>
  )
}

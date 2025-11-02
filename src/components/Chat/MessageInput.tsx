export const MessageInput = () => {
  return (
    <div className="shrink-0">
      <div className="relative">
        <input
          type="text"
          className="w-full bg-transparent border-2 border-dark-400 rounded-lg px-4 py-3 text-dark-100 placeholder-dark-200 focus:outline-none focus:border-purple transition-colors pr-12"
          placeholder="Ask simplechat.ai anything"
        />
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-200 hover:text-purple transition-colors">
          <img src="/Send.svg" alt="" className="hover:text-purple" />
        </button>
      </div>
    </div>
  )
}

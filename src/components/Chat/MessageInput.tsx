export const MessageInput = () => {
  return (
    <div className="shrink-0">
      <form>
        <div className="relative">
          <label htmlFor="message-input" className="sr-only">
            Type your message
          </label>
          <input
            id="message-input"
            type="text"
            className="w-full bg-transparent border-2 border-dark-400 rounded-lg px-4 py-3 text-dark-100 placeholder-dark-200 focus:outline-none focus:border-purple transition-colors pr-12"
            placeholder="Ask simplechat.ai anything"
            aria-label="Message input"
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-200 hover:text-purple transition-colors"
            aria-label="Send message"
          >
            <img
              src="/Send.svg"
              alt="Send message"
              className="hover:text-purple"
              aria-hidden="true"
            />
          </button>
        </div>
      </form>
    </div>
  )
}

export const ConversationItem = () => {
  return (
    <li className="relative flex py-2 px-3 text-sm hover:bg-dark-600 cursor-pointer group hover:border border-dark-600 rounded-lg">
      <a
        href="#"
        className="flex gap-2 items-center min-w-0 flex-1 group-hover:pr-18 focus:outline-none focus:ring-2 focus:ring-purple"
      >
        <div className="shrink-0">
          <img src="/Chat.svg" alt="" />
        </div>
        <span className="group-hover:truncate">
          What is your favorite movie?
        </span>
      </a>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 flex group-hover:opacity-100 gap-2 transition-opacity pl-2 bg-dark-600">
        <button
          className="focus:outline-none focus:ring-2 focus:ring-purple"
          type="button"
          aria-label="Edit conversation"
        >
          <img src="/Edit.svg" alt="Edit chat name" />
        </button>
        <button
          className="focus:outline-none focus:ring-2 focus:ring-purple"
          type="button"
          aria-label="Delete conversation"
        >
          <img src="/Trash.svg" alt="Delete chat" />
        </button>
      </div>
    </li>
  )
}

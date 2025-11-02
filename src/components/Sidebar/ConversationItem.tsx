export const ConversationItem = () => {
  return (
    <div className="flex justify-between py-2 px-3 text-sm hover:bg-dark-600 cursor-pointer group hover:border border-dark-600 rounded-lg">
      <div className="flex gap-2 items-center">
        <div className="shrink-0">
          <img src="/Chat.svg" alt="" />
        </div>
        <button className="flex-1 text-left truncate min-w-0">
          What is your favorite movie?
        </button>
      </div>
      <div className="shrink-0 not-even:opacity-0 group-hover:opacity-100 flex gap-2 transition-opacity">
        <img src="/Edit.svg" alt="" />
        <img src="/Trash.svg" alt="" />
      </div>
    </div>
  )
}

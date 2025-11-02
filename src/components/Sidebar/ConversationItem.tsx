import ChatIcon from "../../assets/Chat.svg"
import EditIcon from "../../assets/Edit.svg"
import DeleteIcon from "../../assets/Trash.svg"

export const ConversationItem = () => {
  return (
    <div className="flex justify-between py-2 px-3 text-sm hover:bg-dark-600 cursor-pointer group hover:border border-dark-600 rounded-lg">
      <div className="flex gap-2 items-center">
        <img src={ChatIcon} alt="" />
        <button className="flex-1 text-left truncate">
          What is your favorite movie?
        </button>
      </div>
      <div className="opacity-0 group-hover:opacity-100 flex gap-2 transition-opacity">
        <img src={EditIcon} alt="" />
        <img src={DeleteIcon} alt="" />
      </div>
    </div>
  )
}

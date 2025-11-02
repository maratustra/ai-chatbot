import { Logo } from "./Logo"
import MinimizeSideBarIcon from "../../assets/Off.svg"

export const SideBarHeader = () => {
  return (
    <div className="flex justify-between pb-6">
      <Logo />
      <img
        src={MinimizeSideBarIcon}
        alt=""
        className="w-6 h-6 cursor-pointer"
      />
    </div>
  )
}

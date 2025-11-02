import { Logo } from "./Logo"

export const SideBarHeader = () => {
  return (
    <div className="flex justify-between pb-6">
      <Logo />
      <button>
        <img src="/Off.svg" alt="" />
      </button>
    </div>
  )
}

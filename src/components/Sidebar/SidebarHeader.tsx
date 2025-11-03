import { Logo } from "./Logo"

export const SideBarHeader = () => {
  return (
    <div className="flex justify-between pb-6">
      <Logo />
      <button className="focus:outline-none focus:ring-2 focus:ring-purple">
        <img src="/Off.svg" alt="Switch off sidebar" />
      </button>
    </div>
  )
}

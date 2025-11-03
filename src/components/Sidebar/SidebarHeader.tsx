import { Logo } from "./Logo"

type SideBarHeaderProps = {
  onClose?: () => void
}

export const SideBarHeader = ({ onClose }: SideBarHeaderProps) => {
  return (
    <div className="flex justify-between pb-6">
      <Logo />
      <button
        className="focus:outline-none focus:ring-2 focus:ring-purple"
        onClick={onClose}
      >
        <img src="/Off.svg" alt="Close sidebar" />
      </button>
    </div>
  )
}

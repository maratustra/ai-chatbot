import LogoSvg from "../../assets/Logo.svg"

export const Logo = () => {
  return (
    <div className="flex gap-2">
      <img src={LogoSvg} alt="" className="w-6 h-6" />
      <span className="text-gray-50">simplechat.ai</span>
    </div>
  )
}

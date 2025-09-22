import { Button, CustomImage } from "@/components"
import { SignUpIcon } from "@/icons"
import Link from "next/link"

const Header = () => {
  return (
    <div className="px-[50px] py-[20px] flex items-center justify-between">
      <Link href={"/"}>
        <CustomImage src="/site-logo.svg" alt="site-logo" W={243} H={32} />
      </Link>
      <div className="flex items-center gap-[30px]">
        <Link className="text-white hover:text-[#A259FF] duration-300 text-[16px] font-semibold" href={"/marketplace"}>Marketplace</Link>
        <Link className="text-white hover:text-[#A259FF] duration-300 text-[16px] font-semibold" href={"/rankings"}>Rankings</Link>
        <Link className="text-white hover:text-[#A259FF] duration-300 text-[16px] font-semibold" href={"/connect-wallet"}>Connect a wallet</Link>
        <Button icon={<SignUpIcon/>} iconPosition="left"> Sign Up</Button>
      </div>
    </div>
  )
}

export default Header

import { MessageIcon } from "@/icons"
import Button from "./Button"

const SendEmail = ({showIcon}: {showIcon?:boolean}) => {
  return (
    <form autoComplete="off" className="w-full relative">
        <input name="email" type="email" required className="w-full py-[19px] pr-[200px] pl-[20px] bg-white outline-none rounded-[20px]" placeholder="Enter your email here"/>
        <Button icon={showIcon && <MessageIcon/>} iconPosition="left" classList="absolute top-0 right-0 bottom-0 !px-[50px]">Subscribe</Button>
    </form>
  )
}

export default SendEmail

import { CollectionType } from "@/@types/CollectionType"
import { FC } from "react"
import CustomImage from "./CustomImage"
import { API } from "@/hooks"
import Heading from "./Heading"
import Text from "./Text"

const CollectionCard: FC<{ item: CollectionType }> = ({ item }) => {
  
  return (
    <div className="w-full sm:w-[330px]">
      <div className="w-full sm:w-[330px] h-[330px] overflow-hidden rounded-[20px] duration-300 collection-img-wrapper">
        <CustomImage classList="cursor-pointer !mx-auto !duration-300 rounded-[20px]" src={`${API}/file/${item.images[0]}`} alt="collection img" W={330} H={330} />
      </div>
      <div className="flex justify-between pt-[15px]">
        <div className="w-[100px] h-[100px] overflow-hidden rounded-[20px] duration-300 collection-img-wrapper">
          <CustomImage classList="cursor-pointer !duration-300 !w-full" src={`${API}/file/${item.images[1]}`} alt="collection img" W={100} H={100} />
        </div>
        <div className="w-[100px] h-[100px] overflow-hidden rounded-[20px] duration-300 collection-img-wrapper">
          <CustomImage classList="cursor-pointer !duration-300 !w-full" src={`${API}/file/${item.images[2]}`} alt="collection img" W={100} H={100} />
        </div>
        <button className="w-[100px] cursor-pointer flex items-center justify-center bg-[#A259FF] text-white font-bold text-[22px] rounded-[20px]">{item.images.length}+</button>
      </div>
      <div className="pt-[15px]">
        <Heading classList="!mb-[10px]" tag="h3">{item.title}</Heading>
        <div className="flex itmes-center gap-[12px]">
          <CustomImage src={`${API}/file/${item.creator.image}`} alt="collection img" W={24} H={24} />
          <Text>{item.creator.username}</Text>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard

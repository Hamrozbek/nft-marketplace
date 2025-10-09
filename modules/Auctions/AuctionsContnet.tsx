import { AuctionType } from "@/@types/AuctionType";
import { AuctionCountdown, Button, CustomImage, Heading } from "@/components";
import { API } from "@/hooks";
import { EyeIcon } from "@/icons";
import { useTranslations } from "next-intl";
import { FC } from "react"

const AuctionsContnet: FC<{ auctions: AuctionType }> = ({ auctions }) => {
    const t = useTranslations("auctionContent")

    return (
        <section style={{ backgroundImage: `url(${API}/file/${auctions.nft.image})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", backgroundAttachment: "fixed" }} className={`py-[40px] lg:py-[80px] flex lg:items-end justify-start h-[590px] lg:h-[660px] `}>
            <div className="containers w-full mx-auto lg:flex gap-10  justify-between">
                <div>
                    <button className="mb-[30px] flex items-center gap-[12px] bg-[#3B3B3B] py-[10px] px-[20px] text-white rounded-[20px]">
                        <CustomImage src={`${API}/file/${auctions.nft.creator.image}`} alt="creator img" W={24} H={24} />
                        {auctions.nft.creator.username}
                    </button>
                    <Heading classList="!mb-[30px]" tag="h2">{auctions.nft.title}</Heading>
                    <div className="hidden lg:block">
                        <Button icon={<EyeIcon />} iconPosition="left" classList="!px-[50px] bg-white hover:!border-black !text-black">{t("seeNft")}</Button>
                    </div>
                </div>
                <div>
                    <AuctionCountdown />
                    <div className="lg:hidden">
                        <Button icon={<EyeIcon />} iconPosition="left" classList="!px-[120px] mt-[30px] bg-white hover:!border-black !text-black">{t("seeNft")}</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AuctionsContnet

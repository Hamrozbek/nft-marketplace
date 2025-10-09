import { NftType } from "@/@types/NftType"
import { Button, Heading, NFTCard } from "@/components"
import { EyeIcon } from "@/icons"
import { useTranslations } from "next-intl"
import { FC } from "react"

const NFTContent: FC<{ nft: NftType[] }> = ({ nft }) => {
    const t = useTranslations("nftContnent")
    return (
        <section className="py-[40px] lg:py-[80px]">
            <div className="containers">
                <div className="pl-[10px] lg:pl-0 flex items-center justify-between mb-[60px]">
                    <div>
                        <Heading tag="h2" classList="!mb-[10px]">{t("discoverMoreNfts")}</Heading>
                        <Heading classList="!font-normal">{t("exploreNewTrendingNfts")}</Heading>
                    </div>
                    <div className="hidden lg:block">
                        <Button icon={<EyeIcon />} iconPosition="left" classList="!px-[50px]">{t("seeAll")}</Button>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-between gap-[30px]">
                    {nft.map(item => <NFTCard key={item.id} item={item} />)}
                </div>
                <div className="lg:hidden pt-[40px] flex justify-center">
                    <Button icon={<EyeIcon />} iconPosition="left" classList="px-[114px]">{t("seeAll")}</Button>
                </div>
            </div>
        </section>
    )
}

export default NFTContent

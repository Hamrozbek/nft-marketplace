import { Heading, Text } from "@/components"
import { useTranslations } from "next-intl"


const WorksContent = () => {
    const t = useTranslations("worksContent")


    // responsiv bitmagan 
    return (
        <section className="py-[40px] lg:py-[80px]">
            <div className="containers">
                <div className="pl-4">
                    <Heading tag="h2">{t("howItWorks")}</Heading>
                    <Heading classList="!font-normal">{t("findOutHowToGetStarted")}</Heading>
                </div>
                <div className="hidden lg:block">
                    <div className="flex flex-wrap justify-between gap-[20px] lg:gap-[30px]">

                        <div className="max-w-[330px] text-center rounded-[20px] mt-[48px] bg-[#3B3B3B] pb-[30px] pt-[10px] px-[40px]">
                            <img src="/works1.png" alt="works img" width={250} height={250} className="mb-[20px]" />
                            <div>
                                <Heading>{t("setupYourWallet")}</Heading>
                                <Text classList="!mt-1 lg:!mt-[10px]">{t("setUpYourWalletOfChoice")}</Text>
                            </div>
                        </div>

                        <div className="max-w-[330px] text-center rounded-[20px] mt-[48px] bg-[#3B3B3B] pb-[30px] pt-[10px] px-[40px]">
                            <img src="/works2.png" alt="works img" width={250} height={250} className="mb-[20px]" />
                            <Heading>{t("createCollection")}</Heading>
                            <Text classList="!mt-[10px]">{t("uploadYourWork")} </Text>
                        </div>
                        <div className="max-w-[330px] text-center rounded-[20px] mt-[48px] bg-[#3B3B3B] pb-[30px] pt-[10px] px-[40px]">
                            <img src="/works3.png" alt="works img" width={250} height={250} className="mb-[20px]" />
                            <Heading>{t("startEarning")} </Heading>
                            <Text classList="!mt-[10px]">{t("chooseBetweenAuctions")}</Text>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden">
                    <div className="flex flex-col gap-[20px]">
                        <div className="max-w-[315px] mx-auto flex gap-[20px] text-center items-center rounded-[20px] mt-[40px] bg-[#3B3B3B] p-[20px]">
                            <img src="/works1.png" alt="works img" width={100} height={100} />
                            <div>
                                <Heading>{t("setupYourWallet")}</Heading>
                                <Text classList="mt-[10px]">{t("setUpYourWalletOfChoice")}</Text>
                            </div>
                        </div>

                        <div className="max-w-[315px] mx-auto flex gap-[20px] text-center items-center rounded-[20px] mt-[40px] bg-[#3B3B3B] p-[20px]">
                            <img src="/works2.png" alt="works img" width={100} height={100} />
                            <div>
                                <Heading>{t("createCollection")}</Heading>
                                <Text classList="!mt-[10px]">{t("uploadYourWork")} </Text>
                            </div>
                        </div>
                        <div className="max-w-[315px] mx-auto flex gap-[20px] text-center items-center rounded-[20px] mt-[40px] bg-[#3B3B3B] p-[20px]">
                            <img src="/works3.png" alt="works img" width={100} height={100} />
                            <div>
                                <Heading>{t("startEarning")} </Heading>
                                <Text classList="!mt-[10px]">{t("chooseBetweenAuctions")}</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default WorksContent

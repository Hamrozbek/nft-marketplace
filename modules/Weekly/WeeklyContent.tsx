import { Heading, SendEmail } from "@/components"
import { useTranslations } from "next-intl"

const WeeklyContent = () => {
    const t = useTranslations("weeklyContent")

    return (
        <section className="pt-[40px] pb-[80px]">
            <div className="containers">
                {/* desctop  */}
                <div className="hidden bg-[#3B3B3B] rounded-[20px] lg:block">
                    <div className="py-[50px] px-[40px] flex justify-between items-center">
                        <img src="/weekly.png" alt="weekly img" width={425} height={310} />
                        <div className="w-[500px]">
                            <Heading tag="h2">{t("joinOurWeeklyDigest")}</Heading>
                            <Heading classList="!pt-[10px] !font-normal !pb-[40px]">{t("getExclusivePromotions")}</Heading>
                            <SendEmail showIcon={true} />
                        </div>
                    </div>
                </div>
                {/* mobail  */}
                <div className="lg:hidden">
                    <div className="flex flex-col justify-between items-center">
                        <img src="/weekly.png" alt="weekly img" width={315} height={255} />
                        <div className="max-w-[315px] mt-[30px]">
                            <Heading tag="h2">{t("joinOurWeeklyDigest")}</Heading>
                            <div>
                                <Heading classList="!pt-[10px] !font-normal !pb-[40px]">{t("getExclusivePromotions")}</Heading>
                                <SendEmail showIcon={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WeeklyContent

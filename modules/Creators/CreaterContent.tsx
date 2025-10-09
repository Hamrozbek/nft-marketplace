import { CreatorType } from '@/@types/CreatorType'
import { Button, CreatorCard, Heading, Text } from '@/components'
import { RoketaIcon } from '@/icons'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { FC } from 'react'

const CreaterContent: FC<{ creators: CreatorType[] }> = ({ creators }) => {
    const t = useTranslations("creatorsContent")

    return (
        <section className='py-[40px]  lg:py-[80px]'>
            <div className="containers">
                {/* desctop  */}
                <div className='hidden lg:block'>
                    <div className='flex items-center justify-between mb-[60px]'>
                        <div>
                            <Heading tag='h2'>{t("topCreators")}</Heading>
                            <Text>{t("checkoutTopRatedCreatorsOnTheNFTMarketplace")}</Text>
                        </div>
                        <Link href={"/rankings"}>
                            <Button icon={<RoketaIcon />} iconPosition='left'>{t("viewRankings")}</Button>
                        </Link>
                    </div>
                </div>

                {/* mobile  */}
                <div className='lg:hidden'>
                    <div className='mb-[40px]'>
                        <div className='max-w-[315px] mx-auto'>
                            <Heading tag='h2'>{t("topCreators")}</Heading>
                            <Text>{t("checkoutTopRatedCreatorsOnTheNFTMarketplace")}</Text>
                        </div>
                    </div>
                </div>

                {/* desctop  */}
                <div className='hidden lg:block'>
                    <div className='flex gap-10 justify-between cursor-pointer flex-wrap'>
                        {creators.map((item, index) =>
                            <Link key={item.id} href={`/creator/${item.id}`}>
                                <CreatorCard item={item} index={index} />
                            </Link>)}
                    </div>
                </div>

                {/* mobile */}
                <div className='lg:hidden'>
                    <div className='flex w-[315px] mx-auto flex-col gap-[20px] justify-center cursor-pointer'>
                        {creators.map((item, index) =>
                            <Link key={item.id} href={`/creator/${item.id}`}>
                                <CreatorCard item={item} index={index} />
                            </Link>)}
                        <Link href={"/rankings"}>
                            <Button icon={<RoketaIcon />} classList='!w-full !mt-[20px]' iconPosition='left'>{t("viewRankings")}</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreaterContent

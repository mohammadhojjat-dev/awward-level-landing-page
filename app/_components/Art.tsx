import React from 'react'
import {featureLists, goodLists} from "@/constants";
import Image from "next/image";
import Check from '@/public/images/check.png'
import CockTailImage from '@/public/images/under-img.jpg'
import ArtAnimation from "@/app/_components/animations/ArtAnimation";


const Art = () => {
    return (
        <ArtAnimation>
            <div id={'art'}>
                <div className={'container mx-auto h-full pt-20 '}>
                    <h2 className={'will-fade'}>The ART</h2>
                    <div className={'content'}>
                        <ul className={'space-y-4 will-fade'}>
                            {goodLists.map((feature, index) => (
                                <li key={index} className={'flex items-center gap-2'}>
                                    <Image src={Check} alt={'check'}/>
                                    <p>{feature}</p>
                                </li>
                            ))}
                        </ul>

                        <div className={'cocktail-img'}>
                            <Image src={CockTailImage} alt={'cocktail'}
                                   className={'abs-center masked-img size-full object-contain'}/>
                        </div>

                        <ul className={'space-y-4 will-fade'}>
                            {featureLists.map((feature, index) => (
                                <li key={index} className={'flex items-center justify-start gap-2'}>
                                    <Image src={Check} alt={'check'}/>
                                    <p className={'md:w-fit w-60'}>{feature}</p>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="masked-container">
                        <h2 className="will-fade">Sip-Worthy Perfection</h2>
                        <div id="masked-content">
                            <h3>Made with Craft, Poured with Passion</h3>
                            <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
                        </div>
                    </div>
                </div>

            </div>
        </ArtAnimation>
    )
}
export default Art

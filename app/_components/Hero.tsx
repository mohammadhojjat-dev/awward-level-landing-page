import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import leftLeaf from '@/public/images/hero-left-leaf.png';
import rightLeaf from '@/public/images/hero-right-leaf.png';
import HeroAnimation from "@/app/_components/animations/HeroAnimation";

const Hero = () => {
    return (
        <HeroAnimation>
            <section className={'noisy'} id={'hero'}>
                <h1 className={'title'}>MOJITO</h1>
                <Image src={leftLeaf} alt={'left-left'} className={'left-leaf'}
                       sizes={'auto'}
                />
                <Image src={rightLeaf} alt={'right-leaf'} className={'right-leaf'}
                />
                <div className={'body'}>
                    <div className={'content'}>
                        <div className={'space-y-5 hidden md:block'}>
                            <p>Cool. Crisp. Classic.</p>
                            <p className={'subtitle'}>Sip the Spirit <br/> of Summer</p>
                        </div>

                    </div>
                    <div className={'view-cocktails'}>
                        <p className={'subtitle'}>
                            Every cocktail on our menu is a blend of premium ingredients, creative flair, and
                            timeless
                            recipes — designed to delight your senses.
                        </p>
                        <Link href={'#cocktails'}>
                            View CockTails
                        </Link>

                    </div>
                </div>


            </section>
            <div className={'video absolute inset-0'}>
                <video
                    src="/videos/output.mp4"
                    muted
                    playsInline
                    preload="auto"
                />
            </div>
        </HeroAnimation>
    )
}
export default Hero

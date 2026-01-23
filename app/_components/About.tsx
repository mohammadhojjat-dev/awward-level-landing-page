import React from 'react'
import Image from "next/image";
import aboutImage1 from '@/public/images/abt1.png'
import aboutImage2 from '@/public/images/abt2.png'
import aboutImage3 from '@/public/images/abt3.png'
import aboutImage4 from '@/public/images/abt4.png'
import aboutImage5 from '@/public/images/abt5.png'
import AboutAnimation from "@/app/_components/animations/AboutAnimation";

const About = () => {
    return (
        <AboutAnimation>
            <div id={'about'}>
                <div className={'mb-16 md:px-0 px-5'}>
                    <div className={'content'}>

                        <div className={'md:col-span-8'}>
                            <p className={'badge'}>

                                Best CockTails
                            </p>
                            <h2>
                                Where every details matters
                                <span className={'text-white'}>
                                -
                            </span>
                                from muddle to garnish
                            </h2>
                        </div>
                        <div className={'sub-content'}>
                            <p>
                                Every cocktail we serve is a reflection of our obsession with detail — from the first
                                muddle
                                to the final garnish. That care is what turns a simple drink into something truly
                                memorable.
                            </p>
                            <div>
                                <p className={'md:text-3xl text-xl font-bold'}>
                                    <span>4.5</span>/5
                                </p>
                                <p className={'text-sm text-white-100'}>
                                    More than +12000 customers
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'top-grid'}>
                    <div className={'md:col-span-3'}>
                        <div className={'noisy'}>
                            <Image src={aboutImage1} alt={'grid-img-1'}/>
                        </div>


                    </div>

                    <div className={'md:col-span-6'}>
                        <div className={'noisy'}>
                            <Image src={aboutImage2} alt={'grid-img-2'}/>
                        </div>


                    </div>


                    <div className={'md:col-span-3'}>
                        <div className={'noisy'}>
                            <Image src={aboutImage5} alt={'grid-img-5'}/>
                        </div>


                    </div>

                </div>
                <div className={'bottom-grid'}>

                    <div className={'md:col-span-8'}>
                        <div className={'noisy'}>
                            <Image src={aboutImage3} alt={'grid-img-3'}/>
                        </div>


                    </div>


                    <div className={'md:col-span-4'}>
                        <div className={'noisy'}>
                            <Image src={aboutImage4} alt={'grid-img-4'}/>
                        </div>


                    </div>

                </div>


            </div>
        </AboutAnimation>

    )
}
export default About

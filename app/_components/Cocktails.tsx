import React from 'react'
import Image from "next/image";
import cockTailRightLeaf from '@/public/images/cocktail-right-leaf.png'
import cockTailLeftLeaf from '@/public/images/cocktail-left-leaf.png'
import {cocktailLists, mockTailLists} from "@/constants";
import CocktailsAnimation from "@/app/_components/animations/CocktailsAnimation";


const Cocktails = () => {
    return (
        <CocktailsAnimation>
            <section id={'cocktails'} className={'noisy'}>
                <Image src={cockTailRightLeaf} alt={'right-image'} id={'c-right-leaf'}/>
                <Image src={cockTailLeftLeaf} alt={'left-image'} id={'c-left-leaf'}/>
                <div className={'list'}>
                    <div className={'popular'}>

                        <h2>Most Popular Cocktails</h2>
                        <ul>
                            {cocktailLists.map(({name, detail, price, country}) => (
                                <li key={name}>
                                    <div className={'md:me-24'}>
                                        <h3>{name}</h3>
                                        <p>{detail} | {country}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={'loved'}>

                        <h2>Most Loved Mocktails</h2>
                        <ul>
                            {mockTailLists.map(({name, detail, price, country}) => (
                                <li key={name}>
                                    <div className={'md:me-24'}>
                                        <h3>{name}</h3>
                                        <p>{detail} | {country}</p>
                                    </div>
                                    <span>- {price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


            </section>
        </CocktailsAnimation>

    )
}
export default Cocktails

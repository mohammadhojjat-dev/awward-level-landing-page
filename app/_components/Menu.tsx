import React from 'react'
import Image from "next/image";
import sliderLeftLeaf from '@/public/images/slider-left-leaf.png'
import sliderRightLeaf from '@/public/images/slider-right-leaf.png'
import MenuNav from "@/app/_components/MenuNav";

const Menu = () => {

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <Image src={sliderLeftLeaf} alt="left-leaf" id="m-left-leaf"/>
            <Image src={sliderRightLeaf} alt="right-leaf" id="m-right-leaf"/>

            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>
            <MenuNav/>
        </section>
    )
}
export default Menu

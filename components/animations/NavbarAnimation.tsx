'use client'
import React from 'react'
import {useGSAP} from "@gsap/react";
import gsap from 'gsap'

const NavbarAnimation = ({children}: { children: React.ReactNode }) => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                start: 'top bottom',
                trigger: 'nav'
            }
        })

        navTween.fromTo('nav', {
            backgroundColor: 'transparent',
        }, {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })
    })
    return (
        children
    )
}
export default NavbarAnimation

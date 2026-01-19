'use client'
import React from 'react'
import {useGSAP} from "@gsap/react";
import {useMediaQuery} from "react-responsive";
import gsap from "gsap";

const ArtAnimation = ({children}: { children: React.ReactNode }) => {
    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top';

        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start,
                end: 'bottom center',
                scrub: 1.5,
                pin: true
            }
        })

        maskTimeline
            .to('.will-fade', {opacity: 0, stagger: 0.2, ease: 'power1.inOut',})
            .to('.masked-img', {
                scale: 1.3,
                maskPosition: 'center',
                maskSize: '400%',
                duration: 1,
                ease: 'power1.inOut '
            })
            .to('#masked-content', {opacity: 1, duration: 1, ease: 'power1.inOut'})
    })
    return children

}
export default ArtAnimation

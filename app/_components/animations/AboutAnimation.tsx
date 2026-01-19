'use client'
import React, {useRef} from 'react'
import {useGSAP} from "@gsap/react";
import gsap from 'gsap'
import {SplitText} from "gsap/all";

gsap.registerPlugin(SplitText)

const AboutAnimation = ({children}: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    useGSAP(() => {
        const titleSplit = SplitText.create('#about', {
            type: 'words'
        })

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center'
            }
        })

        scrollTimeline
            .from(titleSplit.words, {
                opacity: 0,
                duration: 1,
                yPercent: 100,
                ease: 'expo.out',
                stagger: 0.02
            })
            .from('.top-grid div, .bottom-grid div', {
                opacity: 0,
                duration: 1,
                ease: 'power1.inOut',
                stagger: 0.04
            }, '-=0.5')


    })
    return (
        <div ref={containerRef}>{children}</div>
    )
}
export default AboutAnimation

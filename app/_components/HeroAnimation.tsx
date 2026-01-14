'use client'
import React, {useRef} from 'react'
import {useGSAP} from "@gsap/react";
import {gsap, SplitText} from "../../lib/gsap";

const HeroAnimation = ({children}: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    useGSAP(() => {
        const heroSplit = new SplitText('.title', {type: 'chars, words'})
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'})
        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: '100',
            ease: "expo.out",
            duration: 1.8,
            stagger: 0.05
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: '100',
            ease: "expo.out",
            duration: 1.8,
            stagger: 0.06,
            delay: 1
        })

        // 3. The Scroll Animation (Specifically for the leaves)
        gsap.timeline({
            scrollTrigger: {
                trigger: '#head',
                start: ' top top',
                end: 'bottom top',
                scrub: true
            }
        })
            .to('.right-leaf', {y: 200}, 0)
            .to('.left-leaf', {y: -200}, 0)

    }, {scope: containerRef})

    return (
        <div ref={containerRef}>{children}</div>
    )
}
export default HeroAnimation

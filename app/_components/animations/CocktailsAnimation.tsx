'use client'
import React, {useRef} from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const CocktailsAnimation = ({children}: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            const parallaxTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#cocktails',
                    start: 'top 30%',
                    end: 'bottom 80%',
                    scrub: true
                }
            });
            parallaxTimeline
                .from('#c-left-leaf', {x: -100, y: 100})
                .from('#c-right-leaf', {x: 100, y: 100})
        }
    )
    return (
        <div ref={containerRef}>{children}</div>
    )
}
export default CocktailsAnimation

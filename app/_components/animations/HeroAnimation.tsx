'use client'
import React, {useRef} from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";
import {useMediaQuery} from "react-responsive";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}

const HeroAnimation = ({children}: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const isMobile = useMediaQuery({maxWidth: 676})

    useGSAP(() => {
        const heroSplit = new SplitText('.title', {type: 'chars, words'})
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'})
        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            ease: "expo.out",
            duration: 1.8,
            stagger: 0.05
        })

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            ease: "expo.out",
            duration: 1.8,
            stagger: 0.06,
            delay: 1
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
            .to('.right-leaf', {y: 200}, 0)
            .to('.left-leaf', {y: -200}, 0)

        const videoElement = containerRef.current?.querySelector('video') as HTMLVideoElement;

        if (videoElement) {
            const startValue = isMobile ? "top 50%" : "center 60%";
            const endValue = isMobile ? "120% top" : "bottom top";

            const tlVideo = gsap.timeline({
                scrollTrigger: {
                    trigger: 'video',
                    start: startValue,
                    end: endValue,
                    scrub: true,
                    pin: true
                }
            });

            const initVideoAnim = () => {
                tlVideo.to(videoElement, {
                    currentTime: videoElement.duration,
                    ease: "none"
                });
            };

            if (videoElement.readyState >= 1) {
                initVideoAnim();
            } else {
                videoElement.onloadedmetadata = initVideoAnim;
            }
        }

    }, {scope: containerRef, dependencies: [isMobile]})

    return (
        <div ref={containerRef}>{children}</div>
    )
}

export default HeroAnimation;
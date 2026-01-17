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
        // --- TEXT AND LEAVES ANIMATION (STAYS THE SAME) ---
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

        // --- VIDEO ANIMATION FIX ---
        const videoElement = containerRef.current?.querySelector('video') as HTMLVideoElement;

        if (videoElement) {
            const startValue = isMobile ? "top 50%" : "center 60%";
            const endValue = isMobile ? "120% top" : "bottom top";

            // 1. Create the timeline
            const tlVideo = gsap.timeline({
                scrollTrigger: {
                    trigger: 'video', // Target the wrapper div
                    start: startValue,
                    end: endValue,
                    scrub: true,
                    pin: true
                }
            });

            // 2. Define the animation function
            const initVideoAnim = () => {
                tlVideo.to(videoElement, {
                    currentTime: videoElement.duration,
                    ease: "none" // Video scrubbing should usually be linear
                });
            };

            // 3. THE FIX: Check if video is already ready
            if (videoElement.readyState >= 2) {
                // If metadata is already loaded (common on reload)
                initVideoAnim();
            } else {
                // If it's still loading (common on first visit)
                videoElement.onloadedmetadata = initVideoAnim;
            }
        }

    }, {scope: containerRef, dependencies: [isMobile]})

    return (
        <div ref={containerRef}>{children}</div>
    )
}

export default HeroAnimation;
'use client'
import React from 'react'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/all";

gsap.registerPlugin(SplitText)

const ContactAnimation = ({children}: { children: React.ReactNode }) => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', {
            type: 'words'
        })

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: 'power1.inOut'
        })

        timeline
            .from(titleSplit.words, {opacity: 0, yPercent: 100, stagger: 0.02})
            .from('#contact h3, #contact p', {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .to('#f-right-leaf', {
                y: -50,
                duration: 1,
                ease: "power1.inOut"
            })
            .to('#f-left-leaf', {
                y: -50,
                duration: 1,
                ease: "power1.inOut"
            }, '<')
    })
    return (
        children
    )
}
export default ContactAnimation

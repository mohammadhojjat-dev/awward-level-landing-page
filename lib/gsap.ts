'use client'
import gsap from "gsap";
import {ScrollTrigger, SplitText} from "gsap/all";

if (typeof window !== undefined) {
    gsap.registerPlugin(ScrollTrigger, SplitText)
}

export * from 'gsap';
export {ScrollTrigger, SplitText};
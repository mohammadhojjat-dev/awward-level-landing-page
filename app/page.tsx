import Hero from "@/app/_components/Hero";
import Cocktails from "@/app/_components/Cocktails";
import About from "@/app/_components/About";
import Art from "@/app/_components/Art";
import {Fragment} from "react";
import Menu from "@/app/_components/Menu";
import Contact from "@/app/_components/Contact";


export default function Home() {
    return (
        <Fragment>
            <Hero/>
            <Cocktails/>
            <About/>
            <Art/>
            <Menu/>
            <Contact/>
        </Fragment>
    );
}

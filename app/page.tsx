import Hero from "@/app/_components/Hero";
import Cocktails from "@/app/_components/Cocktails";
import About from "@/app/_components/About";
import Art from "@/app/_components/Art";
import {Fragment} from "react";


export default function Home() {
    return (
        <Fragment>
            <Hero/>
            <Cocktails/>
            <About/>
            <Art/>
        </Fragment>
    );
}

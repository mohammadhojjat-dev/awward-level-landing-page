import React from 'react'
import Link from "next/dist/client/link";
import {navLinks} from "@/constants";
import Image from 'next/image';
import NavbarAnimation from "@/components/animations/NavbarAnimation";

const Navbar = () => {
    return (
        <NavbarAnimation>
            <nav>
                <div>
                    <Link href="#home" className={'flex items-center gap-2'}>
                        <Image src={'/images/logo.png'} alt="logo" width={22} height={22}/>
                        <p>Velvet Pour</p>
                    </Link>
                    <ul>

                        {
                            navLinks.map((link) => (
                                <li key={link.id}>
                                    <Link href={`#${link.id}`}>{link.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </nav>
        </NavbarAnimation>

    )
}
export default Navbar

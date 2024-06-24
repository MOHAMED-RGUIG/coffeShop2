"use client"
import Link from 'next/link';
import styles from "./logo.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import {Montserrat} from "next/font/google";
import Image from 'next/image';
import hero from '/public/images/hero1.jpg'
import hero1 from '/public/images/hero2.png'


const logoFont = Montserrat({subsets:['latin'],weight:['600']})

export default function Logo(){
    const {mode,toggle} = useContext(ThemeContext)
return (
<Link href='/' className={`${styles.Logo} ${logoFont.className}`}>
<Image className={styles.img} src={hero} alt="MedCoding"/>

</Link>
)
}
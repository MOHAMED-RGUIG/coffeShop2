import React from "react";
import styles from "./page.module.css"
import Image from "next/image";
import Link from "next/link";

async function getData(id){
    const res = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`)
    if(!res.ok){
    throw new Error('Failed to fetch data')   
    }
        return res.json()
    }
export async function generateMetadata({params}){
    const blo = await getData(params.id)
    return {
        title:blo.name,
        description:blo.description
    }
}
export default async function Blo({params}){
    const blo = await getData(params.id)
   
    return (
            <div className={styles.container}>
                            <header className={styles.header}>    
                              <div className={styles.info}>
                              <h1 className={styles.title}>{blo.title}</h1>
                              <p className={styles.desc}>{blo.description}</p>
                              </div>
                                <Image className={styles.postImage}
                                    src = {blo.image}
                                      alt={blo.title}
                                      width={250}
                                          height={150}/>

                                 <span className={styles.author}>{blo.category}</span>
                            </header>
                        <div className={styles.content}>
              <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus itaque rerum dolorem cupiditate natus, tenetur magnam expedita esse dolo
              ribus optio dolores? Eveniet,iure perferendis dolor nihil quo 
              necessitatibus tenetur.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus itaque rerum dolorem cupiditate natus, tenetur magnam expedita esse dolo
              ribus optio dolores? Eveniet,iure perferendis dolor nihil quo 
              necessitatibus tenetur.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus itaque rerum dolorem cupiditate natus, tenetur magnam expedita esse dolo
              ribus optio dolores? Eveniet,iure perferendis dolor nihil quo 
              necessitatibus tenetur.</p>
                </div>
            </div>
            )
    }



import styles from "./footer.module.css"
import { socia_media } from "./data";
import Image from 'next/image'

export default function Footer(){
        return (
                <div className={styles.container}>
                    <div>© 2024 MedCoding All right reserved.</div>

                    <div className={styles.social}>
                    {socia_media.map(media =>
                      <a key={media.id} href={media.link} target="_blank" rel="noopener noreferrer">
                    <Image
                    key={media.id}
                    src={`/images/${media.name}.png`}
                    width={20}
                    height={20}
                    className={styles.icon}
                    alt={`MedCoding ${media.name} link`}
                    /></a>)
                    
                    }

                    </div>

                </div>

        )

}
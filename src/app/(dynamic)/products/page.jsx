import styles from './page.module.css';
import Image from "next/image";
import Link from "next/link";

async function getData(){
const res = await fetch(`https://mohamed-rguig.github.io/product_api/db.json`)
if(!res.ok){
    throw new Error('Failed to fetch data')    
}return res.json()
}

export const metaData = {
    title : "MedCoding",
    description : "This is a short description of my professional website"
}



export default async function Products({ limit }){
    const fetchProducts = async () => {
    const products = await getData()
    return products.slice(0, limit); // Limit products based on 'limit' prop
};

return (
    <div className={styles.container}>
<div>     <h1 ClassName={styles.titre}>These are our coffee products</h1>
</div>
<div className={styles.mainContainer}>


    { fetchProducts().then (products => 
        products.map(product =>(
        <Link href ={`/`}
        className ={styles.post}
        key = {product.id}>
        <div className={styles.imageContainer}>
            <Image 
            className={styles.image}
            src={product.image}
            fill={true}
            alt='post image'/> 
            </div>
            <div className={styles.content}>
          <h1 className={styles.title}>{product.title}</h1>
           <p className={styles.text}>{product.description}</p>
           </div>
           </Link> )))}</div></div>)}


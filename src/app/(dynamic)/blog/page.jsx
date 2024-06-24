import styles from './page.module.css';
import Image from "next/image";
import Link from "next/link";

// Fonction pour récupérer les données (simulée ici)
async function getData() {
  const res = await fetch(`https://api.sampleapis.com/coffee/hot`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export const metaData = {
  title: "MedCoding",
  description: "This is a short description of my professional website"
};

// Fonction de composant Blog
export default function Blog({ limit }) {
  // Récupérer les données du blog au rendu initial (sans useEffect ni useState)
  const fetchBlog = async () => {
    try {
      const data = await getData();
      return data.slice(0, limit);
    } catch (error) {
      console.error('Error fetching blog data:', error);
      return []; // Retourner un tableau vide en cas d'erreur
    }
  };

  // Appeler fetchBlog une fois que le composant est monté
  const blogPostsPromise = fetchBlog();

  return (
    <div className={`${styles.container}`}>
      <div>
        <h1 className={styles.titre}>This is our blog</h1>
      </div>
      <div className={`row col-md-12 col-12 mx-auto ${styles.mainContainer}`}>
        {/* Utilisation de .map directement dans le JSX pour mapper les articles */}
        {blogPostsPromise.then(blogPosts =>
          blogPosts.map(product => (
            <div className={`col-md-12 col-12 mt-4 mb-4 ${styles.post}`} key={product.id}>
              <Link href={`/blog/${product.id}`} className={styles.link} passHref>
               
                  <div className={styles.imageContainer}>
                    <Image
                      className={`col-md-12 col-12 mb-4 mx-auto ${styles.image}`}
                      src={product.image}
                      width={400}
                      height={200}
                      alt="post image"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.content}>
                    <h2 className={styles.title}>{product.title}</h2>
                    <p className={styles.text}>{product.description}</p>
                  </div>
              
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/banner';
import Card from '../components/card';
import styles from '../styles/Home.module.css';

export default function Home() {
  const handleOnBtnClick = () => {
    console.log('Button clicked');
  };

  const coffeStores = [1,2,3,4,5,6,7,8,9,10]

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name='description' content='Coffe' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText='View stores nearby'
          handleOnClick={handleOnBtnClick}
        />
        <div className={styles.heroImage}>
          <Image
            src='/static/hero-image.png'
            alt='Coffee'
            width={700}
            height={400}
          />
        </div>
        <div className={styles.sectionWrapper}>
          <h2 className={styles.heading2}>Stores near me</h2>
          <div className={styles.cardLayout}>
            {coffeStores.map((store) => {
              return (

                <Card
                  key={store}
                  name='Coffee Shop'
                  imgUrl='/static/hero-image.png'
                  href='coffee-store/darkhorse-coffeee'
                  className={styles.card}
                />
              )
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

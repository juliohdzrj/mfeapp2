
import Image from 'next/image'
import styles from '../styles/Luigi.module.css'

const Luigi = () => {
  return (
    <main className={styles.main}>
      <Image 
        src="https://upload.wikimedia.org/wikipedia/en/7/73/Luigi_NSMBUDX.png" 
        alt="Luigi" 
        width={240}
        height={413}
      />
      <h1 className={styles.title}>
        Microfrontend APP2.
      </h1>
      <span>I'm hosted at <a target="_blank" href="https://mfeapp2.vercel.app">https://mfeapp2.vercel.app</a></span>
    </main>
  )
}

export default Luigi

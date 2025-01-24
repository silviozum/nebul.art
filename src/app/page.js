import Image from "next/image";
import styles from './home.module.css';

const logoPhrase = 'https://ucarecdn.com/af6de384-ec3d-4b34-a76d-1e8206982f86/NEBULAART_WHITE.png'
const logoTYpe = 'https://ucarecdn.com/50aafc1b-fc66-4d5d-a701-a91cab3765e1/ICON_WHITE.png'
export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main>

        <div className={styles.containerVideo}>
          <video
            src="/videos/gummy.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.video}
          />
        </div>
        <div className={styles.homeFeatured}>
          <h1>NEBUL.ART</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and  typesetting industry
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
            since the 1500s, when an unknown printer  took a galley of type and scrambled it took a galley of type and scrambled it to 
            make a type specimen book.</p>
        </div>

        <div className={styles.navgateTags}>
            <div>#ART</div>
            <div>#STREET</div>
            <div>#VELLASQUEZ</div>
            <div>#DILEMA</div>
            <div>#TRETA</div>
        </div>
        </main>
    </div>
  )
}

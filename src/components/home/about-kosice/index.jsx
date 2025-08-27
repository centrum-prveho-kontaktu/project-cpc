import styles from "./about-kosice.module.css";
import {useTranslation} from "react-i18next";
import { useEffect, useRef } from "react";

export default function AboutKosice() {
    const {t} = useTranslation("home");
    const bgLayerRef = useRef(null);

    useEffect(() => {
        // Перевірка, чи це iOS
        const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent);
        const bgElement = bgLayerRef.current;
    
        if (isIos && bgElement) {
          // Якщо це iOS, додаємо клас і обробляємо скрол
          bgElement.classList.add(styles['ios-parallax']);
    
          const handleScroll = () => {
            // Визначаємо позицію елемента відносно вікна
            const rect = bgElement.getBoundingClientRect();
            const yOffset = window.pageYOffset;
            
            // Розраховуємо нову позицію фону для імітації паралакса
            // 50% - це початкова позиція, yOffset * 0.5 - це швидкість скролу
            bgElement.style.backgroundPosition = `50% ${50 + yOffset * 0.5}px`;
          };
    
          window.addEventListener('scroll', handleScroll);
    
          // Очищення обробника події при виході з компонента
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }
    }, []);

    return (
        <article>
            <div ref={bgLayerRef} className={styles.bgLayer}>
                <div className={styles.overlay}/>
                <div className={styles.content}>
                    <h2>
                        {t("aboutKosice.title")}{/*KOŠICE*/}
                    </h2>
                    <p>
                        {t("aboutKosice.text")}
                        {/*Košice sú otvoreným a priateľským mestom, ktoré srdečne víta cudzincov prichádzajúcich za
                        prácou,
                        štúdiom či podnikaním. Ponúkajú pestré možnosti profesionálneho uplatnenia, kvalitné
                        vzdelávacie
                        inštitúcie a priaznivé podnikateľské prostredie. S bohatou kultúrou, živým spoločenským
                        životom
                        a
                        multikultúrnou atmosférou sa Košice stávajú miestom, kde sa ľudia z rôznych krajín cítia ako
                        doma.
                        Košičania sú známi svojou pohostinnosťou a ochotou pomôcť cudzincom pri integrácii do
                        miestnej
                        komunity.*/}
                    </p>
                </div>
            </div>
        </article>
    );
}



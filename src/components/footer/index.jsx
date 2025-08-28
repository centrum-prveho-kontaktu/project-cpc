import { FaFacebookF, FaTelegramPlane, FaPhoneAlt } from "react-icons/fa";
import styles from "./footer.module.css";
import {useLocation} from "react-router-dom";
import WorkHours from "./work-hours";
import SecondOfficeBlock from "./second-office-block";
import FirstOfficeBlock from "./first-office-block";

export default function Footer() {
    const year = new Date().getFullYear();
    const location = useLocation();

  return (
    <footer className={styles.container}>
      {/* Внутрішній блок для центрування і обмеження ширини */}
      <div className={styles.content}>
        
        {/* верхній блок */}
        <div className={styles.topGrid}>
          {/* ліва колонка */}
          <div className={styles.block}>
            <h3 className={styles.title}>
              {t("leftSide.name")}
              {/*KONTAKTNÉ SPOLOČENSKO-INFORMAČNÉ CENTRUM*/}
            </h3>
            <address className={styles.address}>
              Hlavná 68, Košice, B 214, 2. posch.
              <br />
              040 01, Staré Mesto
            </address>
            <p className={styles.line}>
              {t("phone")}{/*Phone*/}:{" "}
              <a href="tel:+421908365995" className={styles.link}>
                +421 908 365 995
              </a>
            </p>
            <p className={styles.line}>
              Email:{" "}
              <a href="mailto:centrumH68@kosice.sk" className={styles.link}>
                centrumH68@kosice.sk
              </a>
            </p>
            <div className={styles.icons}>
              <a className={styles.iconBtn} href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a className={styles.iconBtn} href="#" aria-label="Telegram">
                <FaTelegramPlane />
              </a>
              <a className={styles.iconBtn} href="tel:+421908365995" aria-label="Phone">
                <FaPhoneAlt />
              </a>
            </div>
          </div>

          {/* права колонка */}
          <div className={styles.block}>
            <h3 className={styles.title}>{t("openingHours")}{/*OTVÁRACIE HODINY*/}</h3>
            <ul className={styles.hours}>
              <li><span>{t("week.monday")}{/*Pondelok*/}</span><span>8:00 – 15:00 {t("common:hoursShort")}</span></li>
              <li><span>{t("week.tuesday")}{/*Utorok*/}</span><span>8:00 – 15:00 {t("common:hoursShort")}</span></li>
              <li><span>{t("week.wednesday")}{/*Streda*/}</span><span>8:00 – 16:00 {t("common:hoursShort")}</span></li>
              <li><span>{t("week.thursday")}{/*Štvrtok*/}</span><span>8:00 – 15:00 {t("common:hoursShort")}</span></li>
              <li><span>{t("week.friday")}{/*Piatok*/}</span><span>8:00 – 14:00 {t("common:hoursShort")}</span></li>
            </ul>
            <p className={styles.note}>{t("lunchBreak")}{/*Obedňajšia prestávka*/}: 12:00 – 12:30 h.</p>
          </div>
        </div>

        <hr className={styles.divider} />

                {/* нижній блок */}
                {location.pathname !== "/" && (
                    <>
                        <hr className={styles.divider}/>
                        <SecondOfficeBlock/>
                    </>
                )}

                {/* копірайт */}
                <div className={styles.copyRow}>
                    <span>Text © {year} Košice</span>
                </div>

            </div>
        </footer>
    )
        ;
}
import React from "react";

//SlideShow
import SlideShow from "../../components/SlideShow/SlideShow";
import pic1 from "../../assets/SlideShowHome/start.jpg";
import pic2 from "../../assets/SlideShowHome/process.jpg";
import pic3 from "../../assets/SlideShowHome/finish.jpg";
import pic4 from "../../assets/SlideShowHome/drive.jpg";
import bigLogo from "../../assets/MainPic/remis_logo_big.png";

//News
import picUser from "../../assets/Home/Page.jpg";
import meeting from "../../assets/Home/VozniPark.jpg";
import vins from "../../assets/Home/Vins.jpg";
import citroen from "../../assets/Home/Citroen.jpg";

//Cities//
import banovici from "../../assets/Cities/banovici.jpg";
import boskrupa from "../../assets/Cities/boskrupa.jpg";
import konjic from "../../assets/Cities/konjic.jpg";
import maglaj from "../../assets/Cities/maglaj.jpg";
import sarajevo from "../../assets/Cities/sarajevo.jpg";
import srebrenik from "../../assets/Cities/srebrenik.jpg";
import tuzla from "../../assets/Cities/tuzla.jpg";
import visoko from "../../assets/Cities/visoko.jpg";
import vitez from "../../assets/Cities/vitez.jpg";
import zenica from "../../assets/Cities/zenica.jpg";
import zivinice from "../../assets/Cities/zivinice.jpg";

import NewsBox from "../../components/News/News";
import MailForm from "../../containers/MailForm/MailForm";
import CitiesCard from "../../components/UI/CitiesCard/CitiesCard";

import classes from "./Home.module.css";
import { withTranslation } from "react-i18next";
import ScrollAnimation from "react-animate-on-scroll";

const Home = (props) => {
  return (
    <div className={classes.Wrapper}>
      <SlideShow
        title1={props.t("Slideshow.pic1")}
        pic1={pic1}
        title2={props.t("Slideshow.pic2")}
        pic2={pic2}
        title3={props.t("Slideshow.pic3")}
        pic3={pic3}
        title4={props.t("Slideshow.pic4")}
        pic4={pic4}
      />

      {/* Intro */}

      <section className={classes.Intro}>
        <article className={classes.Desc}>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <h1>{props.t("Home.WelcomeHead")}</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <p className={classes.Text}>{props.t("Home.CompanyDescription")}</p>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            offset={-50}
          >
            <a href="/mail">{props.t("Home.Make an appointment")}</a>
          </ScrollAnimation>
        </article>
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <article>
            <img src={picUser} alt="Page" />
          </article>
        </ScrollAnimation>
      </section>

      {/* Stock section */}

      <section className={classes.Stock}>
        <div>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            duration={3}
          >
            <NewsBox
              title={props.t("Home.NewsBox.title1")}
              content={props.t("Home.NewsBox.content1")}
              img={meeting}
            />
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            duration={2}
          >
            <NewsBox
              title={props.t("Home.NewsBox.title2")}
              content={props.t("Home.NewsBox.content2")}
              img={vins}
            />
          </ScrollAnimation>
        </div>
        <div>
          <ScrollAnimation
            animateIn="fadeInLeft"
            animateOnce={true}
            duration={1}
          >
            <NewsBox
              title={props.t("Home.NewsBox.title3")}
              content={props.t("Home.NewsBox.content3")}
              img={citroen}
            />
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Form */}

      <section className={classes.ContactForm}>
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1}>
          <article className={classes.DescForm}>
            <a href="/mail" target="_blank" rel="noopener noreferrer">
              <h1>{props.t("Home.Contact Us")}</h1>
            </a>
            <a href="/mail" target="_blank" rel="noopener noreferrer">
              <img src={bigLogo} alt="Remis" /> <span>d.o.o Visoko</span>
            </a>
            <p className={classes.Text}>{props.t("Home.ContactInfo")}</p>
            <figure className={classes.Informations}>
              <p className={classes.Info}>
                <i className="fas fa-tty"></i>
                032/730-300
              </p>
              <p className={classes.Info}>
                <i className="far fa-envelope"></i>
                info@remis.ba
              </p>
              <p className={classes.Info}>
                <i className="fas fa-thumbtack"></i>
                Braće Zečevića 3a <br />
                71300 Visoko
              </p>
            </figure>
          </article>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceInRight"
          animateOnce={true}
          duration={1}
        >
          <article className={classes.ConForMail}>
            <a
              className={classes.MobileOnly}
              href="/mail"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>{props.t("Home.Contact Us")}</h4>
            </a>
            <MailForm />
          </article>
        </ScrollAnimation>
      </section>
      <article className={classes.Cities}>
        <CitiesCard img={banovici} city="Banovići" />
        <CitiesCard img={boskrupa} city="Bosanska Krupa" />
        <CitiesCard img={maglaj} city="Maglaj" />
        <CitiesCard img={konjic} city="Konjic" />
        <CitiesCard img={sarajevo} city="Sarajevo" />
        <CitiesCard img={srebrenik} city="Srebrenik" />
        <CitiesCard img={tuzla} city="Tuzla" />
        <CitiesCard img={visoko} city="Visoko" />
        <CitiesCard img={vitez} city="Vitez" />
        <CitiesCard img={zenica} city="Zenica" />
        <CitiesCard img={zivinice} city="Živinice" />
      </article>
    </div>
  );
};

export default withTranslation()(Home);

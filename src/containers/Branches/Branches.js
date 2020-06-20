import React, { Fragment } from "react";
import Card from "../../components/UI/Card/Card";
import Logo from "../../components/Logo/Logo";

import picBanovici from "../../assets/Buildings/picBanovici.jpg";
import picBosKrupa from "../../assets/Buildings/picBosKrupa.jpg";
import picBosKrupa1 from "../../assets/Buildings/picBosKrupa1.jpg";
import picKonjic from "../../assets/Buildings/picKonjic.jpg";
import picKonjic1 from "../../assets/Buildings/picKonjic1.jpg";
import picKakanj from "../../assets/Buildings/picKakanj.jpg";
import picSarajevo from "../../assets/Buildings/picSarajevo.jpg";
import picSrebrenik from "../../assets/Buildings/picSrebrenik.jpg";
import picMaglaj from "../../assets/Buildings/picMaglaj.jpg";
import picTuzla from "../../assets/Buildings/picTuzla.jpg";
import picVisoko from "../../assets/Buildings/picVisoko.jpg";
import picVitez from "../../assets/Buildings/picVitez.jpg";
import picZivinice from "../../assets/Buildings/picZivinice.jpg";
import picZenica from "../../assets/Buildings/picZenica.jpg";

import classes from "./Branches.module.css";
import { withTranslation } from "react-i18next";

const Branches = (props) => {
  const buildings = [
    {
      title: "TP Banovići",
      picture: picBanovici,
      person: "Rijad Helja",
      phone: "061 504-254",
      address:
        "https://www.google.com/maps/dir//TP+REMIS+Banovi%C4%87i,+Armije+BiH+3,+Banovi%C4%87i/@44.4100696,18.5467869,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x475eb51600a18c2d:0xb4899de8b917e8ad!2m2!1d18.5377007!2d44.4059455",
      location: "Ulica Branilaca br.4 Banovići",
    },
    {
      title: "TP Bosanska Krupa",
      picture: picBosKrupa,
      person: "Mustafa Kadić",
      phone: "062 019-232",
      address:
        "https://www.google.com/maps/search/Proleterska+broj+33++bosanska+krupa/@44.8830438,16.1524325,1494m/data=!3m1!1e3",
      location: "Ulica Proleterska br.33 Bosanska Krupa",
    },
    {
      title: "TP Bos Krupa PJ2",
      picture: picBosKrupa1,
      person: "Edin Mehić",
      phone: "061 921-900",
      address:
        "https://www.google.com/maps/search/ljusina+bb+bosanska+krupa/@44.8828135,16.1526418,2668m/data=!3m2!1e3!4b1",
      location: "Ulica Ljusina bb Bosanska Krupa",
    },
    {
      title: "TP Kakanj",
      picture: picKakanj,
      person: "",
      phone: "032 557-780",
      address:
        "https://www.google.com/maps/dir/43.9950357,18.1642456/transport+kakanj/@44.0603605,18.0716942,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x475f2734fbb7ab89:0xd25a661b7bfb0c8e!2m2!1d18.1054265!2d44.1244387",
      location: "Ulica 311. Lahke brigade, Kakanj",
    },
    {
      title: "TP Konjic",
      picture: picKonjic,
      person: "Nermina Padalović",
      phone: "062 652-366",
      address:
        "https://www.google.com/maps/search/ovcari+bb+konjic/@43.6607302,17.9596246,1778m/data=!3m1!1e3",
      location: "Naselje Ovčari bb Konjic",
    },
    {
      title: "TP Konjic PJ2",
      picture: picKonjic1,
      person: "Jasmin Djulić",
      phone: "061 848-054",
      address:
        "https://www.google.com/maps/dir//REMIS+doo,+Kolonija,+Konjic/@43.6552616,17.9473667,2347m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x475f50d9b2780501:0xf48ea5e1a5f7c6bb!2m2!1d17.9553127!2d43.6555851",
      location: "Kolonija br.60 Konjic",
    },
    {
      title: "TP Maglaj",
      picture: picMaglaj,
      person: "Alma Mešić",
      phone: "061 745-039",
      address:
        "https://www.google.com/maps/place/3.+ulica,+Maglaj/@44.5491915,18.0947276,671m/data=!3m2!1e3!4b1!4m5!3m4!1s0x475e91bb7975948d:0x8e2585129283c12d!8m2!3d44.5491877!4d18.0969163",
      location: "III Ulica bb Maglaj",
    },
    {
      title: "TP Sarajevo",
      picture: picSarajevo,
      person: "Safet Škulj",
      phone: "061 462-674",
      address:
        "https://www.google.com/maps/dir//Remis,+D%C5%BEemala+Bijedi%C4%87a+139,+Sarajevo+71000/@43.849739,18.2914298,6679m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x4758c97b667f9a63:0x8f28600deb443254!2m2!1d18.3545226!2d43.849388",
      location: "Ul. Djemala Bjedića br.139 Sarajevo",
    },
    {
      title: "TP Srebrenik",
      picture: picSrebrenik,
      person: "Arnel Mujkić",
      phone: "062 915-323",
      address:
        "https://www.google.com/maps/place/Op%C4%87ina+Srebrenik/@44.7069475,18.4860688,669m/data=!3m2!1e3!4b1!4m5!3m4!1s0x475c1de1ee9d5a0d:0x68585998d7afc25a!8m2!3d44.7069437!4d18.4882575",
      location: "Ulica Bosanskih branilaca bb Srebrenik",
    },
    {
      title: "TP Tuzla",
      picture: picTuzla,
      person: "Alija Bajić",
      phone: "061 104-366",
      address:
        "https://www.google.com/maps/place/Remis/@44.534997,18.6477882,671m/data=!3m2!1e3!4b1!4m5!3m4!1s0x475ead0a372664c1:0x85d9cd4abf8b9408!8m2!3d44.5349932!4d18.6499769",
      location: "Ulica XVIII Hrvatske brigade br.2 Tuzla",
    },
    {
      title: "TP Visoko",
      picture: picVisoko,
      person: "Dženan Bećar",
      phone: "061 473-515",
      address:
        "https://www.google.com/maps/dir//44.0016111,18.1594444/@44.0020312,18.1588871,251m/data=!3m1!1e3",
      location: "Kakanjska bb Visoko",
    },
    {
      title: "TP Vitez",
      picture: picVitez,
      person: "Merfid Muslić",
      phone: "062 103-637",
      address:
        "https://www.google.com/maps/search/Ulica+Poslovni+Centar+96+Vitez/@44.1826645,17.6642175,25206m/data=!3m1!1e3",
      location: "Ulica Poslovni Centar br.96 Vitez",
    },
    {
      title: "TP Zenica",
      picture: picZenica,
      person: "Mihnet Turčinović",
      phone: "061 414-185",
      address:
        "https://www.google.com/maps/dir//REMIS+doo,+Vatrogasni+put,+Zenica+72000/@44.207948,17.901815,675m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x475ee24fe240892d:0x1ef8ab3a34dc83c4!2m2!1d17.9040037!2d44.2079442",
      location: "Ulica Vatrogasni put br.3 Zenica",
    },
    {
      title: "TP Živinice",
      picture: picZivinice,
      person: "Sabina Salikić",
      phone: "061 637-305",
      address:
        "https://www.google.com/maps/place/TP+REMIS+%C5%BDivinice/@44.4573735,18.6535047,189m/data=!3m1!1e3!4m8!1m2!2m1!1sremis+zivinice!3m4!1s0x0:0xad3dd35494f966b8!8m2!3d44.4568408!4d18.6535406",
      location: "Naselje Sjever I Živinice",
    },
  ];

  const cards = buildings.map((building) => (
    <Card
      key={building.title}
      title={building.title}
      picture={building.picture}
      person={building.person}
      phone={building.phone}
      address={building.address}
      location={building.location}
    />
  ));

  return (
    <Fragment>
      <article className={classes.Intro}>
        <Logo />
        <strong>{props.t("Contacts.banner")}</strong>
        <section>
          {props.t("Contacts.tel")}: 032/730-300
          <br />
          Fax: 032/730-304
          <br />
          E-mail: info@remis.ba
          <br />
          <a className={classes.Mail} href="/mail">
            {props.t("Contacts.mess")}
          </a>
        </section>
      </article>
      <article className={classes.Content}>{cards}</article>
    </Fragment>
  );
};

export default withTranslation()(Branches);

import React, { Fragment } from 'react';
import CardsContainer from '../../components/CardsContainer';
import SliderBanner from '../../components/SliderBanner';
import HomeBanner from '../../components/HomeBanner';

import Borderlands from '../../assests/banner/borderlands-3.jpg';
import AC from '../../assests/banner/ac-origins.jpg';
import Detroit from '../../assests/banner/detroit.jpg';
import FIFA from '../../assests/banner/fifa-20.jpg';
import MK from '../../assests/banner/mk-11.jpg';

import Scorpion from '../../assests/homeBanner/scorpion.png';
import Epic from '../../assests/homeBanner/epic.png';

const bannerElems = [
  {
      img: Borderlands,
      title: "Borderlands 3",
      msg: "Save 50% on all editions, 20% on Season Pass - deals end March 3 at 11am ET."
  },
  {
      img: AC,
      title: "Assasins Creed Origins",
      msg: "AC message."
  },
  {
      img: FIFA,
      title: "FIFA 20",
      msg: "FIFA message."
  },
  {
      img: Detroit,
      title: "Detroit: Become a human",
      msg: "Detroit message."
  },
  {
      img: MK,
      title: "Mortal Kombat 11",
      msg: "MK 11 message"
  },
]

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nulla ante. Morbi tincidunt risus a lorem
                    sollicitudin condimentum. Nullam eu lorem elit. Phasellus commodo, est ut tempus sodales, erat nunc condimentum
                    nisi, at iaculis ligula quam sed elit. Sed posuere mollis nisi ut faucibus. Etiam sed ipsum pretium`;

const Home = () => (
    <Fragment>
        <SliderBanner elems={ bannerElems }/>
        <CardsContainer caption="Ultimos publicados"/>
        <HomeBanner
          caption="banner-test"
          background="#222"
          buttonText ="button text"
          title="Hey i'm title"
          text={loremIpsum}
          image={Scorpion} />
        <CardsContainer caption="Top gratis"/>
        <HomeBanner
          caption="banner-test"
          background="#404E72"
          buttonText="button text"
          title="Hey i'm title"
          text={loremIpsum}
          image={Epic} />
        <CardsContainer caption="Tendencia"/>
    </Fragment>
);

export default Home;

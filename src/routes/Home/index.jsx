import React, { Fragment } from 'react';
import CardsContainer from '../../components/CardsContainer';
import SliderBanner from '../../components/SliderBanner';
import Borderlands from '../../assests/banner/borderlands-3.jpg';
import AC from '../../assests/banner/ac-origins.jpg';
import Detroit from '../../assests/banner/detroit.jpg';
import FIFA from '../../assests/banner/fifa-20.jpg';
import MK from '../../assests/banner/mk-11.jpg';


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

const Home = () => (
    <Fragment>
        <SliderBanner elems={ bannerElems }/>
        <CardsContainer caption="Ultimos publicados"/>
        <CardsContainer caption="Top gratis"/>
        <CardsContainer caption="Tendencia"/>
    </Fragment>
);

export default Home;

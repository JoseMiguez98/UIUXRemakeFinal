import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import CardsContainer from '../../components/CardsContainer';
import SliderBanner from '../../components/SliderBanner';
import HomeBanner from '../../components/HomeBanner';

//slider
import Borderlands from '../../assests/banner/borderlands-3.jpg';
import AC from '../../assests/banner/ac-origins.jpg';
import Detroit from '../../assests/banner/detroit.jpg';
import FIFA from '../../assests/banner/fifa-20.jpg';
import MK from '../../assests/banner/mk-11.jpg';

//banners
import Scorpion from '../../assests/homeBanner/scorpion.png';
import Epic from '../../assests/homeBanner/cod.png';

//containers
import We from '../../assests/covers/we.jpg';
import Proto from '../../assests/covers/proto.jpg';
import NFS from '../../assests/covers/nfs.jpg';
import MKC from '../../assests/covers/mk.jpg';
import Heavy from '../../assests/covers/heavy.jpg';
import GTA from '../../assests/covers/gta.jpg';
import FIFAC from '../../assests/covers/fifa.jpg';
import FarCry from '../../assests/covers/farcry.jpg';
import Dead from '../../assests/covers/dead.jpg';
import COD from '../../assests/covers/cod.jpg';
import Beyond from '../../assests/covers/beyond.jpg';
import Battlefield from '../../assests/covers/battlefield.jpg';
import ACC from '../../assests/covers/ac.jpg';

const bannerElems = [
  {
      img: Borderlands,
      title: 'Borderlands 3',
      msg: 'Borderlands 3 tendra un nuevo season pass!'
  },
  {
      img: AC,
      title: 'Ubisoft anuncia Assassins Creed Valhalla',
      msg: 'Ubisoft ha confirmado el lanzamiento de Assassins Creed Valhalla para Xbox One, Xbox Series X, PlayStation 4, PlayStation 5, Google Stadia y compatibles a finales de 2020.'
  },
  {
      img: FIFA,
      title: 'FIFA 20 llega a Google Stadia',
      msg: 'Google, gracias a una colaboración con Electronic Arts, ha conseguido traer a su plataforma de streaming de videojuegos cinco títulos, entre los que se encuentran "FIFA", "Madden NFL" y "Jedi Fallen Order".'
  },
  {
      img: Detroit,
      title: '50% de descuento en Detroit: Become a human',
      msg: 'No te pierdas esta oferta de fin de semana, Detroit: Become a human y otros exclusivos de Quantic dreams a solo el 50%'
  },
  {
      img: MK,
      title: `Mortal Kombat 11,
       ¿Nueva era?`,
      msg: 'Mortal Kombat 11 tardó, pero cada segundo de espera valió la pena, pues llegó con una fuerza brutal a las consolas de todo amante de los juegos de pelea. En la entrega de NetherRealm Studios tenemos un título que es en absoluto "oro molido" para todo aquel gamer que busque horas y horas de entretenimiento. Combos, sangre, huesos rotos y brutalidad es solo un poco de lo mucho que ofrece la más reciente entrega de una saga que se ha mantenido en el mercado por 27 años, algo que no es nada sencillo'
  },
];

const containerProps = [
  {
    name: 'Far Cry 5',
    dev: 'Ubisoft',
    price: '1500 ARS',
    cover: FarCry
  },
  {
    name: 'GTA V',
    dev: 'Rockstar games',
    price: '700 ARS',
    cover: GTA
  },
  {
    name: 'Fifa 20',
    dev: 'EA Games',
    price: '200 ARS',
    cover: FIFAC
  },
  {
    name: 'Dead Space',
    dev: 'EA Games',
    price: '3000 ARS',
    cover: Dead
  },
  {
    name: 'Need for speed',
    dev: 'EA Games',
    price: '100 ARS',
    cover: NFS
  },
  {
    name: 'Call of duty: Black Ops',
    dev: 'Activision',
    price: '1500 ARS',
    cover: COD
  },
  {
    name: 'Beyond two souls',
    dev: 'Quantic Dreams',
    price: '900 ARS',
    cover: Beyond
  },
  {
    name: 'Assasins creed',
    dev: 'Ubisoft',
    price: 'Gratis',
    cover: ACC
  },
  {
    name: 'We happy few',
    dev: 'Compulsion games',
    price: 'Gratis',
    cover: We
  },
  {
    name: 'Battlefield 4',
    dev: 'EA Games',
    price: 'Gratis',
    cover: Battlefield
  },
  {
    name: 'Prototype Supermutant',
    dev: 'Activision',
    price: 'Gratis',
    cover: Proto
  },
  {
    name: 'Heavy rain',
    dev: 'Quantic dreams',
    price: 'Gratis',
    cover: Heavy
  },
  {
    name: 'Mortal Kombat 11',
    dev: 'Warner bros',
    price: 'Gratis',
    cover: MKC
  }
];

const containersElems = [
  [containerProps[5], containerProps[1], containerProps[10], containerProps[0], containerProps[2], containerProps[3]],
  [containerProps[0], containerProps[3], containerProps[1], containerProps[4], containerProps[12], containerProps[11]],
  [containerProps[7], containerProps[8], containerProps[9], containerProps[10], containerProps[11], containerProps[12]],
  [containerProps[6], containerProps[2], containerProps[0], containerProps[1], containerProps[12], containerProps[9]],
  [containerProps[6], containerProps[3], containerProps[12], containerProps[0], containerProps[2], containerProps[8]],
];

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et nulla ante. Morbi tincidunt risus a lorem
                    sollicitudin condimentum. Nullam eu lorem elit. Phasellus commodo, est ut tempus sodales, erat nunc condimentum
                    nisi, at iaculis ligula quam sed elit. Sed posuere mollis nisi ut faucibus. Etiam sed ipsum pretium`;

const Home = ({ logged }) => (
  <Fragment>
    <SliderBanner elems={ bannerElems }/>
    <CardsContainer
      caption="Ultimos publicados"
      elems={ containersElems[0] }
    />
    <HomeBanner
      background="#222"
      buttonText="Pre-ordenalo ahora!"
      title="Horizon: Zero Dawn"
      text="Horizon: Zero Dawn es lo nuevo de Guerrilla Games y Sony, los creadores de la saga Killzone, para PlayStation 4 y PC, una aventura de acción ambientada en un mundo post-apocalíptico en el que las máquinas se alzan como especie dominante del planeta. Aloy, una joven marginada de una sociedad tribal, se enfrentará a ellas en un mundo de desarrollo abierto."
      image={ Scorpion } />
    <CardsContainer
      caption={ !logged ? 'Top gratis' : 'Tal vez pueda interesarte' }
      elems={ !logged ? containersElems[2] : containersElems[1] }
    />
    <HomeBanner
      background="#5e4b43"
      title="Call of Duty: War Zone"
      text="Disfruta del combate en primera persona clásico de Call of Duty® en una nueva y gigantesca arena de combate. Lánzate, ármate hasta los dientes, saquea recompensas y lucha por llegar a lo más alto. Te damos la bienvenida a Warzone."
      image={ Epic } />
    <CardsContainer
      caption={!logged ? 'Tendencias' : 'Tus juegos'}
      elems={ !logged ? containersElems[4] : containersElems[3]  }
    />
  </Fragment>
);

const mapStateToProps = ({ user }) => ({
  logged: user.logged
});

export default connect(mapStateToProps)(Home);

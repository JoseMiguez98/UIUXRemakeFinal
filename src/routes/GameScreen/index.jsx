import React, { Fragment } from 'react';
import PreviewSlider from '../../components/PreviewSlider';
import GameInfoBox from '../../components/GameInfoBox';
import Comments from '../../components/Comments';
import pic from '../../assests/game/pic.jpg';
import pic1 from '../../assests/game/pic1.jpg';
import pic2 from '../../assests/game/pic2.jpg';
import pic3 from '../../assests/game/pic3.jpg';
import pic4 from '../../assests/game/pic4.jpg';
import pic5 from '../../assests/game/pic5.jpg';
import pic6 from '../../assests/game/pic6.jpg';
import pic7 from '../../assests/game/pic7.jpg';
import pic8 from '../../assests/game/pic8.jpg';
import pic9 from '../../assests/game/pic9.jpg';
import PEGI18 from '../../assests/califications/PEGI.png';
import ESRB17 from '../../assests/califications/ESRB.png';
import Ranking from '../../components/Ranking';
import HighScores from '../../components/HighScores';

const InfoItem = ({subtitle, caption}) => (
    <div className="info-item-wrapper">
        <h4 className="info-item-wrapper__subtitle">{subtitle}</h4>
        <div className="info-item-wrapper__caption">{caption}</div>
    </div>
);

const GameScreen = () => (
    <div className="game-screen">
        <div className="game-screen__row">
            <PreviewSlider pictures={
                [
                    pic,pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9
                ]}/>
            <GameInfoBox/>
        </div>
        <div className="game-screen__row">
            <div className="game-screen__row__subtitle-wrapper">
                <h3 className="game-screen__row__subtitle-wrapper__subtitle">Más Info</h3>
            </div>
            <div className="game-screen__row__data">
                <div className="game-screen__row__data__col col-4">
                    <InfoItem subtitle="Desarroladora" caption="NetherRealm Studios"/>
                    <InfoItem subtitle="Genero" caption="Lucha"/>
                </div>
                <div className="game-screen__row__data__col col-4">
                    <InfoItem subtitle="Publicadora" caption="Warner Bros. Interactive Entertainment"/>
                    <InfoItem subtitle="Calificación/es" caption={
                        <Fragment>
                            <img alt="PEGI18" src={PEGI18}/>
                            <img alt="ESRB" src={ESRB17}/>
                        </Fragment>
                    }/>
                </div>
                <div className="game-screen__row__data__col col-offset-1 col-4">
                    <InfoItem subtitle="Fecha de lanzamiento" caption="17/03/2019"/>
                    <InfoItem subtitle="Plataformas" caption="PS4, XBOX One, PC, Stadia"/>
                </div>
            </div>
        </div>
        <div className="game-screen__row">
            <div className="game-screen__row__subtitle-wrapper">
                <h3 className="game-screen__row__subtitle-wrapper__subtitle">Requisitos del sistema</h3>
            </div>
            <div className="game-screen__row__data">
                <div className="game-screen__row__data__col col-6">
                    <h3>Mínimos</h3>
                    <InfoItem subtitle="OS" caption="Windows 10 64-bit / Windows 7 64-bit*"/>
                    <InfoItem subtitle="CPU" caption="Intel Core i7-6100 (or AMD equivalent)"/>
                    <InfoItem subtitle="Memory" caption="8 GB RAM"/>
                    <InfoItem subtitle="GPU" caption="Nvidia GT 1080ti 2GB (or AMD equivalent)"/>
                    <InfoItem subtitle="Storage" caption="50 GB"/>
                </div>
                <div className="game-screen__row__data__col col-6">
                    <h3>Recomendados</h3>
                    <InfoItem subtitle="OS" caption="Windows 10 64-bit / Windows 7 64-bit*"/>
                    <InfoItem subtitle="CPU" caption="Intel Core i9-7200 (or AMD equivalent)"/>
                    <InfoItem subtitle="Memory" caption="16 GB RAM"/>
                    <InfoItem subtitle="GPU" caption="Nvidia GT 2080ti 2GB (or AMD equivalent)"/>
                    <InfoItem subtitle="Storage" caption="50 GB"/>
                </div>
            </div>
        </div>
        <div className="game-screen__row">
            <div className="game-screen__row__data">
                <div className="game-screen__row__data__col col-6">
                    <Comments amount={100}/>
                    <Ranking/>
                </div>
                <div className="game-screen__row__data__col col-offset-1 col-5">
                    <HighScores amount={20}/>
                </div>
            </div>
        </div>
    </div>
);

export default GameScreen;

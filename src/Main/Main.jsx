import React from 'react';
import s from './Main.module.css'
import styleContainer from './../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.intro}>
                    <span>Hi there</span>
                    <h1>I am Robot-coder</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
};

export default Main;
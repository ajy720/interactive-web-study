import React, { PureComponent } from 'react';
import cn from 'classnames';
import styles from './flex.module.scss';


const Index = () =>{

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.item}>AAA</div>
                <div className={styles.item}>B</div>
                <div className={styles.item}>CCCCC</div>
                <div className={styles.item}>DDDD</div>
                <div className={styles.item}>ee</div>
            </div>
        </div>
    );
}

export default Index;
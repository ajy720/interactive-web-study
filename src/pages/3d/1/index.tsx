import React from 'react';
import cn from 'classnames'
import styles from './3d.module.scss';


const Index = () => {

    return (
        <div className="">
            <div className={cn(styles.world, styles.world1)}>
                <div className={styles.card}>
                    CARD
                </div>
                <div className={styles.card}>
                    CARD
                </div>
                <div className={styles.card}>
                    CARD
                </div>
            </div>
            <div className={cn(styles.world, styles.world2)}>
                <div className={styles.card}>
                    <div className={cn(styles["card-side"], styles.front)}>F</div>
                    <div className={cn(styles["card-side"], styles.back)}>B</div>
                </div>
                <div className={styles.card}>
                    <div className={cn(styles["card-side"], styles.front)}>F</div>
                    <div className={cn(styles["card-side"], styles.back)}>B</div>
                </div>
                <div className={styles.card}>
                    <div className={cn(styles["card-side"], styles.front)}>F</div>
                    <div className={cn(styles["card-side"], styles.back)}>B</div>
                </div>
            </div>

        </div>
    )
}

export default Index
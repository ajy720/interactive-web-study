import { useEffect } from 'react';
import styles from './styles.module.scss';

export default () => {

    useEffect(() => {
        let timeId;
        const btn = document.querySelector(`.${styles.btn}`)

        btn.addEventListener("click", () => {
            // clearInterval()에 setInterval 반환값을 넣으면 interval 취소
            clearInterval(timeId)
        })


        timeId = setInterval(() => {
            console.log("Sample");

        }, 300);
        return () => {

        }
    }, [])
    return (
        <div className={styles.SetTimeout}>
            <button className={styles.btn}>취소</button>
        </div>
    );
}
import { useEffect } from 'react';
import styles from './styles.module.scss';

export default () => {

    useEffect(() => {
        let timeId;
        let n = 0;
        const btn = document.querySelector(`.${styles.btn}`)

        btn.addEventListener("click", () => {
            // cancelAnimationFrame()에 requestAnimationFrame 반환값을 넣으면 반복 취소
            cancelAnimationFrame(timeId)
        })

        const sample = () => {
            n++;

            console.log(n);

            // 반복되는 함수 내에서 requestAnimationFrame이 실행되지 않게 끊는다면 반복 종료
            if (n >= 200) {
                return;
            }
            // requestAnimationFrame은 보통은 1초에 60회 작동하고
            // 가능하다면 디스플레이의 주사율에 맞춰 작동한다.
            timeId = requestAnimationFrame(sample)
        }

        sample();

        return () => {

        }
    }, [])
    return (
        <div className={styles.SetTimeout}>
            <button className={styles.btn}>취소</button>
        </div>
    );
}
import Image from 'next/image'
import { MouseEvent, useEffect } from 'react'

export default () => {

    useEffect(() => {
        // let ilbunis = document.querySelectorAll(".ilbuni")

        // ilbunis.forEach((e: HTMLElement) => {
        //     e.addEventListener("click", (ev) => {
        //         (ev.target as HTMLElement).remove()
        //     })
        // });

        // 이벤트 위임
        // 이벤트 리스너를 많이 붙이는 것은 성능 저하에 직접접인 영향을 미침
        // 따라서 리스너를 최소화하는 것이 중요. 그래서 이벤트 위임을 이용한다.
        let stage = document.querySelector(".stage")

        stage.addEventListener("click", (e) => {
            let target = (e.target as HTMLElement);

            if (target.classList.contains("ilbuni")) {
                stage.removeChild(target)
            }
        })
        return () => {

        }
    }, [])


    return (
        <div className="game">
            <div className="stage">
                <div className="ilbuni a">
                </div>
                <div className="ilbuni b">
                </div>
                <div className="ilbuni c">
                </div>
                <div className="ilbuni d">
                </div>
            </div>
        </div>
    )
}
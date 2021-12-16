import Image from 'next/image'
import { useEffect } from 'react'

export default () => {

    useEffect(() => {
        // let btns = document.querySelectorAll(".menu-btn");

        // btns.forEach((el) => {
        //     el.addEventListener("click", (e) => {
        //         console.log(e.currentTarget);
        //     })
        // })

        let menu = document.querySelector(".menu");

        menu.addEventListener("click", (e) => {
            let target = e.target as HTMLElement;

            while (!target.classList.contains('menu-btn')) {
                target = target.parentElement

                if (target.nodeName == "BODY") return
            }

            console.log(target.dataset.value);

        })

        return () => {
        }
    }, [])

    return (
        <div className="delegation">
            <div className="menu">
                <div className="menu-btn" data-value='1'>
                    <div className="image"></div>
                    <div className="text">일분이 1</div>
                </div>
                <div className="menu-btn" data-value='2'>
                    <div className="image"></div>
                    <div className="text">일분이 2</div>
                </div>
                <div className="menu-btn" data-value='3'>
                    <div className="image"></div>
                    <div className="text">일분이 3</div>
                </div>
            </div>
        </div>
    )
}
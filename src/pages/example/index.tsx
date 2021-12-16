import { useEffect, useState } from "react"
import cn from 'classnames'

export default () => {

    useEffect(() => {
        const stage = document.querySelector(".stage");

        let currentItem;

        stage.addEventListener("click", (event) => {
            let target = event.target as HTMLElement;

            while (1) {

                if (target.classList.contains("door")) {

                    if (currentItem) {
                        currentItem.classList.remove("open");
                    }

                    currentItem = target;
                    target.classList.add("open");
                    return
                }
                else if (target == document.body) {
                    return
                }
                else {
                    target = target.parentElement
                }
            }
        })
        return () => {

        }
    }, [])
    return (
        <div className="example align-center">
            <div className="stage">
                <div className={cn("door")} data-value="1">
                    <div className="door-back align-center">
                        <div className="ilbuni"></div>
                    </div>
                    <div className="door-body"></div>
                </div>
                <div className={cn("door")} data-value="2">
                    <div className="door-back align-center">
                        <div className="ilbuni"></div>
                    </div>
                    <div className="door-body"></div>
                </div>
                <div className={cn("door")} data-value="3">
                    <div className="door-back align-center">
                        <div className="ilbuni"></div>
                    </div>
                    <div className="door-body"></div>
                </div>
            </div>

        </div>
    )
}
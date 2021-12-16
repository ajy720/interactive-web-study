import { useEffect, useState } from "react"
import cn from 'classnames'

export default () => {
    const [idx, setIdx] = useState<Number>(0);

    useEffect(() => {
        const stage = document.querySelector(".stage");

        stage.addEventListener("click", (event) => {
            let target = event.target as HTMLElement;

            while (1) {

                if (target.classList.contains("door")) {
                    setIdx(Number(target.dataset.value));
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
                <div className={cn("door", { open: idx == 1 })} data-value="1">
                    <div className="door-back align-center">
                        <div className="ilbuni"></div>
                    </div>
                    <div className="door-body"></div>
                </div>
                <div className={cn("door", { open: idx == 2 })} data-value="2">
                    <div className="door-back align-center">
                        <div className="ilbuni"></div>
                    </div>
                    <div className="door-body"></div>
                </div>
                <div className={cn("door", { open: idx == 3 })} data-value="3">
                    <div className="door-back align-center">
                        <div className="ilbuni"></div>
                    </div>
                    <div className="door-body"></div>
                </div>
            </div>

        </div>
    )
}
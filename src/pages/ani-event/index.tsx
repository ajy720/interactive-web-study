import { useEffect } from "react"

export default () => {

    useEffect(() => {
        const ball = document.querySelector(".ball") as HTMLElement

        window.addEventListener("click", (event) => {
            // console.log(event.clientX, event.clientY);
            // console.log(ball);

            ball.style.transform = `
            translate(${event.clientX}px, ${event.clientY}px)
            `

        })

        ball.addEventListener("click", (e) => {
            ball.style.animation = 'ball-ani 1s 3 alternate forwards';
        })

        ball.addEventListener("transitionend", (e) => {
            // console.log(e.propertyName);
            if (e.propertyName == "transform") {
                ball.classList.remove("moving");
            }
        })

        ball.addEventListener("transitionrun", (e) => {

            if (e.propertyName == "transform") {
                ball.classList.add("moving")
            }
        })

        ball.addEventListener("animationend", (e) => {
            ball.classList.remove("animating");
        })

        ball.addEventListener("animationstart", (e) => {
            ball.classList.add("animating")
        })

        ball.addEventListener("animationiteration", (e) => {
            console.log(e);
            
        })

        return () => {

        }
    }, [])

    return (
        <div>
            <div className="ball"></div>
        </div>
    )
}
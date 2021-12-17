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

        return () => {

        }
    }, [])

    return (
        <div>
            <div className="ball"></div>
        </div>
    )
}
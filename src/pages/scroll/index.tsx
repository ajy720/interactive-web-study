import { useEffect } from "react"

export default () => {

    useEffect(() => {
        const output = document.querySelector(".output")
        const ilbuni = document.querySelector(".ilbuni") as HTMLElement
        const getTop = () => {
            // output.innerHTML = window.scrollY.toString();
            // output.innerHTML = ilbuni.offsetTop.toString();
            let posY = ilbuni.getBoundingClientRect().top
            output.innerHTML = posY;

            if (posY <= window.innerHeight * 0.25) {
                ilbuni.classList.add("zoom")
            } else {
                ilbuni.classList.remove("zoom")
            }
        }

        window.addEventListener("scroll", function () {
            getTop();
        })

    }, [])
    return (
        <div className="Scroll">
            <div className="output">
                output
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure assumenda placeat possimus repudiandae qui a harum sed quis ipsum? Beatae et vitae minima error molestias a dignissimos rem, ea, aliquid eum non, nobis pariatur! Esse dicta neque quibusdam necessitatibus illo ex quod a! Officia voluptatem doloremque odio maiores porro totam excepturi autem nam beatae vel ab hic molestias numquam amet eum, eius fugiat reprehenderit laborum asperiores minus. Earum in maxime eos quam eaque tempora molestiae vitae iste, ipsa corrupti sapiente libero repudiandae cum suscipit voluptas deleniti voluptatibus porro? Expedita necessitatibus incidunt quia a error quod pariatur quos praesentium ex minima.</p>
                <div className="ilbuni"></div>
            </div>
        </div>
    )
}
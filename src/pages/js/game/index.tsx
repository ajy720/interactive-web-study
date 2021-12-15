import Image from 'next/image'
import { MouseEvent, useEffect } from 'react'
 
export default () => {

    useEffect(() => {
        let ilbunis = document.querySelectorAll(".ilbuni")

        ilbunis.forEach((e: HTMLElement) => {
            e.addEventListener("click", (ev) => {
                (ev.target as HTMLElement).remove()
            }) 
        });
        
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
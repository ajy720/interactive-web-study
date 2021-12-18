import React, { ReactElement, useEffect, useRef, useState } from "react"
import cn from 'classnames'
import useInterval from './hooks'

const Index = () => {
    const charsElem = useRef(null);
    const [toggle, setToggle] = useState([true, true, true, true])
    const [idx, setIdx] = useState(0)

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const pElem = document.createElement('p')
        pElem.innerHTML = `
        <a href="#">Hello</a>??
        `

        console.log(charsElem.current);
        // charsElem.current.appendChild(pElem)

        // charsElem.current.removeChild(document.querySelector("div:nth-child(2)"))

        return () => {

        }
    }, [])

    useEffect(() => {
        let temp = [...toggle];
        console.log("Origin Toggle", toggle);

        temp[idx] = Boolean(Number(temp[idx]) ^ 1);

        setToggle(temp);

        return () => {

        }
    }, [idx])

    useInterval(() => {
        setIdx((idx + 1) % 4)
    }, 1000)

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()

        // (e.target as HTMLElement).classList.toggle("special");
        ref.current.classList.toggle("special")
    }

    const onClickChars = (e) => {
        // event를 걸은 객체
        console.log(e.currentTarget);

        // event가 발생한 객체
        console.log(e.target);
    }

    return (
        <div>
            <div
                className="characters"
                ref={charsElem}
                onClick={onClickChars}>
                <div className={cn({
                    static: toggle[0],
                    special: !toggle[0]
                }, "a", "ilbuni")}>
                </div>
                <div className={cn({
                    static: toggle[1],
                    special: !toggle[1]
                }, "b", "ilbuni")}>
                </div>
                <div className={cn({
                    static: toggle[2],
                    special: !toggle[2]
                }, "c", "ilbuni")}
                    onClick={onClick}
                    ref={ref}>
                </div>
                <div className={cn({
                    static: toggle[3],
                    special: !toggle[3]
                }, "d", "ilbuni")} >
                </div>
            </div>
        </div >
    )
}

export default Index
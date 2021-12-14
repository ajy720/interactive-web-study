import image0 from './images/ilbuni_0.png'
import image1 from './images/ilbuni_1.png'
import image2 from './images/ilbuni_2.png'
import image3 from './images/ilbuni_3.png'

import Image from 'next/image'
import styles from './js.module.scss'
import { useEffect, useRef, useState } from "react"
import cn from 'classnames'
import classNames from "classnames/bind"
import useInterval from './hooks'

const Index = () => {
    const charsElem = useRef(null);
    const [toggle, setToggle] = useState([true, true, true])
    const [idx, setIdx] = useState(0)

    const cx = classNames.bind(styles)

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

    useInterval(() => {
        setIdx((idx + 1) % 3)
    }, 1000)

    useEffect(() => {
        let temp = [...toggle];
        console.log("Origin Toggle", toggle);

        temp[idx] = Boolean(Number(temp[idx]) ^ 1);

        setToggle(temp);

        return () => {

        }
    }, [idx])

    return (
        <div>
            <div className={cx(styles.characters)} ref={charsElem}>
                <div className={cx({
                    static: toggle[0],
                    special: !toggle[0]
                }, "a", "ilbuni")}>
                    <Image
                        src={image0}
                        alt="일분이"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className={cx({
                    static: toggle[1],
                    special: !toggle[1]
                }, "b", "ilbuni")}>
                    <Image
                        src={image1}
                        alt="일분이"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className={cx({
                    static: toggle[2],
                    special: !toggle[2]
                }, "c", "ilbuni")}>
                    <Image
                        src={image2}
                        alt="일분이"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
            <div className={cx("ilbuni", "d", "static")}>
                <Image
                    src={image3}
                    alt="일분이"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
        </div>
    )
}

export default Index
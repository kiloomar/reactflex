import { useEffect, useState } from 'react'

import './phoneSection.css'
import phone from '../../assets/phone.png'

export default function PhoneSection() {

    const [isAtBottom, setIsAtBottom] = useState(false)
    const [visibleClass, setVisibleClass] = useState("invisible")

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition)
        return () => window.removeEventListener('scroll', checkScrollPosition)
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (isAtBottom) setVisibleClass("visible")
    }, [isAtBottom])

    function checkScrollPosition() {
        if (!isAtBottom)
            window.requestAnimationFrame(() => {
                let docNode = document.documentElement
                let pos = window.scrollY + window.innerHeight
                if (pos >= docNode.scrollHeight - 500)
                    setIsAtBottom(true)
            })
    }

    return (
        <div className={`${visibleClass} phoneContainer`}>
            {/* Larger screens */}
            <span className="d-xs-none">
                <div className="smallPage">
                    <p className="smallPageText">Compact</p>
                </div>
                <div className="phoneImgContainer">
                    <img src={phone} width="100%" alt="" />
                </div>
            </span>
            {/* XS size */}
            <span className="d-xs-block d-none">
                <div className="smallPageXs">
                    <p className="smallPageTextXs">Compact</p>
                </div>
                <div className="phoneImgContainerXs">
                    <img src={phone} width="100%" alt="" />
                </div>
            </span>
        </div>
    )
}
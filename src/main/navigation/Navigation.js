import { useState, useRef } from 'react'
import './navigation.css'
import toggleSVG from '../../assets/toggle.svg'
import SVG from '../../components/SVG'

export default function Navigation() {

    const button = useRef(null)
    const [menuClass, setMenuClass] = useState("d-none")

    const toggleMenu = () => {
        let margin = parseInt(button.current.style.marginLeft) || 0
        if (!isNaN(margin)) 
            if (margin === 0) {
                button.current.style.marginLeft = `25px`
                setMenuClass("menu")
            } else {
                button.current.style.marginLeft = `0px`
                setMenuClass("d-none")
            }
    }

    return (
        <div className="nav">
            <button ref={button} className="toggle" onClick={toggleMenu}>
                <SVG src={toggleSVG} width="64px" height="64px" fill="white" />
            </button>

            <div className={`${menuClass}`}>
                <ul>
                    <li><a href="#professional">Professional</a></li>
                    <li><a href="#clean">Clean</a></li>
                    <li><a href="#precise">Precise</a></li>
                    <li><a href="#links">Links</a></li>
                </ul>
            </div>
        </div>
    )
}


import './styledButton.css'

import SVG from "../SVG"
import line from "../../assets/line.svg"

export default function StyledButton(children) {

    return (
        <div className="styledButtonContainer">
            <SVG src={line} fill="white" width="100px" height="100px" flip className="d-xs-none" />
            {/* XS size */}
            <SVG src={line} fill="white" width="90px" height="90px" flip className="d-xs-block d-none" />
            <button className="styledButton">
                {typeof children.children === "string" ? children.children : ""}
            </button>
            <SVG src={line} fill="white" width="100px" height="100px" className="d-xs-none" />
            {/* XS size */}
            <SVG src={line} fill="white" width="90px" height="90px" className="d-xs-block d-none" />
        </div>
    )
}


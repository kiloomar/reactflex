import React, { useState, useLayoutEffect } from "react"

export default function SVG(props) {

    let {
        src,
        fill,
        width,
        height,
        flip,
        className
    } = props

    const [svgData, setSvgData] = useState(null)

    const filterSVG = str => {
        str = str.trim()
        let tagIdx = str.indexOf("<svg")
        return str.substr(tagIdx, str.length)
    }

    const addSVGAttributes = str => {
        let div = document.createElement('div')
        div.innerHTML = str
        let path = div.querySelector('path')
        let svg = div.querySelector('svg')

        if (fill) path.setAttribute("fill", fill)
        if (height) svg.setAttribute("height", height)
        if (width) svg.setAttribute("width", width)

        return div.innerHTML
    }

    useLayoutEffect(() => {
        if (src)
            fetch(`${process.env.PUBLIC_URL}${src}`)
                .then(res => res.blob())
                .then(blob => blob.text())
                .then(text => {
                    text = filterSVG(text)
                    text = addSVGAttributes(text)
                    setSvgData(text)
                })
        // eslint-disable-next-line
    }, [src])

    return flip ?
        <div style={{ transform: "scaleX(-1)" }} className={className} dangerouslySetInnerHTML={{ __html: svgData }}></div>
        :
        <div className={className} dangerouslySetInnerHTML={{ __html: svgData }}></div>

}
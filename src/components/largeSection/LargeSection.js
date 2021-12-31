import './largeSection.css'

export default function LargeSection({ id, title, subtitle, buttons, height, videoSrc, children }) {

    return (
        <div
            id={id}
            style={{ height: height ? height : "" }}
            className={`section ${videoSrc ? 'transparent' : ''}`}
        >
            <div className="text">
                <div>
                    <p className="d-xs-none heading">{title}</p>
                    <p className="d-xs-flex d-none headingxs">{title}</p>

                    <p className="subheading">{subtitle}</p>
                    <div className="button">{buttons}</div>
                </div>
            </div>
            {children}
            {
                videoSrc ?
                    <video autoPlay muted loop className="bgvideo" src={videoSrc}></video>
                    : null
            }
        </div>
    )

}



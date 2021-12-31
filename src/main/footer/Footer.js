import './footer.css'

export default function Footer() {

    return (
        <div className="footer" id="links">
            <ul>
                <li><h3>Who we are</h3></li>
                <li><button>About us</button></li>
                <li><button>Products</button></li>
                <li><button>Previous works</button></li>
            </ul>
            <ul>
                <li><h3>Contact us</h3></li>
                <li><button>Location</button></li>
                <li><button>Track progress</button></li>
                <li><button>Write us</button></li>
            </ul>
            <ul>
                <li><h3>Useful links</h3></li>
                <li><button>Affiliates</button></li>
                <li><button>News</button></li>
                <li><button>Help</button></li>
            </ul>
        </div>
    )
}
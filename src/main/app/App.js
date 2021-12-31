import '../../index.css'
import './app.css'
import Navigation from "../navigation/Navigation"
import LargeSection from "../../components/largeSection/LargeSection"
import PhoneSection from "../phoneSection/PhoneSection"
import StyledButton from "../../components/styledButton/StyledButton"
import Footer from '../footer/Footer'
import hero from '../../assets/city1mb.mp4'

export default function App() {
  return (
    <div className="d-flex">
      <Navigation />
      <div className="columns">
        <LargeSection
          videoSrc={hero}
          id="professional"
          title="Professional"
          subtitle="Trustworthy. Dependable."
          buttons={[<StyledButton key={0}>Join us</StyledButton>]}
        />
        <LargeSection
          id="clean"
          title="Clean"
          subtitle="Immaculate. Pristine."
          buttons={[<StyledButton key={1}>Join us</StyledButton>]}
        />
        <LargeSection
          id="precise"
          title="Precise"
          subtitle="Definite. Exact."
          height="972px"
          buttons={[<StyledButton key={2}>Join us</StyledButton>]}
        >
          <PhoneSection />
        </LargeSection>
        <Footer />
      </div>
    </div>
  )
}
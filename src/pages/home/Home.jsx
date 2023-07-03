import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturesProperties from '../../components/featuresProperties/FeaturesProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 data-aos="zoom-in" data-aos-duration="1100" className="homeTitle">Explore with Property Type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturesProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home
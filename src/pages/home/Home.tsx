import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import PromoBanner from "../../components/promoBanner/PromoBanner";
import ShopByCategory from "../../components/shopByCategory/ShopByCategory";
import FeaturedSarees from "../../components/featuredSarees/FeaturedSarees";
// import ReelSlider from "../../components/reelSlider/ReelSlider";
import AnimatedSection from "../../components/animatedSection/AnimatedSection";
import Benefits from "../../components/benefits/Benefits";
import Footer from "../../components/footer/Footer";
import WhatsappButton from "../../components/whatsapp/WhatsappButton";
import MobileMenu from "../../components/mobileMenu/MobileMenu";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PromoBanner />
      <ShopByCategory />
      <FeaturedSarees />
      {/* <ReelSlider /> */}
      <AnimatedSection />
      <Benefits />
      <Footer />
      <WhatsappButton />
      <MobileMenu />
    </>
  );
};

export default Home;
import BannerSection from "../components/BannerSection";
import BlogsSection from "../components/BlogsSection";
import ContactSection from "../components/ContactSection";
import DeliverySection from "../components/DeliverySection";
import EventServices from "../components/EventServices";
import MenuSection from "../components/MenuSection";
import Reviews from "../components/Reviews";

function Home() {
  return (
    <>
      <BannerSection />
      <MenuSection />
      <ContactSection />
      <EventServices />
      <DeliverySection />
      <Reviews />
      <BlogsSection />
    </>
  );
}

export default Home;

import Banner from "@/components/homePage/banner";
import FaQ from "@/components/homePage/faq";
import FeaturedQuizes from "@/components/homePage/featuredQuizes";
import HowItWorks from "@/components/homePage/howItWorks";
import PartnerSection from "@/components/homePage/partnerSection";
import PopularQuize from "@/components/homePage/popularQuize";
import NewsLetter from "@/components/shared/newsLetter";
import PaymentAd from "@/components/shared/paymentAd";

import Testimonial from "@/components/homePage/testimonial";
export default function Home() {

  return (
    <main>
      <Banner />
      <FeaturedQuizes />
      <PaymentAd />
      <PopularQuize />
      <HowItWorks />
      <FaQ />
      <PartnerSection />
      <NewsLetter />
      <Testimonial></Testimonial>
    </main>
  );
}
import Banner from "@/components/homePage/banner";
import FaQ from "@/components/homePage/faq";
import FeaturedQuizes from "@/components/homePage/featuredQuizes";
import HowItWorks from "@/components/homePage/howItWorks";
import PopularQuize from "@/components/homePage/popularQuize";
import NewsLetter from "@/components/shared/newsLetter";
import PaymentAd from "@/components/shared/paymentAd";

import Testimonial from "@/components/homePage/testimonial";
export default function Home() {

  return (
    <main>
      <Banner />
      <HowItWorks />
      <FeaturedQuizes />
      <PopularQuize />
      <FaQ />
      <PaymentAd />
      {/* <PartnerSection /> */}
      <Testimonial />
      <NewsLetter />
    </main>
  );
}
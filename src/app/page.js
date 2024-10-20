import Banner from "@/components/homePage/banner";
import FaQ from "@/components/homePage/faq";
import FeaturedQuizes from "@/components/homePage/featuredQuizes";
import HowItWorks from "@/components/homePage/howItWorks";
import PartnerSection from "@/components/homePage/partnerSection";
import PopularQuize from "@/components/homePage/popularQuize";
import PaymentAd from "@/components/shared/paymentAd";
export default function Home() {
  return (
    <main>
      <Banner />
      <FeaturedQuizes />
      <PaymentAd />
      <PopularQuize />
      <HowItWorks/>
      <FaQ/>
      <PartnerSection />
    </main>
  );
}
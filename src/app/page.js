import Banner from "@/components/homePage/banner";
import FeaturedQuizes from "@/components/homePage/featuredQuizes";
import PartnerSection from "@/components/homePage/partnerSection";
import PopularQuize from "@/components/homePage/popularQuize";
export default function Home() {
  return ( 
    <main>
      <Banner />
      <FeaturedQuizes/>
      <PopularQuize />
      <PartnerSection/>
    </main>
  );
}
import Banner from "@/components/homePage/banner";
import PartnerSection from "@/components/homePage/partnerSection";
import PopularQuize from "@/components/homePage/popularQuize";
export default function Home() {
  return ( 
    <main>
      <Banner />
      <PopularQuize />
      <PartnerSection/>
    </main>
  );
}
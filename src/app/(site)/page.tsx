import { HeroSection } from "@/components/templates/index/HeroSection";
import Categories from "@/components/templates/index/Categories";
import { MostSales } from "@/components/templates/index/MostSales";
import TasteFinder from "@/components/templates/index/TasteFinder";
import { PremiumBundles } from "@/components/templates/index/PremiumBundles";

export default async function Home() {
  return (
    <div className="">
      <HeroSection />
      <Categories />
      <MostSales />
      <TasteFinder />
      <PremiumBundles />
    </div>
  );
}

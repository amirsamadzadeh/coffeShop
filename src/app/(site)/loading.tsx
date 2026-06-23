import HeroSectionSkeleton from "@/components/modules/skeleton/HeroSkeleton";
import CategoriesSkeleton from "@/components/modules/skeleton/CategoriesSkeleton";
import MostSalesSkeleton from "@/components/modules/skeleton/MostSalesSkeleton";
import TasteFinderSkeleton from "@/components/modules/skeleton/TasteFinderSkeleton";
import PremiumBundlesSkeleton from "@/components/modules/skeleton/PremiumBundlesSkeleton";

export default function Loading() {
  return (
    <>
      <HeroSectionSkeleton />
      <CategoriesSkeleton />
      <MostSalesSkeleton />
      <TasteFinderSkeleton />
      <PremiumBundlesSkeleton />
    </>
  );
}

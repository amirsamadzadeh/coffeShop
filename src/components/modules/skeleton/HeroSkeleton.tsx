const HeroSectionSkeleton = () => {
  return (
    <div className="mt-6 mx-auto m-0 2xl:px-12 xl:px-7 lg:px-5 md:px-3 px-2">
      {/* Mobile Skeleton */}
      <div className="min-[450px]:hidden">
        <div className="w-full h-52 bg-gray-200 rounded-lg animate-pulse" />
      </div>

      {/* Desktop Skeleton */}
      <div className="hidden min-[450px]:block">
        <div className="w-full lg:h-112.5 h-60 bg-gray-200 rounded-lg animate-pulse" />
      </div>
    </div>
  );
};

export default HeroSectionSkeleton;

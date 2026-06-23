export const PremiumBundlesSkeleton = () => {
  return (
    <div className="mt-10 px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-12">
      <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-4" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-80 bg-gray-200 rounded-md animate-pulse" />
        ))}
      </div>
    </div>
  );
};


export default PremiumBundlesSkeleton;
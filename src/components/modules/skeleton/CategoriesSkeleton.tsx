const CategoriesSkeleton = () => {
  return (
    <div className="mt-8 px-2 md:px-3 lg:px-5 xl:px-7 2xl:px-12">
      <div className="flex gap-3 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="w-24 h-24 bg-gray-200 rounded-md animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSkeleton;

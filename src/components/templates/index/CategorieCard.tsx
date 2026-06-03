import Image from "next/image";

const CategoryCard = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-xl bg-white shadow-sm">
      {/* image */}
      <div className="w-full border-b border-gray-100 p-3">
        <div className="relative mx-auto aspect-square w-[120]">
          <Image
            src="/images/categories/instantCoffe.webp"
            alt="قهوه فوری"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* title */}
      <span className="py-3 text-sm font-medium">قهوه فوری</span>
    </div>
  );
};

export default CategoryCard;

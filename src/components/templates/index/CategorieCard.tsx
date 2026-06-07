import Image from "next/image";

type CategoryProps = {
  title: string;
  slug: string;
  image: string;
};

const CategoryCard = ({ title, image }: CategoryProps) => {
  return (
    <div className="flex flex-col items-center overflow-hidden rounded-xl bg-white shadow-sm">
      {/* image */}
      <div className="w-full border-b border-gray-100 p-3">
        <div className="relative mx-auto aspect-square w-[120]">
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
      </div>

      {/* title */}
      <span className="py-3 text-sm font-medium">{title}</span>
    </div>
  );
};

export default CategoryCard;

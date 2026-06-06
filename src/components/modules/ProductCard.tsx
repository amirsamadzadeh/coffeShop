import Link from "next/link";

type ProductTypes = {
  name: string;
  image: string;
  price: number;
  _id: string;
};

type ProductCardProps = {
  product: ProductTypes;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      className="col-span-3 sm:col-span-2 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col justify-between w-full items-center bg-white rounded-md py-6 px-5 mt-4 shadow-md cursor-pointer"
      dir="rtl"
    >
      {/* image box */}
      <div className="flex items-center w-full border border-gray-100 rounded-xl my-4 ">
        <Link href={`/products/${product._id}`}>
          <img
            src={product.image}
            alt="Coffe product"
            width={240}
            height={240}
            className="w-full aspect-square object-center "
          />
        </Link>
      </div>

      {/* captions */}
      <div
        className="flex items-start w-full text-right leading-1 mb-4"
        dir="rtl"
      >
        <h4 className="text-xs pr-0.5 text-wrap h-12">{product.name}</h4>
      </div>

      {/* price */}
      <div className="flex gap-1.5 w-full justify-end">
        <p className="flex text-md text-[020817] font-light">
          {product.price?.toLocaleString("fa-IR")}
        </p>
        <span className="text-[#545454] text-sm">تومان</span>
      </div>
    </div>
  );
};

export default ProductCard;

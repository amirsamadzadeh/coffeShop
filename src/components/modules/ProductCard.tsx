const ProductCard = () => {
  return (
    <div className="col-span-3 md:col-span-2  lg:col-span flex flex-col justify-between w-full items-center bg-white rounded-md py-6 px-5 mt-4 shadow-md">
      {/* image box */}
      <div className="flex items-center w-full border border-gray-100 rounded-xl my-4 ">
        <img
          src="/images/product2.jpg"
          alt="Coffe product"
          width={240}
          height={240}
          className="w-full aspect-square  object-center "
        />
      </div>

      {/* captions */}
      <div className="text-right leading-1 mb-4">
        <h4 className="text-xs pr-0.5">قهوه هاوس بین %70 عربیکا - 250 گرمی</h4>
      </div>

      {/* price */}
      <div className="flex flex-row-reverse gap-1.5 w-full justify-end">
        <p className="text-md text-[020817] font-light">802.500</p>
        <span className="text-[#545454] text-sm">تومان</span>
      </div>
    </div>
  );
};

export default ProductCard;

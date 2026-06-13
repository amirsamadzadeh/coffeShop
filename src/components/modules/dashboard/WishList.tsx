import Image from "next/image";

export const WishList = () => {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-md py-4" dir="rtl">
      <div className="flex flex-col sm:h-full gap-1 items-center justify-center">
        <Image
          src="/images/dashboard/wishlist.png"
          width={400}
          height={400}
          quality={80}
          alt="empty-orders"
          className="max-w-50 aspect-square object-cover"
        />

        <p className="text-md font-black tracking-wide">
          لیست علاقه مندی های شما خالی است .
        </p>
        <span className="text-sm text-gray-400">
          قهوه های مورد علاقه ات رو لایک کن
        </span>
      </div>
    </div>
  );
};

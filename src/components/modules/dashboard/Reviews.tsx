import Image from "next/image";

export const Reviews = () => {
  return (
    <div
      className="flex flex-col bg-white px-2 pl-4 pb-6 pt-4 rounded-md shadow-md"
      dir="rtl"
    >
      {/* heads */}
      <p className="text-base text-bold">دیدگاه ها و نظرات من</p>
      <span className="text-gray-400 text-md pr-2 mt-1">
        در این بخش میتوانید تمامی دیدگاه ها و نظرات خود را مشاهده کنید.
      </span>

      <div className="flex flex-col gap-2.5 h-full items-center justify-center">
        <Image
          src="/images/dashboard/reviews.png"
          width={400}
          height={400}
          quality={80}
          alt="empty-orders"
          className="max-w-50 aspect-square object-cover"
        />
        <span className="font-bold text-base">
          شما هنوز هیچ دیدگاهی ثبت نکرده اید
        </span>
      </div>
    </div>
  );
};

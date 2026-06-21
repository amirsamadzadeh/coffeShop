import { FilterSideBar } from "@/components/templates/products/FilterSideBar";
import { ShowFilteredProducts } from "@/components/templates/products/ShowFilteredProducts";
import connectDB from "@/configs/db";
import { model as CategorieModel } from "@/models/Categorie";
import { FilterBar } from "@/components/templates/products/FilterBar";

type categorieTypes = {
  name: string;
  slug: string;
};

type Categorie = categorieTypes[];

type Params = {
  searchParams: Promise<{
    category?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
};

const page = async ({ searchParams }: Params) => {
  await connectDB();
  const params = await searchParams;
  const categories: Categorie = await CategorieModel.find({});
  return (
    <div className="mt-5  md:px-3 lg:px-5 xl:px-7 2xl:px-12 ">
      {/* wrapper */}
      <div
        className="border border-gray-100 rounded-md bg-white flex flex-col md:grid md:grid-cols-12 shadow-2xl "
        dir="rtl"
      >
        <FilterSideBar categories={JSON.parse(JSON.stringify(categories))} />
        <FilterBar categories={JSON.parse(JSON.stringify(categories))} />
        <ShowFilteredProducts params={params} />
      </div>
    </div>
  );
};

export default page;

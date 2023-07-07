import getCategories from "@/actions/get-categories";
import MainNav from "@/components/main-nav";

const CategoryNav = async () => {
  const categories = await getCategories();
  return (
    <div className="flex-col">
      <MainNav data={categories} />
    </div>
  )
}

export default CategoryNav;
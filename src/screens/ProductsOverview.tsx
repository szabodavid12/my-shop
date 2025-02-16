import ItemCard from "../components/itemCard/ItemCard";

const ProductsOverview = () => {
  return (
    <div className="pb-[50px]">
      <h1 className=" font-gsSemibold text-[48px] text-center">See Products</h1>
      <ItemCard title="Title" description="desc" price="123" discount="1123" />
    </div>
  );
};

export default ProductsOverview;

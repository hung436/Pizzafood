import ListProduct from "../Home/component/ListProduct";

function Menu() {
  const fake = [
    { id: 1, image: "", name: "hungdt", price: "30000" },
    { id: 2, image: "", name: "hungdt", price: "30000" },
    { id: 3, image: "", name: "hungdt", price: "30000" },
    { id: 3, image: "", name: "hungdt", price: "30000" },
    { id: 3, image: "", name: "hungdt", price: "30000" },
  ];
  return (
    <>
      <ListProduct data={fake} />
    </>
  );
}

export default Menu;

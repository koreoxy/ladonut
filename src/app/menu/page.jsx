import CardList from "@/components/Card/CardList";
import SidebarMenu from "@/components/SidebarMenu";

const Menu = () => {
  return (
    <div className="container max-w-7xl mx-auto mt-10">
      <div className="flex">
        <SidebarMenu />
        <CardList />
      </div>
    </div>
  );
};

export default Menu;

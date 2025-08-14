import { Menu } from "../../components/menu/Menu";
import { MenuCard } from "../../components/MenuCard";
import { menuSet } from "../../data/menuSet";

export const MenuSet = () => {
  return (
    <>
      <Menu className="flex flex-row gap-6 flex-wrap justify-center md:justify-start">
        {menuSet.map((menu) => (
          <MenuCard
            key={menu.id}
            name={menu.title}
            detail={menu.description}
            img={menu.images}
            category={menu.category}
            price={menu.priceTHB}
            kcal={menu.kcal}
            menuId={menu.id}
          />
        ))}
      </Menu>
    </>
  );
};

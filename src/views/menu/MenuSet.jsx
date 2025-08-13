import { Menu } from "../../components/Menu";
import { MenuCard } from "../../components/MenuCard";
import { menuSet } from "../../data/menuSet";

export const MenuSet = () => {
  return (
    <div>
      <Menu className="flex flex-col sm:flex-row gap-6 flex-wrap">
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
    </div>
  );
};

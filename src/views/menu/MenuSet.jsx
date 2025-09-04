import { useEffect, useState } from "react";
import { Menu } from "../../components/menu/Menu";
import { MenuCard } from "../../components/MenuCard";
// import { menuSet } from "../../data/menuSet";
import { getAllMenus } from "../../services/menuService";

export const MenuSet = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const respon = await getAllMenus();
        setMenus(respon.menus);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMenus();
  }, []);
  return (
    <>
      <Menu className="flex flex-row gap-6 flex-wrap justify-center md:justify-start">
        {menus.map((menu) => (
          <MenuCard
            key={menu._id}
            name={menu.title}
            detail={menu.description}
            img={menu.imageUrl}
            category={menu.category}
            price={menu.price}
            kcal={menu.kcal}
            menuId={menu._id}
            slug={menu.slug}
          />
        ))}
      </Menu>
    </>
  );
};

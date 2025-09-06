import { useEffect, useState } from "react";
import { Menu } from "../../components/menu/Menu";
import { MenuCard } from "../../components/MenuCard";
import { getAllMenus } from "../../services/menuService.js";

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
        {menus
          .sort((a, b) => a.durationDays - b.durationDays)
          .map((menu) => (
            <MenuCard key={menu._id} data={menu} />
          ))}
      </Menu>
    </>
  );
};

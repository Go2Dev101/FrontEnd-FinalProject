import { useEffect, useState } from "react";
import { Menu } from "../../components/menu/Menu";
import { MenuCard } from "../../components/MenuCard";
<<<<<<< HEAD
// import { menuSet } from "../../data/menuSet";
=======
>>>>>>> refs/remotes/origin/main
import { getAllMenus } from "../../services/menuService.js";

export const MenuSet = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenus = async () => {
      setLoading(true);
      try {
        const respon = await getAllMenus();
        setMenus(respon.menus);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMenus();
  }, []);

  return (
    <>
      <Menu className="flex flex-row gap-6 flex-wrap justify-center md:justify-start">
        {loading ? (
          <p>loading...</p>
        ) : (
          menus
            .sort((a, b) => a.durationDays - b.durationDays)
            .map((menu) => <MenuCard key={menu._id} data={menu} />)
        )}
      </Menu>
    </>
  );
};

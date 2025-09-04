import { useParams } from "react-router-dom";
import { MenuDetail } from "../../components/menu/MenuDetail";
// import { menuSet } from "../../data/menuSet";
import { useEffect, useState } from "react";
import { getMenuBySlug } from "../../services/menuService.js";

export const MenuSetDetail = () => {
  const { menuSlug } = useParams();
  const [menu, setMenu] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const respon = await getMenuBySlug(menuSlug);
        setMenu(respon.menu);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMenu();
  }, [menuSlug]);
  // const menu = menuSet.find((menu) => menu.id === menuSlug);
  return (
    <>
      <MenuDetail path={"menuset"} menu={menu} />
    </>
  );
};

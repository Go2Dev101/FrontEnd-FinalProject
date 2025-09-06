import { useParams } from "react-router-dom";
import { MenuDetail } from "../../components/menu/MenuDetail";
// import { menuSet } from "../../data/menuSet";
import { useEffect, useState } from "react";
import { getMenuBySlug } from "../../services/menuService.js";


export const MenuSetDetail = () => {
  const { menuSlug } = useParams();
  const [menu, setMenu] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      try {
        const respon = await getMenuBySlug(menuSlug);
        setMenu(respon.menu);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMenu();
  }, [menuSlug]);

  return <MenuDetail path={"menuset"} menu={menu} loading={loading} />;
};

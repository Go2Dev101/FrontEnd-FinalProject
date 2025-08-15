import { useParams } from "react-router-dom";
import { MenuDetail } from "../../components/menu/MenuDetail";
import { menuSet } from "../../data/menuSet";


export const MenuSetDetail = () => {
  const { menuSetId } = useParams();
  const menu = menuSet.find((menu) => menu.id === menuSetId);
  return (
    <>
      <MenuDetail path={"menuset"} menu={menu} />
    </>
  );
};

import { Popover } from "antd";
import style from "./ContestantHeader.module.scss";
import classNames from "classnames/bind";
import MenuWrapper from "@/components/MenuWrapper";
import { BiHeart, BiLogoCodepen, BiSearchAlt2, BiWindowAlt } from "react-icons/bi";
import ROUTE_PATH from "@/routes/routePath";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
const HeaderMenu = () => {
  const listMenu = [
    {
      title: "Trang chủ",
      children: null,
      link: ROUTE_PATH.HOME,
    },
    {
      title: "Thi thử",
      children: null,
      link: ROUTE_PATH.EXAM,
    },
    {
      title: "Lịch thi",
      children: null,
      link: ROUTE_PATH.HOME,
    },
    {
      title: "Dịch vụ",
      children: [
        { link: "", title: "Gói đề vip", icon: <BiSearchAlt2 /> },
        { link: "", title: "Gói chấm phần nói", icon: <BiWindowAlt /> },
        { link: "", title: "Gói chấm phần viết", icon: <BiHeart /> },
      ],
    },
    {
      title: "Tài liệu",
      children: [
        { link: "", title: "Hướng dẫn đăng kí thi", icon: <BiSearchAlt2 /> },
        { link: "", title: "Hướng dẫn thi", icon: <BiWindowAlt /> },
        { link: "", title: "Hướng dẫn mua gói cước", icon: <BiLogoCodepen /> },
        { link: "", title: "Hướng dẫn nhập mã khuyến mãi", icon: <BiLogoCodepen /> },
      ],
    },
  ];
  return (
    <div className={cx("header-menu-wrapper")}>
      {listMenu.map((item, index) => {
        return item.children ? (
          <Popover
            trigger={"click"}
            placement='bottomLeft'
            content={
              <MenuWrapper showHeader={false}>
                <div className={cx("menu-children-wrapper")}>
                  {item.children.map((child, index) => {
                    return (
                      <Link to={child.link || ""} className={cx("menu-children")} key={index}>
                        <div className={cx("menu-children-icon")}>{child.icon}</div>
                        <div className={cx("menu-children-title")}>{child.title}</div>
                      </Link>
                    );
                  })}
                </div>
              </MenuWrapper>
            }
            key={index}
          >
            <div className={cx("menu-item")}>{item.title}</div>
          </Popover>
        ) : (
          <Link to={item.link} className={cx("menu-item")} key={index}>
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};
export default HeaderMenu;

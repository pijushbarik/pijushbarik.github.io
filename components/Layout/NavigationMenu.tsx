import Link from "next/link";
import styles from "./styles.module.scss";
import classNames from "@helpers/classNames";
import useMediaQuery from "@hooks/useMediaQuery";
import Dropdown from "rc-dropdown";

type NavigationMenuItem = {
  name: string;
  key: string;
  path: string;
  activeKey: string;
};

type NavigationMenuProps = {
  items: NavigationMenuItem[];
};

const NavigationMenu: React.FC<NavigationMenuProps> = props => {
  const isScreenMdOrLess = useMediaQuery<boolean>(
    ["(max-width: 768px)"],
    [true],
    false
  );

  const _items = () => (
    <ul className={styles.navMenuItems}>
      {props.items.map(item => (
        <li key={item.name}>
          <Link href={item.path}>
            <a
              className={classNames(
                styles.linkBtn,
                item.activeKey === item.key && styles.active
              )}
            >
              {item.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );

  const _navMenu = () => <nav>{_items()}</nav>;

  return (
    <>
      {isScreenMdOrLess ? (
        <Dropdown
          overlay={isScreenMdOrLess ? _navMenu() : <></>}
          trigger={["click"]}
          animation="slide-up"
        >
          <div className="w-8 h-8 cursor-pointer flex justify-center items-center">
            <div role="button" className={styles.navigationBtn} />
          </div>
        </Dropdown>
      ) : (
        _navMenu()
      )}
    </>
  );
};

export default NavigationMenu;

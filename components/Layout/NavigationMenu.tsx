import Link from "next/link";
import styles from "./styles.module.scss";
import classNames from "@helpers/classNames";
import useMediaQuery from "@hooks/useMediaQuery";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
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

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
  const isScreenMdOrLess = useMediaQuery<boolean>(
    ["(max-width: 768px)"],
    [true],
    false
  );
  const router = useRouter();
  const [drawerVisible, setDrawerVisible] = useState(false);

  useEffect(() => {
    if (!isScreenMdOrLess) {
      setDrawerVisible(false);
    }
  }, [isScreenMdOrLess]);

  useEffect(() => {
    if (drawerVisible) {
      setDrawerVisible(false);
    }
  }, [router.query]);

  const _items = () => (
    <ul className={styles.navMenuItems}>
      {props.items.map((item) => (
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
        <div>
          <button
            className={styles.navigationBtn}
            onClick={() => setDrawerVisible(true)}
          >
            <div />
          </button>

          <div
            className={classNames(
              styles.drawer,
              drawerVisible ? styles.drawerVisible : undefined
            )}
            onClick={() => setDrawerVisible(false)}
          >
            <button className={styles.navigationBtnClose}>
              <div />
            </button>
            {_navMenu()}
          </div>
        </div>
      ) : (
        _navMenu()
      )}
    </>
  );
};

export default NavigationMenu;

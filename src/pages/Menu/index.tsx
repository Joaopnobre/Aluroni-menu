import styles from "./Menu.module.scss";
import Search from "./Search/index";
import { useState } from "react";
import Filter from "../Filters/index";
import Computer from "../Cart/Computer";
import Itens from "./Itens/index";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [computer, setComputer] = useState("");
  return (
    <main>
      <nav className={styles.menu}> <img src="../../../public/assets/logo.svg" alt="" />  </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>The House of Pasta</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Menu</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          {" "}
          <Filter filter={filter} setFilter={setFilter}></Filter>
          <Computer computer={computer} setComputer={setComputer}></Computer>
        </div>
        <Itens search={search} filter={filter} computer={computer}></Itens>
      </section>
    </main>
  );
}

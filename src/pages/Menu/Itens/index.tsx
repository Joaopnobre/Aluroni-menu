import cardapio from "./itens.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";

interface Props {
  search: string;
  filter: number | null;
  computer: string;
}

export default function Itens(props: Props) {
  const [list, setList] = useState(cardapio);
  const { search, filter, computer } = props;

  function searchTest(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function filterTest(id: number) {
    if (filter !== null) return filter === id;
    return true;
  }

  function compute(newList: typeof cardapio) {
    switch (computer) {
      case "portion":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "amount_people":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
        case "price":
          return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
          default: return newList;
    }
  }

  useEffect(() => {
    const newList = cardapio.filter(
      (item) => searchTest(item.title) && filterTest(item.category.id)
    );
    setList(compute(newList));
  }, [search, filter, computer]);

  return (
    <div className={styles.itens}>
      {list.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

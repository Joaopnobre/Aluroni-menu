import styles from "./Item.module.scss";
import cardapio from "../itens.json";
import classNames from "classnames";

type Props = (typeof cardapio)[0];
function Item(props: Props) {
  const { title, description, category, size, serving, price, photo } = props;
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames(
              styles.item__type,
              styles[`item__type__${category.label.toLowerCase()}`]
            )}
          >
            {category.label}
          </div>
          <div className={styles.item__portion}>{size}</div>
          <div className={styles.item__amountpeople}>
            {" "}
            For {serving} {serving === 1 ? "person" : "people"}
          </div>
          <div className={styles.item__price}>{price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

export default Item;

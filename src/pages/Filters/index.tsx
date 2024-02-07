import filters from "./filters.json";
import styles from "./Filters.module.scss";

type IOption = (typeof filters)[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

function Filter({ filter, setFilter }: Props) {
  function selectFilter(option: IOption) {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  }
  return (
    <div className={styles.filters}>
      {filters.map((option) => (
        <button
          className={`${styles.filters__filter} ${
            filter === option.id ? styles["filters__filter--active"] : ""
          } `}
          key={option.id}
          onClick={() => selectFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;

import { useForm } from "react-hook-form";
import styles from "./SearchSection.module.css";
import svg from "../../assets/icons.svg";

const SearchSection = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className={styles.searchSectionForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={styles.searchSectionFormLocation}>
        <label htmlFor="location" className={styles.searchSectionFormCaption}>
          Location
        </label>
        <div style={{ position: "relative" }}>
          <input
            {...register("location")}
            className={styles.searchSectionFormInput}
            type="text"
            placeholder="City, Country"
            id="location"
          />
          <svg className={styles.searchSectionFormInputIcon}>
            <use xlinkHref={svg + "#icon-map-pin"} />
          </svg>
        </div>
      </div>
      <p className={styles.searchSectionFormCaption}>Filers</p>
      <div>
        <h2 className={styles.searchSectionFormFiltersTitle}>
          Vehicle equipment
        </h2>
        <hr className={styles.searchSectionFormFiltersHr} />
        <ul className={styles.searchSectionFormFiltersContainer}>
          <li className={styles.searchSectionFormFiltersItem}>
            <label
              className={styles.searchSectionFormFiltersItemLabel}
              htmlFor="ac"
            >
              <svg className={styles.searchSectionFormIcon}>
                <use xlinkHref={svg + "#icon-ac"} />
              </svg>
              AC
            </label>
            <input
              {...register("ac")}
              type="checkbox"
              id="ac"
              value="true"
              className={styles.searchSectionFormCheckbox}
            />
          </li>
          <li className={styles.searchSectionFormFiltersItem}>
            <label
              className={styles.searchSectionFormFiltersItemLabel}
              htmlFor="automatic"
            >
              <svg
                className={styles.searchSectionFormIcon}
                style={{ fill: "none", stroke: "#101828" }}
              >
                <use xlinkHref={svg + "#icon-automatic"} />
              </svg>
              Automatic
            </label>
            <input
              {...register("automatic")}
              type="checkbox"
              id="automatic"
              value="true"
              className={styles.searchSectionFormCheckbox}
            />
          </li>
          <li className={styles.searchSectionFormFiltersItem}>
            <label
              className={styles.searchSectionFormFiltersItemLabel}
              htmlFor="kitchen"
            >
              <svg
                className={styles.searchSectionFormIcon}
                style={{ fill: "none", stroke: "#101828" }}
              >
                <use xlinkHref={svg + "#icon-kitchen"} />
              </svg>
              Kitchen
            </label>
            <input
              {...register("kitchen")}
              type="checkbox"
              id="kitchen"
              value="true"
              className={styles.searchSectionFormCheckbox}
            />
          </li>
          <li className={styles.searchSectionFormFiltersItem}>
            <label
              className={styles.searchSectionFormFiltersItemLabel}
              htmlFor="tv"
            >
              <svg
                className={styles.searchSectionFormIcon}
                style={{ fill: "none", stroke: "#101828" }}
              >
                <use xlinkHref={svg + "#icon-tv"} />
              </svg>
              TV
            </label>
            <input
              {...register("tv")}
              type="checkbox"
              id="tv"
              value="true"
              className={styles.searchSectionFormCheckbox}
            />
          </li>
          <li className={styles.searchSectionFormFiltersItem}>
            <label
              className={styles.searchSectionFormFiltersItemLabel}
              htmlFor="shower"
            >
              <svg
                className={styles.searchSectionFormIcon}
                style={{ fill: "none", stroke: "#101828" }}
              >
                <use xlinkHref={svg + "#icon-shower"} />
              </svg>
              Shower/WS
            </label>
            <input
              {...register("shower")}
              type="checkbox"
              id="shower"
              value="true"
              className={styles.searchSectionFormCheckbox}
            />
          </li>
        </ul>
        <h2 className={styles.searchSectionFormFiltersTitle}>Vehicle type</h2>
        <hr className={styles.searchSectionFormFiltersHr} />
        <ul className={styles.searchSectionFormFiltersContainer}>
          <li className={styles.searchSectionFormFiltersItem}>
            <label
              className={styles.searchSectionFormFiltersItemLabel}
              htmlFor="van"
            >
              <svg className={styles.searchSectionFormIcon}>
                <use xlinkHref={svg + "#icon-van"} />
              </svg>
              Van
            </label>
            <input
              {...register("van")}
              type="checkbox"
              id="van"
              value="true"
              className={styles.searchSectionFormCheckbox}
            />
          </li>
          <li className={styles.searchSectionFormFiltersItem}>
            <label
              className={styles.searchSectionFormFiltersItemLabel}
              htmlFor="integrated"
            >
              <svg className={styles.searchSectionFormIcon}>
                <use xlinkHref={svg + "#icon-integrated"} />
              </svg>
              Fully Integrated
            </label>
            <input
              {...register("integrated")}
              type="checkbox"
              id="integrated"
              value="true"
              className={styles.searchSectionFormCheckbox}
            />
          </li>
          <li className={styles.searchSectionFormFiltersItem}>
            <label
              className={styles.searchSectionFormFiltersItemLabel}
              htmlFor="alcove"
            >
              <svg className={styles.searchSectionFormIcon}>
                <use xlinkHref={svg + "#icon-alcove"} />
              </svg>
              Alcove
            </label>
            <input
              {...register("alcove")}
              type="checkbox"
              id="alcove"
              value="true"
              className={styles.searchSectionFormCheckbox}
            />
          </li>
        </ul>
      </div>
      <button className={styles.searchSectionFormButton} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchSection;

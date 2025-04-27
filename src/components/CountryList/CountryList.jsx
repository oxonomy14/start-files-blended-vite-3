import css from './CountryList.module.css';

const CountryList = ({ item }) => {
  return (
    <>
      <div className={css.boxCountryList}>
        <div className={css.boxItem}>
          <h2>{item.country}</h2>
        </div>
        <div className={css.boxItem}>
          <img className={css.flagCountry} src={item.flag} alt={item.country} />
        </div>

        <div className={css.boxItem}>
          <p>
            <span>Populations:</span> {item.population}
          </p>
        </div>
        <div className={css.boxItem}>
          <p>
            <span>Languages:</span> {Object.values(item.languages).join(', ')}
          </p>
        </div>
      </div>
    </>
  );
};
export default CountryList;

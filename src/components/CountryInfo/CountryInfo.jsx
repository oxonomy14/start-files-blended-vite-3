import styles from './CountryInfo.module.css';
// {
// flag,
// capital,
// countryName,
// languages = [],
// population,
// }

const CountryInfo = ({
  flag,
  capital,
  countryName,
  population,
  languages = [],
}) => {
  const formatPopulation = num => {
    if (!num) return 'No data';
    return num.toLocaleString('en-US').replace(/,/g, ' ');
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.flag}>
          <img className={styles.img} src={flag} alt={countryName} />
        </div>
        <div className={styles.box}>
          <h3 className={styles.capital}>
            Capital: <span className={styles.accent}>{capital}</span>
          </h3>

          <h1 className={styles.title}>
            {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
          </h1>

          <p className={styles.details}>
            Population:{' '}
            <span className={styles.accent}>
              {formatPopulation(population)}
            </span>
          </p>

          <p className={styles.details}>
            Languages:
            <span className={styles.accent}> {languages.join(', ')}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;

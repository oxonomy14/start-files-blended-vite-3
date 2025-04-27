import styles from './CountryInfo.module.css';
// {
// flag,
// capital,
// countryName,
// languages = [],
// population,
// }

const CountryInfo = ({country}) => {
  return (
    <>
    <h2>CountryInfo</h2>
     <div className={styles.wrapper}>
      <div className={styles.flag}>
         <img className={styles.img} src={} alt={} />
       </div>
       <div className={styles.box}>
         <h3 className={styles.capital}>
          Capital: <span className={styles.accent}>{}</span>
        </h3>

         <h1 className={styles.title}>
           {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
         </h1>

        <p className={styles.details}>
           Population: <span className={styles.accent}>{}</span>
         </p>

         <p className={styles.details}>
           Languages:{}
          <span className={styles.accent}>{}</span>
         </p>
       </div>
      </div>
      </>
  );
};

export default CountryInfo;

import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import SearchForm from '../components/SearchForm/SearchForm';
import Grid from '../components/Grid/Grid';
import GridItem from '../components/GridItem/GridItem';
import CountryList from '../components/CountryList/CountryList';
import { useEffect, useState } from 'react';
import { fetchByRegion } from '../service/countryApi';
import { useSearchParams, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SearchCountry = () => {
  const [countriesSelect, setCountriesSelect] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;
    const getRegion = async () => {
      try {
        const data = await fetchByRegion(query);
        setCountriesSelect(data);
      } catch (error) {
        console.log(error);
      }
    };
    getRegion();
  }, [query]);

  const handleChangeQuery = newQuery => {
    if (!newQuery) {
      searchParams.delete('query');
      return setSearchParams(searchParams);
    }
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  };

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        <SearchForm onSubmit={handleChangeQuery} />
        <Grid>
          {countriesSelect.map(item => (
            <GridItem key={item.id}>
              <Link to={`/country/${item.id}`} state={location}>
                <CountryList item={item} />
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default SearchCountry;

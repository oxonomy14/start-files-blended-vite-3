import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';

import { getCountries } from '../service/countryApi';

import Grid from '../components/Grid/Grid';
import GridItem from '../components/GridItem/GridItem';
import CountryList from '../components/CountryList/CountryList';
import { Link } from 'react-router-dom';

const Home = () => {
  const [dataCountry, setDataCountry] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const data = await getCountries();
        setDataCountry(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCountry();
  }, []);

  return (
    <Section>
      <Container>
        <Heading title="Home" bottom />
        <Grid>
          {dataCountry.map(item => (
            <GridItem key={item.id}>
              <Link to={`/country/${item.id}`}>
                <CountryList item={item} />
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};
export default Home;

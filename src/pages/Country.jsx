import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import CountryInfo from '../components/CountryInfo/CountryInfo';

import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/countryApi';
import { useParams } from 'react-router-dom';

const Country = () => {
  const [country, setCountry] = useState([]);
  const { countryId } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCountry();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};

export default Country;

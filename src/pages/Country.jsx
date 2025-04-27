import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import GoBackBtn from '../components/GoBackBtn/GoBackBtn';

import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/countryApi';
import { useParams, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

const Country = () => {
  const [country, setCountry] = useState([]);
  const { countryId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/country');

  useEffect(() => {
    const getCountry = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
        // console.log(data.languages.join(', '));
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

        <GoBackBtn goBackRef={goBackRef} />

        <CountryInfo
          flag={country.flag}
          capital={country.capital}
          countryName={country.countryName}
          population={country.population}
          languages={country.languages}
        />
      </Container>
    </Section>
  );
};

export default Country;

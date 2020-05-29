import React from 'react';
import styled from 'styled-components/macro';
import Field from './Field';
import BaseButton from 'Components/ui/Button';
import { sentenceCase } from 'change-case';
import { useLocation } from 'react-router-dom';
import StyledLink from 'Components/navigation/StyledLink';

function Details({ item }) {
  const {
    title,
    genres,
    runtime,
    poster_path,
    overview,
    production_companies,
    imdb_id,
    ...fields
  } = item;

  const { pathname } = useLocation();

  return (
    <Container>
      <Location>
        <StyledLink to="/tmdb/all">Home</StyledLink>
        &nbsp; > &nbsp;
        <StyledLink to={pathname}>{title}</StyledLink>
      </Location>
      <Header>{title}</Header>
      <SubHeader>
        <SubInfo>{genres.map((genre) => genre.name).join(', ')}</SubInfo>
        <SubInfo>{runtime} minutes</SubInfo>
      </SubHeader>
      <Poster src={poster_path} />

      <Controllers>
        <Button outlined>Trailer</Button>

        <Button
          contained
          as="a"
          target="_blank"
          rel="noreferrer noopener"
          href={`https://www.imdb.com/title/${imdb_id}`}
        >
          Visit IMDB
        </Button>
      </Controllers>

      <Overview>{overview}</Overview>

      <FieldsContainer>
        <Field title="Producers">
          {production_companies.map((company) => company.name).join(', ')}
        </Field>
        {Object.entries(fields).map(([label, value], idx) => (
          <Field key={idx} title={sentenceCase(label)}>
            {value}
          </Field>
        ))}
      </FieldsContainer>
    </Container>
  );
}

const Container = styled.div`
  color: ${(p) => p.theme.white};
  font-size: clamp(1.25rem, 2vw, 2rem);
  display: grid;
  padding: 2rem 1rem;
  grid-template-columns: 40vw auto;
  gap: 1rem;
  grid-template-areas:
    'location location'
    'header   header'
    'poster   subheader'
    'poster   fields'
    'controllers   controllers'
    'overview overview';

  @media (min-width: ${(p) => p.theme.breakpoints.xs}) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'location location'
      'poster   header'
      'poster   subheader'
      'poster   overview'
      'poster   fields'
      'controllers   controllers';
  }

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    grid-template-areas:
      'location location'
      'subheader  controllers'
      'header     header'
      'overview   overview'
      'fields     fields';

    width: 60vw;
  }
`;

const Location = styled.p`
  filter: brightness(0.8);
  font-style: italic;
  grid-column: auto/span 2;
`;
const Header = styled.h1`
  grid-area: header;
`;

const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: subheader;

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
  }
`;
const SubInfo = styled.p`
  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    margin-right: 2rem;
  }
`;

const Poster = styled.img`
  grid-area: poster;
  max-width: 100%;

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    display: none;
  }
`;

const Controllers = styled.div`
  grid-area: controllers;
  display: flex;
  align-items: center;
  justify-content: space-around;

  button:first-child {
    margin-right: 1rem;
  }
`;

const Button = styled(BaseButton)`
  border-radius: 5rem;
  padding: 1rem;
  width: 50%;
  text-decoration: none;
`;

const Overview = styled.div`
  font-style: italic;
  font-size: inherit;
  filter: brightness(0.8);
  grid-area: overview;
`;

const FieldsContainer = styled.div`
  display: grid;
  grid-area: fields;
`;

export default Details;

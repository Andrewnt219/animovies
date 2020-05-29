import React from 'react';
import styled from 'styled-components/macro';
import Field from './Field';
import BaseButton from 'Components/ui/Button';
import { sentenceCase } from 'change-case';
import { useLocation } from 'react-router-dom';
import StyledLink from 'Components/navigation/StyledLink';

function Details({ item, trailerId }) {
  const {
    title,
    genres,
    first_air_date,
    original_name,
    runtime,
    poster_path,
    overview,
    production_companies,
    imdb_id,
    homepage,
    ...fields
  } = item;

  const { pathname } = useLocation();

  return (
    <Container>
      {trailerId && (
        <Trailer
          src={`https://www.youtube.com/embed/${trailerId}`}
          title={title}
        ></Trailer>
      )}
      <Location>
        <StyledLink to="/tmdb/all">Home</StyledLink>
        &nbsp; > &nbsp;
        <StyledLink to={pathname}>{title || original_name}</StyledLink>
      </Location>
      <Header>{title || original_name}</Header>
      <SubHeader>
        <SubInfo>{genres.map((genre) => genre.name).join(', ')}</SubInfo>
        <SubInfo>{runtime || 'N/A'} minutes</SubInfo>
      </SubHeader>
      <Poster src={poster_path} />

      <Controllers>
        <Button
          outlined
          as="a"
          target="_blank"
          rel="noreferrer noopener"
          href={homepage}
        >
          Site
        </Button>

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
  gap: min(2rem, 3vw);
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
      'location   location    trailer'
      'subheader  controllers trailer'
      'header     header      trailer'
      'overview   overview    trailer'
      'fields     fields      trailer';
  }

  @media (min-width: ${(p) => p.theme.breakpoints.lg}) {
    grid-template-columns: auto auto 40vw;
  }
`;

const Location = styled.p`
  filter: brightness(0.8);
  font-style: italic;
  grid-column: auto/span 2;
`;
const Header = styled.h1`
  grid-area: header;
  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    color: ${(p) => p.theme.primary};
    text-shadow: 2px 2px #000;
  }
`;

const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: subheader;

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    flex-direction: row;
    align-items: center;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
`;
const SubInfo = styled.p`
  margin-bottom: 1rem;

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    margin-right: 2rem;
    margin-bottom: 0;
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
  width: 40%;
  text-decoration: none;

  cursor: ${(p) => p.disabled && 'not-allowed'};
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
  row-gap: 1rem;
`;

const Trailer = styled.iframe`
  display: none;

  @media (min-width: ${(p) => p.theme.breakpoints.lg}) {
    position: relative;
    display: block;
    grid-area: trailer;
    margin-left: 2rem;
  }
`;

export default Details;

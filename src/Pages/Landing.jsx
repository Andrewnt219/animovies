import React from 'react';
import styled from 'styled-components/macro';
import Backdrop from 'Components/ui/Backdrop';
import bg from 'Assets/bg.jpg';
import MenuBar from 'Components/landingPage/LandingMenuBar';
import SearchBar from 'Components/landingPage/SearchBar';
import BrandName from 'Components/landingPage/BrandName';
import Flex from 'Components/container/Flex';
import { motion } from 'framer-motion';
import LandingButton from 'Components/landingPage/LandingButton';
import { withRouter } from 'react-router-dom';

const Layout = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: url(${(p) => getBackground(p.theme.name).small}) center 4rem
    no-repeat;

  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    background: url(${(p) => getBackground(p.theme.name).large}) center
      no-repeat;
  }
`;

const Main = styled(Flex)`
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  justify-content: space-between;

  & > * {
    margin-bottom: 2rem;
  }
`;

const fontSize = 'max(2vw, 1.5rem)';

function Landing(props) {
  return (
    <Layout
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0.7 }}
    >
      <Backdrop index={0} />

      <MenuBar />

      <Main direction="column">
        <BrandName />

        <SearchBar fontSize={fontSize} />

        <LandingButton
          to={{ pathname: props.location.pathname + '/all' }}
          fontSize={fontSize}
        >
          Browse all
        </LandingButton>
      </Main>
    </Layout>
  );
}

function getBackground(theme) {
  return theme === 'movie'
    ? {
        small:
          'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
        large: bg,
      }
    : {
        small: 'https://static.zerochan.net/Nagi.no.Asukara.full.1657636.jpg',
        large:
          'https://vignette.wikia.nocookie.net/makotoshinkai/images/6/64/Weathering-02.jpg/revision/latest?cb=20190528233137',
      };
}

export default withRouter(Landing);

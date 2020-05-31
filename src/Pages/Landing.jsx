/* --------------------------------- IMPORT --------------------------------- */
import React from 'react';
import styled from 'styled-components/macro';
import { motion } from 'framer-motion';
import { withRouter } from 'react-router-dom';

import bg from 'Assets/bg.jpg';

import Backdrop from 'Components/ui/Backdrop';
import LandingAppBar from 'Components/landingPage/LandingAppBar';
import SearchBar from 'Components/landingPage/SearchBar';
import LandingLogo from 'Components/landingPage/LandingLogo';
import LandingButton from 'Components/landingPage/LandingButton';

import Flex from 'Components/container/Flex';
import useTitle from 'Hooks/useTitle';

/* --------------------------------- Styling -------------------------------- */
// * Landing page layout
const Layout = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: url(${(p) => getBackground(p.api).small}) center 4rem no-repeat;

  /* Change to a bigger background */
  @media screen and (min-width: ${(p) => p.theme.breakpoints.md}) {
    background: url(${(p) => getBackground(p.api).large}) center no-repeat;
  }
`;

// * Container for main content
const Main = styled(Flex)`
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70vw;
  justify-content: space-between;
  height: 50vmin;
  z-index: ${(p) => p.theme.zIndex.top};
`;

// * fontSize for SearchBar (also SearchIcon) and Button
const fontSize = 'max(2vw, 1.5rem)';

/* -------------------------------- Component ------------------------------- */
// NOTE Render the landing page
// location from Router
function Landing({ location, match }) {
  useTitle('Welcome to AniMovies');
  return (
    <Layout
      // * These are for animation
      // TODO - set App to motion div in order for exit to work
      key={location.pathname}
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.25 }}
      // exit={{ opacity: 0.7, y: 100 }}
      //
      api={match.params.api}
    >
      <Backdrop index={1} />

      {/* <LandingAppBar /> */}

      <Main direction="column">
        <LandingLogo />

        <SearchBar fontSize={fontSize} />

        <LandingButton
          to={{ pathname: location.pathname + '/all' }}
          fontSize={fontSize}
        >
          Browse all
        </LandingButton>
      </Main>
    </Layout>
  );
}

/* --------------------------------- HELPERS -------------------------------- */

// NOTE return the url/path of large and small backgrounds for each theme
// @param theme the cu
function getBackground(api) {
  return api === 'jikan'
    ? {
        small: 'https://static.zerochan.net/Nagi.no.Asukara.full.1657636.jpg',
        large:
          'https://vignette.wikia.nocookie.net/makotoshinkai/images/6/64/Weathering-02.jpg/revision/latest?cb=20190528233137',
      }
    : {
        small:
          'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80',
        large: bg,
      };
}

export default withRouter(Landing);

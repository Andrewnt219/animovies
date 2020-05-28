// // CAUTION I know this is Sahara level DRY, but I'm learning the most optimal way
// /* --------------------------------- IMPORT --------------------------------- */
// import React, { useState } from 'react';
// import styled from 'styled-components/macro';

// import {
//   fetchCollection,
//   collectionIsLoadingSelector,
//   collectionsSelector,
// } from 'Features/collectionSlice';

// import NowPlayingSlider from 'Components/moviePage/nowPlayingSlider/NowPlayingSlider';
// import MainLayout from 'HOC/MainLayout';
// import Collection from 'Components/moviePage/Collection/Collection';
// import ItemContext from 'Context/ItemContext';
// import { useFetch } from 'Hooks/useFetch';

// /* -------------------------------- COMPONENT ------------------------------- */
// // NOTE Render the page at /all
// function AnimePage() {
//   const [{ animes, mangas }, isLoading] = useFetch(
//     fetchCollection,
//     collectionsSelector,
//     collectionIsLoadingSelector
//   );

//   // Except the nowPlaying movies
//   const ANIME_MENUS = extractSubCollection(animes);
//   // tvSeries version
//   const MANGA_MENUS = extractSubCollection(mangas);

//   // because useState won't change value after the first rener
//   // initial value is the first SUB_MOVIE_NAME alphabetically
//   const [activeAnimeCollection, setActiveAnimeCollection] = useState('airing');
//   // tvSeries version
//   const [activeMangaCollection, setActiveMangaCollection] = useState('manga');

//   return isLoading ? (
//     <div>Loading...</div>
//   ) : (
//     <MainLayout>
//       <MoviePageContainer>
//         <NowPlayingSlider movies={animes.airing} />

//         <ItemContext.Provider value="anime">
//           <Collection
//             header={{
//               sectionName: 'Animes',
//               subMenuNames: ANIME_MENUS,
//               activeMenu: activeAnimeCollection,
//               setActiveMenu: setActiveAnimeCollection,
//             }}
//             collection={animes[activeAnimeCollection]}
//           />
//         </ItemContext.Provider>

//         <ItemContext.Provider value="manga">
//           <Collection
//             header={{
//               sectionName: 'Mangas',
//               subMenuNames: MANGA_MENUS,
//               activeMenu: activeMangaCollection,
//               setActiveMenu: setActiveMangaCollection,
//             }}
//             collection={mangas[activeMangaCollection]}
//           />
//         </ItemContext.Provider>
//       </MoviePageContainer>
//     </MainLayout>
//   );
// }

// const MoviePageContainer = styled.div`
//   display: grid;
//   row-gap: 2rem;
// `;

// function extractSubCollection(collection) {
//   return Object.keys(collection).sort();
// }

// export default AnimePage;

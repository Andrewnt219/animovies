import React, { useEffect } from 'react';
import MainLayout from 'HOC/MainLayout';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
  // fetchJikanDetail,
  fetchTmdbDetail,
  activeItemSelector,
  activeItemIsLoadingSelector,
} from 'Features/activeItemSlice';
import Collection from 'Components/moviePage/Collection/Collection';
import BaseBackdropImg from 'Components/ui/BackdropImg';
import Details from 'Components/itemDetail/Details';
import _ from 'lodash';
import LoadingIndicator from 'Components/ui/LoadingIndicator/LoadingIndicator';
import useTitle from 'Hooks/useTitle';

// NOTE renders ItemDetail page, with a backdrop, info and recommendations
function ItemDetail() {
  const { api, itemType, itemId } = useParams();
  const dispatch = useDispatch();
  const { itemDetail, videos, recommendations } = useSelector(
    activeItemSelector
  );
  const isLoading = useSelector(activeItemIsLoadingSelector);

  useTitle(itemDetail?.title || itemDetail?.original_name);
  useEffect(() => {
    const itemParams = { itemType, itemId };
    switch (api) {
      case 'tmdb':
        dispatch(fetchTmdbDetail(itemParams));
        break;

      // case 'jikan':
      //   dispatch(fetchJikanDetail(itemParams));
      //   break;

      default:
        throw new Error('Bad request!');
    }
  }, [api, itemType, itemId, dispatch]);

  return isLoading ? (
    <LoadingIndicator />
  ) : (
    <MainLayout>
      <BackdropImg
        src={itemDetail.backdrop_path}
        width="100vw"
        height="100vmin"
        //
        rgbaValue={0.8}
      ></BackdropImg>

      <ItemDetailContainer>
        <Details
          trailerId={videos[0]?.key}
          item={_.pick(itemDetail, [
            'title',
            'original_name',
            'first_air_date',
            'overview',
            'genres',
            'runtime',
            'poster_path',
            'vote_average',
            'popularity',
            'release_date',

            'imdb_id',
            'homepage',
          ])}
        />

        <Collection
          header={{
            sectionName: 'Recommendations',
          }}
          collection={recommendations}
        />
      </ItemDetailContainer>
    </MainLayout>
  );
}

const BackdropImg = styled(BaseBackdropImg)`
  position: relative;

  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const ItemDetailContainer = styled.div`
  @media (min-width: ${(p) => p.theme.breakpoints.sm}) {
    position: relative;
    top: 0;
    left: 0;
  }
`;

export default ItemDetail;

import React, { useEffect } from 'react';
import MainLayout from 'HOC/MainLayout';
import styled from 'styled-components/macro';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
  fetchJikanDetail,
  fetchTmdbDetail,
  activeItemSelector,
  activeItemIsLoadingSelector,
} from 'Features/activeItemSlice';
import Collection from 'Components/moviePage/Collection/Collection';
import BackdropImg from 'Components/ui/BackdropImg';

function ItemDetail() {
  const { api, itemType, itemId } = useParams();
  const dispatch = useDispatch();
  const { itemDetail, videos, recommendations } = useSelector(
    activeItemSelector
  );
  const isLoading = useSelector(activeItemIsLoadingSelector);

  useEffect(() => {
    const itemParams = { itemType, itemId };
    switch (api) {
      case 'tmdb':
        dispatch(fetchTmdbDetail(itemParams));
        break;

      case 'jikan':
        dispatch(fetchJikanDetail(itemParams));
        break;

      default:
        throw new Error('Bad request!');
    }
  }, [api, itemType, itemId, dispatch]);

  return isLoading ? (
    <div>LOADING...</div>
  ) : (
    <MainLayout>
      <BackdropImg
        src={itemDetail.backdrop_path}
        width="100vw"
        height="100vmin"
      />
      {/* <Details></Details>
      <Collection /> */}
    </MainLayout>
  );
}

export default ItemDetail;

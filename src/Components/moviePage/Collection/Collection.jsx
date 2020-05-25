import React from 'react';
import CollectionHeader from './CollectionHeader';
import CollectionContent from './CollectionContent';

function Collection({ header, collection }) {
  return (
    <div>
      <CollectionHeader {...header} />
      <CollectionContent collection={collection} />
    </div>
  );
}

export default Collection;

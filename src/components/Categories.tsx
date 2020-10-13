import React, {useContext} from 'react';
import Layout from '../pages/Layout';

import {
  Grid,
  SearchBar,
  SearchContext,
  SearchContextManager, 
  SuggestionBar,
} from '@giphy/react-components'

const SearchExperience = () => {
  const { fetchGifs, searchKey } = useContext(SearchContext)
  return (
  <>
    <SearchBar />
    <br/>
    <SuggestionBar />
    <Grid key={searchKey}  columns={3} width={400} fetchGifs={fetchGifs} />
  </>
  )
}

function Trending() {
  
  return (
    <React.Fragment>
      <Layout>
        <SearchContextManager apiKey={'mbRWHlb3QJB1cjG4nQovpVT4iazco7cZ'}>
            <SearchExperience />
        </SearchContextManager>
      </Layout>
    </React.Fragment>
  );
}

export default Trending;

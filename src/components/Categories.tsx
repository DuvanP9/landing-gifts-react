import React, {useContext} from 'react';
import Layout from '../pages/Layout';

import {
  Grid, // our UI Component to display the results
  SearchBar, // the search bar the user will type into
  SearchContext, // the context that wraps and connects our components
  SearchContextManager, // the context manager, includes the Context.Provider
  SuggestionBar, // an optional UI component that displays trending searches and channel / username results
} from '@giphy/react-components'

const SearchExperience = () => {
  const { fetchGifs, searchKey } = useContext(SearchContext)
  return (
  <>
    <SearchBar />
    <SuggestionBar />
    <Grid key={searchKey} columns={3} width={800} fetchGifs={fetchGifs} />
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

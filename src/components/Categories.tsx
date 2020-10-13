import React, {useContext, useState} from 'react';
import Layout from '../pages/Layout';
import useStyles from './styles/Categories';
import ResizeObserver from "react-resize-observer";
import {API_KEY} from '../settings'
import {
  Grid,
  SearchBar,
  SearchContext,
  SearchContextManager, 
  SuggestionBar,
} from '@giphy/react-components'

const SearchExperience = () => {
  const { fetchGifs, searchKey } = useContext(SearchContext)
  const [width, setWidth] = useState(window.innerWidth);
  const classes = useStyles();
  
  return (
  <>
    <div className={classes.search}>
      <SearchBar />
    </div>
      <SuggestionBar />
    <div className={classes.gifs}>
      <Grid key={searchKey}  columns={3} width={width} fetchGifs={fetchGifs} />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
    </div>
  </>
  )
}

function Categories() {
  
  return (
    <React.Fragment>
      <Layout>
        <SearchContextManager apiKey={API_KEY}>
            <SearchExperience />
        </SearchContextManager>
      </Layout>
    </React.Fragment>
  );
}

export default Categories;

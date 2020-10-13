import React from 'react';
import useStyles from "./styles/Home"
import Layout from '../pages/Layout';

import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

const gf = new GiphyFetch('mbRWHlb3QJB1cjG4nQovpVT4iazco7cZ')
const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })

function Trending() {
  const classes = useStyles();

  return (
      <React.Fragment>
        <Layout>
          <Grid width={800} columns={3} gutter={6} fetchGifs={fetchGifs} />,
        </Layout>
      </React.Fragment>
  );
}

export default Trending;

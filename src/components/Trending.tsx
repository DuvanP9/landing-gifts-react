import React from 'react';
import useStyles from "./styles/Trending"
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
          <div className={classes.container}>
            <Grid width={400} columns={3} fetchGifs={fetchGifs} />,
          </div>
        </Layout>
      </React.Fragment>
  );
}

export default Trending;

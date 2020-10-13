import React from 'react';
import Layout from '../pages/Layout';
import { Carousel } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import {API_KEY} from '../settings'

const gf = new GiphyFetch(API_KEY)

const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })

function Random() {

  return (
      <React.Fragment>
        <Layout>
          <Carousel gifHeight={200} gutter={6} fetchGifs={fetchGifs} />
        </Layout>
      </React.Fragment>
  );
}

export default Random;

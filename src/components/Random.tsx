import React from 'react';
import Layout from '../pages/Layout';
import { Carousel, GifOverlayProps } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import useStyles from "./styles/Random";

const gf = new GiphyFetch('mbRWHlb3QJB1cjG4nQovpVT4iazco7cZ')

const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })

const Overlay = ({ gif, isHovered }: GifOverlayProps) => {
  const classes = useStyles();
  return <div className={classes.overlay}>{isHovered ? gif.id : ''}</div>
}

function Random() {

  return (
      <React.Fragment>
        <Layout>
          <Carousel gifHeight={200} gutter={6} fetchGifs={fetchGifs} />
          <Carousel gifHeight={200} fetchGifs={fetchGifs} overlay={Overlay} />
        </Layout>
      </React.Fragment>
  );
}

export default Random;

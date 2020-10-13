import React, {useState} from 'react';
import Layout from '../pages/Layout';
import ResizeObserver from "react-resize-observer";
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import {API_KEY} from '../settings'

const gf = new GiphyFetch(API_KEY);

interface ITrendingProps {
  onGifClick: () => void;
}

const Trending: React.FC<ITrendingProps> = ({ onGifClick }) => {
  const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 });
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <>
      <Layout>
        <Grid
          onGifClick={onGifClick}
          fetchGifs={fetchGifs}
          width={width}
          columns={3}
          gutter={6}
        />
        <ResizeObserver
          onResize={({ width }) => {
            setWidth(width);
          }}
        />
      </Layout>
    </>
  );
}

export default Trending;

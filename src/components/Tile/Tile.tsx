import {
  TileWrapper,
  TileArtwork,
  TileTitle,
  TileArtworkWrapper,
  TileSubtitle,
} from './Tile.style';
import React from 'react';

type TileProps = {
  /* The main text of the tile */
  title: string;

  /* The secondary text of the tile */
  subtitle?: string;

  /* The URL of the image related to this tile */
  imageUrl?: string;

  /* The shape of this tile. Can be a circle or a square */
  shape?: 'square' | 'circle';
};

const Tile = ({ title, subtitle, imageUrl, shape = 'square' }: TileProps) => (
  <TileWrapper>
    <TileArtworkWrapper shape={shape}>
      <TileArtwork source={{ uri: imageUrl || '' }} />
    </TileArtworkWrapper>
    <TileTitle>{title}</TileTitle>
    {subtitle && <TileSubtitle>{title}</TileSubtitle>}
  </TileWrapper>
);

export default Tile;

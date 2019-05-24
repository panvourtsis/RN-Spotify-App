import styled from '@emotion/native';

export const TileWrapper = styled.TouchableOpacity`
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`;

export const TileArtworkWrapper = styled.View`
  overflow: hidden;
  border-radius: ${(props: { shape: 'circle' | 'square' }) =>
    props.shape === 'circle' ? '200px' : 0};
`;

export const TileArtwork = styled.Image`
  background-color: #555;
  width: 150px;
  height: 150px;
`;

export const TileTitle = styled.Text`
  margin-top: 10px;
  color: white;
  text-align: center;
  font-size: 11px;
  font-weight: bold;
`;

export const TileSubtitle = styled.Text`
  margin-top: 3px;
  color: #aaa;
  text-align: center;
  font-size: 11px;
`;

export const SectionTitle = styled.Text`
  font-size: 14px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

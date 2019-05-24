import { css } from '@emotion/native';

export const flex = css`
  flex: 1;
`;

/* centers flex content */
export const flexCenter = css`
  align-items: center;
  justify-content: center;
`;

export const flexCenterVertical = css`
  align-items: center;
`;

export const flexCenterHorizontal = css`
  justify-content: center;
`;

export const flexCenterAll = css`
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const row = css({
  flexDirection: 'row',
});

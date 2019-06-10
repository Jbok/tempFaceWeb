import { css } from 'styled-components';

export const MEDIA_QUERY_PHONE = styles => css`
  @media only screen
    and (max-device-width: 480px)
    and (orientation: portrait) {
    ${styles}
  }
`;

export const MEDIA_QUERY_PHONE_LANDSCAPE = styles => css`
  @media only screen
    and (max-device-width: 840px)
    and (orientation: landscape) {
    ${styles}
  }
`;

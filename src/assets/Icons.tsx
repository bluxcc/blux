import React from 'react';

export const InfoIcon = ({ fill = '#1C1B1F' }: { fill?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_0_3021" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
      <rect width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_0_3021)">
      <path
        d="M9.16601 14.1662H10.8327V9.1662H9.16601V14.1662ZM9.99935 7.49953C10.2355 7.49953 10.4334 7.41967 10.5931 7.25995C10.7528 7.10023 10.8327 6.90231 10.8327 6.6662C10.8327 6.43009 10.7528 6.23217 10.5931 6.07245C10.4334 5.91273 10.2355 5.83286 9.99935 5.83286C9.76324 5.83286 9.56532 5.91273 9.4056 6.07245C9.24588 6.23217 9.16601 6.43009 9.16601 6.6662C9.16601 6.90231 9.24588 7.10023 9.4056 7.25995C9.56532 7.41967 9.76324 7.49953 9.99935 7.49953ZM9.99935 18.3329C8.84657 18.3329 7.76324 18.1141 6.74935 17.6766C5.73546 17.2391 4.85352 16.6454 4.10352 15.8954C3.35352 15.1454 2.75977 14.2634 2.32227 13.2495C1.88477 12.2356 1.66602 11.1523 1.66602 9.99953C1.66602 8.84675 1.88477 7.76342 2.32227 6.74953C2.75977 5.73564 3.35352 4.8537 4.10352 4.1037C4.85352 3.3537 5.73546 2.75995 6.74935 2.32245C7.76324 1.88495 8.84657 1.6662 9.99935 1.6662C11.1521 1.6662 12.2355 1.88495 13.2493 2.32245C14.2632 2.75995 15.1452 3.3537 15.8952 4.1037C16.6452 4.8537 17.2389 5.73564 17.6764 6.74953C18.1139 7.76342 18.3327 8.84675 18.3327 9.99953C18.3327 11.1523 18.1139 12.2356 17.6764 13.2495C17.2389 14.2634 16.6452 15.1454 15.8952 15.8954C15.1452 16.6454 14.2632 17.2391 13.2493 17.6766C12.2355 18.1141 11.1521 18.3329 9.99935 18.3329ZM9.99935 16.6662C11.8605 16.6662 13.4368 16.0204 14.7285 14.7287C16.0202 13.437 16.666 11.8606 16.666 9.99953C16.666 8.13842 16.0202 6.56203 14.7285 5.27036C13.4368 3.9787 11.8605 3.33287 9.99935 3.33287C8.13824 3.33287 6.56185 3.9787 5.27018 5.27036C3.97852 6.56203 3.33268 8.13842 3.33268 9.99953C3.33268 11.8606 3.97852 13.437 5.27018 14.7287C6.56185 16.0204 8.13824 16.6662 9.99935 16.6662Z"
        fill={fill}
      />
    </g>
  </svg>
);
export const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_117_204" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
      <rect width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_117_204)">
      <path
        d="M6.67929 18.0448L5.49658 16.862L12.3587 9.99996L5.49658 3.13788L6.67929 1.95517L14.7241 9.99996L6.67929 18.0448Z"
        fill="#5F6367"
      />
    </g>
  </svg>
);
export const ArrowLeft = () => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_170_30135" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
      <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_170_30135)">
      <path
        d="M16 22.5L6 12.5L16 2.5L17.775 4.275L9.55 12.5L17.775 20.725L16 22.5Z"
        fill="#5F6367"
      />
    </g>
  </svg>
);
export const Close = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_150_17" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
      <rect width="22" height="22" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_150_17)">
      <path
        d="M4.4 19.25L2.75 17.6L9.35 11L2.75 4.4L4.4 2.75L11 9.35L17.6 2.75L19.25 4.4L12.65 11L19.25 17.6L17.6 19.25L11 12.65L4.4 19.25Z"
        fill="#5F6367"
      />
    </g>
  </svg>
);
export const Loading = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="animate-spin"
  >
    <mask id="mask0_2054_770" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
      <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2054_770)">
      <path
        d="M12.497 21.5C11.1965 21.5 9.96875 21.2508 8.81375 20.7525C7.65892 20.2542 6.65042 19.5739 5.78825 18.7118C4.92608 17.8496 4.24583 16.8411 3.7475 15.6863C3.24917 14.5313 3 13.3035 3 12.003C3 10.6867 3.24967 9.45358 3.749 8.30375C4.24833 7.15375 4.92817 6.14867 5.7885 5.2885C6.64867 4.42817 7.65733 3.74833 8.8145 3.249C9.97167 2.74967 11.2002 2.5 12.5 2.5V4C10.2833 4 8.39583 4.77917 6.8375 6.3375C5.27917 7.89583 4.5 9.78333 4.5 12C4.5 14.2167 5.27917 16.1042 6.8375 17.6625C8.39583 19.2208 10.2833 20 12.5 20C14.7167 20 16.6042 19.2208 18.1625 17.6625C19.7208 16.1042 20.5 14.2167 20.5 12H22C22 13.2998 21.7503 14.5283 21.251 15.6855C20.7517 16.8427 20.0718 17.8513 19.2115 18.7115C18.3513 19.5718 17.3462 20.2517 16.1962 20.751C15.0464 21.2503 13.8133 21.5 12.497 21.5Z"
        fill="#0C1083"
      />
    </g>
  </svg>
);
export const GreenCheck = () => (
  <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2045_4252" maskUnits="userSpaceOnUse" x="0" y="0" width="48" height="49">
      <rect y="0.5" width="48" height="48" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2045_4252)">
      <path
        d="M21.1002 33.6335L35.2337 19.5L32.7667 17.0665L21.1002 28.7335L15.2002 22.8335L12.7667 25.2665L21.1002 33.6335ZM24.0002 44.5C21.2559 44.5 18.6671 43.975 16.2337 42.925C13.8004 41.875 11.6781 40.4445 9.86674 38.6335C8.05574 36.8222 6.62524 34.6998 5.57524 32.2665C4.52524 29.8332 4.00024 27.2443 4.00024 24.5C4.00024 21.7333 4.52524 19.1333 5.57524 16.7C6.62524 14.2667 8.05574 12.15 9.86674 10.35C11.6781 8.55 13.8004 7.125 16.2337 6.075C18.6671 5.025 21.2559 4.5 24.0002 4.5C26.7669 4.5 29.3669 5.025 31.8002 6.075C34.2336 7.125 36.3502 8.55 38.1502 10.35C39.9502 12.15 41.3752 14.2667 42.4252 16.7C43.4753 19.1333 44.0002 21.7333 44.0002 24.5C44.0002 27.2443 43.4753 29.8332 42.4252 32.2665C41.3752 34.6998 39.9502 36.8222 38.1502 38.6335C36.3502 40.4445 34.2336 41.875 31.8002 42.925C29.3669 43.975 26.7669 44.5 24.0002 44.5Z"
        fill="#56C162"
      />
    </g>
  </svg>
);
export const LogOut = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2054_469" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2054_469)">
      <path
        d="M20.3713 12.75H8.577V11.25H20.3713L18.552 9.43075L19.6057 8.34625L23.2595 12L19.6057 15.6538L18.552 14.5693L20.3713 12.75ZM15.202 8.86525V5H5V19H15.202V15.1348H16.702V20.5H3.5V3.5H16.702V8.86525H15.202Z"
        fill="#666666"
      />
    </g>
  </svg>
);
export const Copy = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2054_791" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2054_791)">
      <path
        d="M7.25 17.5V2.5H19.25V17.5H7.25ZM8.75 16H17.75V4H8.75V16ZM3.75 21V6.30775H5.25V19.5H15.4423V21H3.75Z"
        fill="#4D4D4D"
      />
    </g>
  </svg>
);
export const History = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2054_838" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2054_838)">
      <path
        d="M12 21.5C9.54899 21.5 7.42215 20.6913 5.61949 19.074C3.81682 17.4567 2.79365 15.432 2.54999 13H4.07499C4.31865 15.0167 5.19557 16.6875 6.70574 18.0125C8.21607 19.3375 9.98082 20 12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C10.4962 4 9.11249 4.38625 7.84899 5.15875C6.58549 5.93108 5.61149 6.99033 4.92699 8.3365H7.88449V9.8365H2.75774C3.26024 7.68267 4.37207 5.9215 6.09324 4.553C7.8144 3.18433 9.78332 2.5 12 2.5C13.3142 2.5 14.5492 2.74933 15.705 3.248C16.8608 3.74667 17.8662 4.42342 18.7212 5.27825C19.5762 6.13308 20.2531 7.13833 20.7517 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2506 14.5473 20.7517 15.7035C20.2531 16.8597 19.5762 17.8653 18.7212 18.7205C17.8662 19.5757 16.8608 20.2528 15.705 20.7518C14.5492 21.2506 13.3142 21.5 12 21.5ZM14.723 15.777L11.25 12.3025V7.3655H12.75V11.6962L15.7672 14.723L14.723 15.777Z"
        fill="#0C1083"
      />
    </g>
  </svg>
);
export const Send = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2054_817" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2054_817)">
      <path
        d="M3.5 19.25V4.75L20.7115 12L3.5 19.25ZM5 17L16.85 12L5 7V10.6923L10.423 12L5 13.3077V17Z"
        fill="#0C1083"
      />
    </g>
  </svg>
);
export const ArrowDropUp = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2204_971" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
      <rect width="16" height="16" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2204_971)">
      <path d="M5.06372 11.8333L7.99955 8.89746L10.9354 11.8333H5.06372Z" fill="#0C1083" />
    </g>
  </svg>
);

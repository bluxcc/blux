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
export const ArrowRight = ({ fill = '#5F6367' }: { fill?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_117_204" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
      <rect width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_117_204)">
      <path
        d="M6.67929 18.0448L5.49658 16.862L12.3587 9.99996L5.49658 3.13788L6.67929 1.95517L14.7241 9.99996L6.67929 18.0448Z"
        fill={fill}
      />
    </g>
  </svg>
);
export const ArrowLeft = ({ fill = '#5F6367' }: { fill?: string }) => (
  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_170_30135" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
      <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_170_30135)">
      <path d="M16 22.5L6 12.5L16 2.5L17.775 4.275L9.55 12.5L17.775 20.725L16 22.5Z" fill={fill} />
    </g>
  </svg>
);
export const Close = ({ fill = '#5F6367' }: { fill?: string }) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_150_17" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
      <rect width="22" height="22" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_150_17)">
      <path
        d="M4.4 19.25L2.75 17.6L9.35 11L2.75 4.4L4.4 2.75L11 9.35L17.6 2.75L19.25 4.4L12.65 11L19.25 17.6L17.6 19.25L11 12.65L4.4 19.25Z"
        fill={fill}
      />
    </g>
  </svg>
);
export const Loading = ({ fill = '#0C1083' }: { fill?: string }) => (
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
        fill={fill}
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
export const History = ({ fill = '#0C1083' }: { fill?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2054_838" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2054_838)">
      <path
        d="M12 21.5C9.54899 21.5 7.42215 20.6913 5.61949 19.074C3.81682 17.4567 2.79365 15.432 2.54999 13H4.07499C4.31865 15.0167 5.19557 16.6875 6.70574 18.0125C8.21607 19.3375 9.98082 20 12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C10.4962 4 9.11249 4.38625 7.84899 5.15875C6.58549 5.93108 5.61149 6.99033 4.92699 8.3365H7.88449V9.8365H2.75774C3.26024 7.68267 4.37207 5.9215 6.09324 4.553C7.8144 3.18433 9.78332 2.5 12 2.5C13.3142 2.5 14.5492 2.74933 15.705 3.248C16.8608 3.74667 17.8662 4.42342 18.7212 5.27825C19.5762 6.13308 20.2531 7.13833 20.7517 8.294C21.2506 9.44967 21.5 10.6844 21.5 11.9983C21.5 13.3123 21.2506 14.5473 20.7517 15.7035C20.2531 16.8597 19.5762 17.8653 18.7212 18.7205C17.8662 19.5757 16.8608 20.2528 15.705 20.7518C14.5492 21.2506 13.3142 21.5 12 21.5ZM14.723 15.777L11.25 12.3025V7.3655H12.75V11.6962L15.7672 14.723L14.723 15.777Z"
        fill={fill}
      />
    </g>
  </svg>
);
export const Send = ({ fill = '#0C1083' }: { fill?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2054_817" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2054_817)">
      <path
        d="M3.5 19.25V4.75L20.7115 12L3.5 19.25ZM5 17L16.85 12L5 7V10.6923L10.423 12L5 13.3077V17Z"
        fill={fill}
      />
    </g>
  </svg>
);
export const ArrowDropUp = ({ fill = '#0C1083' }: { fill?: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2204_971" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
      <rect width="16" height="16" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2204_971)">
      <path d="M5.06372 11.8333L7.99955 8.89746L10.9354 11.8333H5.06372Z" fill={fill} />
    </g>
  </svg>
);
export const RedAlert = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="transparent" stroke="#EC2929" />
    <mask id="mask0_2214_3806" maskUnits="userSpaceOnUse" x="8" y="8" width="24" height="24">
      <rect x="8" y="8" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2214_3806)">
      <path
        d="M20 24.7308C20.2288 24.7308 20.4207 24.6533 20.5755 24.4985C20.7303 24.3437 20.8077 24.1518 20.8077 23.923C20.8077 23.6942 20.7303 23.5023 20.5755 23.3475C20.4207 23.1928 20.2288 23.1155 20 23.1155C19.7712 23.1155 19.5793 23.1928 19.4245 23.3475C19.2697 23.5023 19.1923 23.6942 19.1923 23.923C19.1923 24.1518 19.2697 24.3437 19.4245 24.4985C19.5793 24.6533 19.7712 24.7308 20 24.7308ZM19.25 21.077H20.75V15.077H19.25V21.077ZM20.0017 29.5C18.6877 29.5 17.4527 29.2507 16.2965 28.752C15.1403 28.2533 14.1347 27.5766 13.2795 26.7218C12.4243 25.8669 11.7472 24.8617 11.2482 23.706C10.7494 22.5503 10.5 21.3156 10.5 20.0017C10.5 18.6877 10.7493 17.4527 11.248 16.2965C11.7467 15.1403 12.4234 14.1347 13.2783 13.2795C14.1331 12.4243 15.1383 11.7472 16.294 11.2482C17.4497 10.7494 18.6844 10.5 19.9983 10.5C21.3123 10.5 22.5473 10.7493 23.7035 11.248C24.8597 11.7467 25.8653 12.4234 26.7205 13.2783C27.5757 14.1331 28.2528 15.1383 28.7518 16.294C29.2506 17.4497 29.5 18.6844 29.5 19.9983C29.5 21.3123 29.2507 22.5473 28.752 23.7035C28.2533 24.8597 27.5766 25.8653 26.7218 26.7205C25.8669 27.5757 24.8617 28.2528 23.706 28.7518C22.5503 29.2506 21.3156 29.5 20.0017 29.5ZM20 28C22.2333 28 24.125 27.225 25.675 25.675C27.225 24.125 28 22.2333 28 20C28 17.7667 27.225 15.875 25.675 14.325C24.125 12.775 22.2333 12 20 12C17.7667 12 15.875 12.775 14.325 14.325C12.775 15.875 12 17.7667 12 20C12 22.2333 12.775 24.125 14.325 25.675C15.875 27.225 17.7667 28 20 28Z"
        fill="#EC2929"
      />
    </g>
  </svg>
);
export const Upstream = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="transparent" stroke="#00BD81" />
    <mask id="mask0_2212_3318" maskUnits="userSpaceOnUse" x="8" y="8" width="24" height="24">
      <rect x="8" y="8" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2212_3318)">
      <path
        d="M19.25 23.6923H20.7595V19.1365L22.6095 20.9865L23.6538 19.9423L20.0095 16.298L16.3558 19.9423L17.4 20.9865L19.25 19.1365V23.6923ZM20.0017 29.5C18.6877 29.5 17.4527 29.2507 16.2965 28.752C15.1403 28.2533 14.1347 27.5766 13.2795 26.7218C12.4243 25.8669 11.7472 24.8617 11.2482 23.706C10.7494 22.5503 10.5 21.3156 10.5 20.0017C10.5 18.6877 10.7493 17.4527 11.248 16.2965C11.7467 15.1403 12.4234 14.1347 13.2783 13.2795C14.1331 12.4243 15.1383 11.7472 16.294 11.2482C17.4497 10.7494 18.6844 10.5 19.9983 10.5C21.3123 10.5 22.5473 10.7493 23.7035 11.248C24.8597 11.7467 25.8653 12.4234 26.7205 13.2783C27.5757 14.1331 28.2528 15.1383 28.7518 16.294C29.2506 17.4497 29.5 18.6844 29.5 19.9983C29.5 21.3123 29.2507 22.5473 28.752 23.7035C28.2533 24.8597 27.5766 25.8653 26.7218 26.7205C25.8669 27.5757 24.8617 28.2528 23.706 28.7518C22.5503 29.2506 21.3156 29.5 20.0017 29.5ZM20 28C22.2333 28 24.125 27.225 25.675 25.675C27.225 24.125 28 22.2333 28 20C28 17.7667 27.225 15.875 25.675 14.325C24.125 12.775 22.2333 12 20 12C17.7667 12 15.875 12.775 14.325 14.325C12.775 15.875 12 17.7667 12 20C12 22.2333 12.775 24.125 14.325 25.675C15.875 27.225 17.7667 28 20 28Z"
        fill="#00BD81"
      />
    </g>
  </svg>
);
export const MultiOperation = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="transparent" stroke="#00BD81" />
    <mask id="mask0_2494_9033" maskUnits="userSpaceOnUse" x="8" y="8" width="24" height="24">
      <rect x="8" y="8" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2494_9033)">
      <path
        d="M12.577 25.9728C12.0142 25.255 11.5587 24.4749 11.2105 23.6326C10.8625 22.7902 10.6321 21.9126 10.5193 20.9998H12.05C12.15 21.7165 12.3334 22.404 12.6 23.0623C12.8667 23.7206 13.2167 24.3331 13.65 24.8998L12.577 25.9728ZM10.5193 18.9998C10.6398 18.087 10.8722 17.2094 11.2165 16.3671C11.5607 15.5247 12.0206 14.7511 12.5963 14.0461L13.65 15.0998C13.2167 15.6665 12.8667 16.279 12.6 16.9373C12.3334 17.5956 12.15 18.2831 12.05 18.9998H10.5193ZM18.95 29.4498C18.0372 29.3433 17.1638 29.1154 16.3298 28.7661C15.4958 28.4167 14.718 27.9626 13.9963 27.4036L15.05 26.2998C15.6334 26.7331 16.25 27.0915 16.9 27.3748C17.55 27.6581 18.2334 27.8498 18.95 27.9498V29.4498ZM15.1 13.6806L13.9963 12.5961C14.7346 12.0306 15.525 11.5764 16.3673 11.2336C17.2096 10.8906 18.0872 10.6626 19 10.5498V12.0498C18.2834 12.1498 17.5959 12.3366 16.9375 12.6103C16.2792 12.8841 15.6667 13.2409 15.1 13.6806ZM20.95 29.4498V27.9498C21.677 27.8498 22.3729 27.6655 23.0375 27.3968C23.7022 27.1283 24.323 26.7691 24.9 26.3191L26.0038 27.4036C25.2655 27.9792 24.471 28.436 23.6203 28.7738C22.7696 29.1116 21.8795 29.337 20.95 29.4498ZM24.95 13.6998C24.3667 13.2665 23.7417 12.9081 23.075 12.6248C22.4084 12.3415 21.7167 12.1498 21 12.0498V10.5498C21.9129 10.6563 22.793 10.8826 23.6403 11.2288C24.4878 11.5748 25.2756 12.0306 26.0038 12.5961L24.95 13.6998ZM27.4038 25.9536L26.35 24.8998C26.7834 24.3331 27.1334 23.7206 27.4 23.0623C27.6667 22.404 27.85 21.7165 27.95 20.9998H29.4808C29.3603 21.9126 29.1279 22.7902 28.7835 23.6326C28.4394 24.4749 27.9795 25.2486 27.4038 25.9536ZM27.95 18.9998C27.85 18.2831 27.6667 17.5956 27.4 16.9373C27.1334 16.279 26.7834 15.6665 26.35 15.0998L27.423 14.0268C27.9859 14.7446 28.4414 15.5247 28.7895 16.3671C29.1375 17.2094 29.368 18.087 29.4808 18.9998H27.95Z"
        fill="#00BD81"
      />
      <circle cx="20" cy="20" r="3" fill="#00BD81" />
    </g>
  </svg>
);
export const Downstream = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="transparent" stroke="#00BD81" />
    <mask id="mask0_2214_3828" maskUnits="userSpaceOnUse" x="8" y="8" width="24" height="24">
      <rect x="8" y="8" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2214_3828)">
      <path
        d="M20.0095 23.6923L23.6538 20.048L22.6095 19.004L20.7595 20.854V16.298H19.25V20.854L17.4 19.004L16.3558 20.048L20.0095 23.6923ZM20.0017 29.5C18.6877 29.5 17.4527 29.2507 16.2965 28.752C15.1403 28.2533 14.1347 27.5766 13.2795 26.7218C12.4243 25.8669 11.7472 24.8617 11.2482 23.706C10.7494 22.5503 10.5 21.3156 10.5 20.0017C10.5 18.6877 10.7493 17.4527 11.248 16.2965C11.7467 15.1403 12.4234 14.1347 13.2783 13.2795C14.1331 12.4243 15.1383 11.7472 16.294 11.2482C17.4497 10.7494 18.6844 10.5 19.9983 10.5C21.3123 10.5 22.5473 10.7493 23.7035 11.248C24.8597 11.7467 25.8653 12.4234 26.7205 13.2783C27.5757 14.1331 28.2528 15.1383 28.7518 16.294C29.2506 17.4497 29.5 18.6844 29.5 19.9983C29.5 21.3123 29.2507 22.5473 28.752 23.7035C28.2533 24.8597 27.5766 25.8653 26.7218 26.7205C25.8669 27.5757 24.8617 28.2528 23.706 28.7518C22.5503 29.2506 21.3156 29.5 20.0017 29.5ZM20 28C22.2333 28 24.125 27.225 25.675 25.675C27.225 24.125 28 22.2333 28 20C28 17.7667 27.225 15.875 25.675 14.325C24.125 12.775 22.2333 12 20 12C17.7667 12 15.875 12.775 14.325 14.325C12.775 15.875 12 17.7667 12 20C12 22.2333 12.775 24.125 14.325 25.675C15.875 27.225 17.7667 28 20 28Z"
        fill="#00BD81"
      />
    </g>
  </svg>
);
export const Globe = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2265_983" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2265_983)">
      <path
        d="M8.00081 14.3337C7.13248 14.3337 6.31304 14.1672 5.54248 13.8343C4.77193 13.5014 4.09993 13.0482 3.52648 12.4747C2.95293 11.9012 2.4997 11.2292 2.16681 10.4587C1.83393 9.6881 1.66748 8.86866 1.66748 8.00033C1.66748 7.1251 1.83393 6.30394 2.16681 5.53683C2.4997 4.76972 2.95293 4.09944 3.52648 3.52599C4.09993 2.95244 4.77193 2.49921 5.54248 2.16633C6.31304 1.83344 7.13248 1.66699 8.00081 1.66699C8.87604 1.66699 9.6972 1.83344 10.4643 2.16633C11.2314 2.49921 11.9017 2.95244 12.4751 3.52599C13.0487 4.09944 13.5019 4.76972 13.8348 5.53683C14.1677 6.30394 14.3341 7.1251 14.3341 8.00033C14.3341 8.86866 14.1677 9.6881 13.8348 10.4587C13.5019 11.2292 13.0487 11.9012 12.4751 12.4747C11.9017 13.0482 11.2314 13.5014 10.4643 13.8343C9.6972 14.1672 8.87604 14.3337 8.00081 14.3337ZM8.00081 13.3195C8.34104 12.8683 8.62737 12.4132 8.85982 11.9542C9.09226 11.4952 9.28159 10.9934 9.42782 10.449H6.57381C6.72859 11.0106 6.92009 11.5208 7.14832 11.9798C7.37643 12.4388 7.66059 12.8854 8.00081 13.3195ZM6.70982 13.1362C6.45426 12.7695 6.22476 12.3527 6.02132 11.8857C5.81787 11.4185 5.65976 10.9397 5.54698 10.449H3.28548C3.63759 11.1413 4.10981 11.723 4.70215 12.194C5.29448 12.6649 5.9637 12.9789 6.70982 13.1362ZM9.29182 13.1362C10.0379 12.9789 10.7071 12.6649 11.2995 12.194C11.8918 11.723 12.364 11.1413 12.7161 10.449H10.4546C10.3204 10.9439 10.1516 11.4249 9.94815 11.892C9.74482 12.3591 9.52604 12.7738 9.29182 13.1362ZM2.86615 9.44899H5.34448C5.30259 9.20122 5.2722 8.95827 5.25331 8.72016C5.23454 8.48216 5.22515 8.24222 5.22515 8.00033C5.22515 7.75844 5.23454 7.51849 5.25331 7.28049C5.2722 7.04238 5.30259 6.79944 5.34448 6.55166H2.86615C2.80204 6.7781 2.75293 7.01355 2.71881 7.25799C2.68459 7.50244 2.66748 7.74988 2.66748 8.00033C2.66748 8.25077 2.68459 8.49822 2.71881 8.74266C2.75293 8.98711 2.80204 9.22255 2.86615 9.44899ZM6.34431 9.44899H9.65732C9.69909 9.20122 9.72943 8.96044 9.74831 8.72666C9.76709 8.49288 9.77648 8.25077 9.77648 8.00033C9.77648 7.74988 9.76709 7.50777 9.74831 7.27399C9.72943 7.04022 9.69909 6.79944 9.65732 6.55166H6.34431C6.30254 6.79944 6.2722 7.04022 6.25331 7.27399C6.23454 7.50777 6.22515 7.74988 6.22515 8.00033C6.22515 8.25077 6.23454 8.49288 6.25331 8.72666C6.2722 8.96044 6.30254 9.20122 6.34431 9.44899ZM10.6571 9.44899H13.1355C13.1996 9.22255 13.2487 8.98711 13.2828 8.74266C13.317 8.49822 13.3341 8.25077 13.3341 8.00033C13.3341 7.74988 13.317 7.50244 13.2828 7.25799C13.2487 7.01355 13.1996 6.7781 13.1355 6.55166H10.6571C10.699 6.79944 10.7294 7.04238 10.7483 7.28049C10.7671 7.51849 10.7765 7.75844 10.7765 8.00033C10.7765 8.24222 10.7671 8.48216 10.7483 8.72016C10.7294 8.95827 10.699 9.20122 10.6571 9.44899ZM10.4546 5.55166H12.7161C12.3598 4.85077 11.8908 4.2691 11.3091 3.80666C10.7275 3.34433 10.055 3.0281 9.29182 2.85799C9.54737 3.24599 9.7747 3.67038 9.97382 4.13116C10.173 4.59183 10.3333 5.06533 10.4546 5.55166ZM6.57381 5.55166H9.42782C9.27304 4.99433 9.07837 4.48083 8.84382 4.01116C8.60915 3.54149 8.32815 3.09816 8.00081 2.68116C7.67348 3.09816 7.39248 3.54149 7.15781 4.01116C6.92326 4.48083 6.72859 4.99433 6.57381 5.55166ZM3.28548 5.55166H5.54698C5.66831 5.06533 5.82859 4.59183 6.02781 4.13116C6.22693 3.67038 6.45426 3.24599 6.70982 2.85799C5.94226 3.0281 5.26876 3.34544 4.68931 3.80999C4.10976 4.27444 3.64181 4.85499 3.28548 5.55166Z"
        fill="#666666"
      />
    </g>
  </svg>
);
export const SmallEmailIcon = ({ fill = '#0C1083' }: { fill?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2324_772" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
      <rect width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2324_772)">
      <path
        d="M12 1.59619L21.5 7.25369V20.4999H2.5V7.25369L12 1.59619ZM12 12.6499L19.8 7.99994L12 3.34994L4.2 7.99994L12 12.6499ZM12 14.4037L4 9.62294V18.9999H20V9.62294L12 14.4037Z"
        fill={fill}
      />
    </g>
  </svg>
);

export const EmailIcon = ({ fill = '#0C1083' }: { fill?: string }) => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_2097_3575" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
      <rect width="40" height="40" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2097_3575)">
      <path
        d="M20 2.66113L35.8334 12.0903V34.1674H4.16669V12.0903L20 2.66113ZM20 21.0841L33 13.3341L20 5.58405L7.00002 13.3341L20 21.0841ZM20 24.007L6.66669 16.0391V31.6674H33.3334V16.0391L20 24.007Z"
        fill={fill}
      />
    </g>
  </svg>
);

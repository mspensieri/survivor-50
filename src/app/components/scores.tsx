"use client";

import Badge from "react-bootstrap/Badge";
import React, { useContext } from "react";
import { Accordion, Card, Col, Container, Row, Table } from "react-bootstrap";

import { PlayerRankings } from "../providers/types";
import {
  Player,
  PlayerScore,
  RuleSet,
  Team,
  PlayerTribes,
} from "../data/types";
import RuleSetContext from "../context/ruleSetContext";
import { players } from "../data/players";

const styles: Record<string, React.CSSProperties> = {
  badge: {
    width: "100%",
    lineHeight: "inherit",
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  indicatorGreen: {
    color: "var(--green-indicator-color)",
  },
  indicatorRed: {
    color: "var(--red-indicator-color)",
  },
  indicatorNeutral: {
    fontSize: "10pt",
  },
  avatar: {
    borderRadius: "12px",
    marginTop: "20px",
    marginLeft: "16px",
    filter: "var(--upside-down-image-filter)",
    transform: "var(--upside-down-image-transform)",
  },
  name: {
    fontSize: "25pt",
    marginLeft: "16px",
  },
  units: {
    fontSize: "10pt",
  },
  details: {
    position: "absolute",
    top: "74px",
    left: "145px",
  },
  hr: {
    margin: "16px",
    marginTop: "4px",
    marginBottom: "10px",
  },
  leftCard: {
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    minHeight: "215px",
  },
  leftCardSmall: {
    borderBottomRightRadius: "0px",
    borderBottomLeftRadius: "0px",
    marginBottom: "0px",
    minHeight: "215px",
  },
  rightCard: {
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    borderLeft: "0px",
    minHeight: "215px",
  },
  rightCardSmall: {
    borderTopRightRadius: "0px",
    borderTopLeftRadius: "0px",
    borderTop: "0px",
    marginTop: "0px",
  },
  scoreLabel: {
    color: "var(--score-label-color-override)",
    fontWeight: "var(--score-label-font-weight-override)",
  },
  popularityEmoji: {
    filter: "var(--upside-down-image-filter)",
  },
  tribeDetailsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "10px",
    paddingBottom: "5px",
    borderBottom: "1px solid var(--component-text-color-secondary)",
  },
  tribeName: {
    fontSize: "16pt",
  },
  tribeColorIndicator: {
    height: "30px",
    width: "30px",
    borderRadius: "50%",
    border: "2px solid var(--component-text-color-primary)",
  },
};

const tribeColors = {
  [PlayerTribes.ORANGE]: "#fe9824",
  [PlayerTribes.PURPLE]: "#8246fa",
  [PlayerTribes.TEAL]: "#46d1db",
};

const tableCols: Record<string, JSX.Element> = {
  // Standard
  survival: (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto" }}
    >
      <path
        d="M18 11.9999H17.1986C16.3689 11.9999 15.9541 11.9999 15.6102 12.1946C15.2664 12.3893 15.0529 12.745 14.6261 13.4564L14.5952 13.5079C14.1976 14.1706 13.9987 14.502 13.7095 14.4965C13.4202 14.4911 13.2339 14.1525 12.8615 13.4753L11.1742 10.4075C10.8269 9.77606 10.6533 9.46034 10.3759 9.44537C10.0986 9.43039 9.892 9.72558 9.47875 10.3159L9.19573 10.7203C8.75681 11.3473 8.53734 11.6608 8.21173 11.8303C7.88612 11.9999 7.50342 11.9999 6.73803 11.9999H6"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M8.96173 19.3707L9.43571 18.7895L9.43571 18.7895L8.96173 19.3707ZM12 5.49877L11.4509 6.00966C11.5928 6.16215 11.7917 6.24877 12 6.24877C12.2083 6.24877 12.4072 6.16215 12.5491 6.00966L12 5.49877ZM15.0383 19.3707L15.5123 19.952L15.0383 19.3707ZM9.43571 18.7895C7.98585 17.6072 6.29293 16.0568 4.96881 14.3598C3.63045 12.6445 2.75 10.8821 2.75 9.26044H1.25C1.25 11.3862 2.37926 13.4793 3.7862 15.2825C5.20736 17.1039 6.99532 18.7349 8.48775 19.952L9.43571 18.7895ZM2.75 9.26044C2.75 6.53057 4.0079 4.70454 5.60065 4.04191C7.17297 3.38778 9.35285 3.75479 11.4509 6.00966L12.5491 4.98787C10.1473 2.40661 7.32719 1.69899 5.02447 2.65699C2.74218 3.60649 1.25 6.07936 1.25 9.26044H2.75ZM15.5123 19.952C17.0047 18.735 18.7926 17.1039 20.2138 15.2825C21.6207 13.4794 22.75 11.3862 22.75 9.2604H21.25C21.25 10.8821 20.3695 12.6445 19.0312 14.3598C17.7071 16.0568 16.0142 17.6072 14.5643 18.7895L15.5123 19.952ZM22.75 9.2604C22.75 6.07926 21.2578 3.60639 18.9755 2.65691C16.6728 1.69894 13.8527 2.40662 11.4509 4.98787L12.5491 6.00966C14.6472 3.75479 16.827 3.38774 18.3994 4.04184C19.9921 4.70444 21.25 6.53045 21.25 9.2604H22.75ZM8.48775 19.952C9.7587 20.9884 10.641 21.75 12 21.75L12 20.25C11.2785 20.25 10.8287 19.9254 9.43571 18.7895L8.48775 19.952ZM14.5643 18.7895C13.1713 19.9254 12.7216 20.25 12 20.25L12 21.75C13.359 21.75 14.2413 20.9884 15.5123 19.952L14.5643 18.7895Z"
        fill="currentColor"
      />
    </svg>
  ),
  votes: (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
      }}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.26279 3.25871C7.38317 2.12953 8.33887 1.25 9.5 1.25H14.5C15.6611 1.25 16.6168 2.12953 16.7372 3.25871C17.5004 3.27425 18.1602 3.31372 18.7236 3.41721C19.4816 3.55644 20.1267 3.82168 20.6517 4.34661C21.2536 4.94853 21.5125 5.7064 21.6335 6.60651C21.75 7.47348 21.75 8.5758 21.75 9.94339V16.0531C21.75 17.4207 21.75 18.523 21.6335 19.39C21.5125 20.2901 21.2536 21.048 20.6517 21.6499C20.0497 22.2518 19.2919 22.5107 18.3918 22.6317C17.5248 22.7483 16.4225 22.7483 15.0549 22.7483H8.94513C7.57754 22.7483 6.47522 22.7483 5.60825 22.6317C4.70814 22.5107 3.95027 22.2518 3.34835 21.6499C2.74643 21.048 2.48754 20.2901 2.36652 19.39C2.24996 18.523 2.24998 17.4207 2.25 16.0531V9.94339C2.24998 8.5758 2.24996 7.47348 2.36652 6.60651C2.48754 5.7064 2.74643 4.94853 3.34835 4.34661C3.87328 3.82168 4.51835 3.55644 5.27635 3.41721C5.83977 3.31372 6.49963 3.27425 7.26279 3.25871ZM7.26476 4.75913C6.54668 4.77447 5.99332 4.81061 5.54735 4.89253C4.98054 4.99664 4.65246 5.16382 4.40901 5.40727C4.13225 5.68403 3.9518 6.07261 3.85315 6.80638C3.75159 7.56173 3.75 8.56285 3.75 9.99826V15.9983C3.75 17.4337 3.75159 18.4348 3.85315 19.1901C3.9518 19.9239 4.13225 20.3125 4.40901 20.5893C4.68577 20.866 5.07435 21.0465 5.80812 21.1451C6.56347 21.2467 7.56458 21.2483 9 21.2483H15C16.4354 21.2483 17.4365 21.2467 18.1919 21.1451C18.9257 21.0465 19.3142 20.866 19.591 20.5893C19.8678 20.3125 20.0482 19.9239 20.1469 19.1901C20.2484 18.4348 20.25 17.4337 20.25 15.9983V9.99826C20.25 8.56285 20.2484 7.56173 20.1469 6.80638C20.0482 6.07261 19.8678 5.68403 19.591 5.40727C19.3475 5.16382 19.0195 4.99664 18.4527 4.89253C18.0067 4.81061 17.4533 4.77447 16.7352 4.75913C16.6067 5.87972 15.655 6.75 14.5 6.75H9.5C8.345 6.75 7.39326 5.87972 7.26476 4.75913ZM9.5 2.75C9.08579 2.75 8.75 3.08579 8.75 3.5V4.5C8.75 4.91421 9.08579 5.25 9.5 5.25H14.5C14.9142 5.25 15.25 4.91421 15.25 4.5V3.5C15.25 3.08579 14.9142 2.75 14.5 2.75H9.5ZM15.5483 10.4883C15.8309 10.7911 15.8146 11.2657 15.5117 11.5483L11.226 15.5483C10.9379 15.8172 10.4907 15.8172 10.2025 15.5483L8.48826 13.9483C8.18545 13.6657 8.16908 13.1911 8.45171 12.8883C8.73433 12.5854 9.20893 12.5691 9.51174 12.8517L10.7143 13.9741L14.4883 10.4517C14.7911 10.1691 15.2657 10.1854 15.5483 10.4883Z"
        fill="currentColor"
      />
    </svg>
  ),
  teamImmunity: (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto" }}
    >
      <path
        d="M16.719 19.7519L16.0785 14.6279C15.8908 13.1266 14.6146 12 13.1017 12H12H10.8983C9.38538 12 8.10917 13.1266 7.92151 14.6279L7.28101 19.7519C7.1318 20.9456 8.06257 22 9.26556 22H12H14.7344C15.9374 22 16.8682 20.9456 16.719 19.7519Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="12" cy="5" r="3" stroke="currentColor" stroke-width="2" />
      <circle cx="4" cy="9" r="2" stroke="currentColor" stroke-width="2" />
      <circle cx="20" cy="9" r="2" stroke="currentColor" stroke-width="2" />
      <path
        d="M4 14H3.69425C2.71658 14 1.8822 14.7068 1.72147 15.6712L1.38813 17.6712C1.18496 18.8903 2.12504 20 3.36092 20H7"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20 14H20.3057C21.2834 14 22.1178 14.7068 22.2785 15.6712L22.6119 17.6712C22.815 18.8903 21.8751 20 20.6392 20C19.4775 20 18.0952 20 17 20"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  individualImmunity: (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto" }}
    >
      <path
        d="M15.9201 12.8959L19.2583 8.89003C19.533 8.5604 19.6704 8.39557 19.7681 8.21065C19.8548 8.0466 19.9183 7.87128 19.9567 7.68973C20 7.48508 20 7.27053 20 6.84144V6.2C20 5.07989 20 4.51984 19.782 4.09202C19.5903 3.71569 19.2843 3.40973 18.908 3.21799C18.4802 3 17.9201 3 16.8 3H7.2C6.0799 3 5.51984 3 5.09202 3.21799C4.71569 3.40973 4.40973 3.71569 4.21799 4.09202C4 4.51984 4 5.07989 4 6.2V6.84144C4 7.27053 4 7.48508 4.04328 7.68973C4.08168 7.87128 4.14515 8.0466 4.23188 8.21065C4.32964 8.39557 4.467 8.5604 4.74169 8.89003L8.07995 12.8959M13.4009 11.1989L19.3668 3.53988M10.5991 11.1989L4.6394 3.53414M6.55673 6H17.4505M17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16C7 13.2386 9.23858 11 12 11C14.7614 11 17 13.2386 17 16Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linejoin="round"
      />
    </svg>
  ),
  advantage: (
    <svg
      fill="currentColor"
      height="20px"
      width="20px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      style={{ margin: "auto" }}
    >
      <g>
        <g>
          <g>
            <path
              d="M192,192h42.667c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333H192
				c-11.782,0-21.333,9.551-21.333,21.333C170.667,182.449,180.218,192,192,192z"
            />
            <path
              d="M320,234.667h-42.667C265.551,234.667,256,244.218,256,256s9.551,21.333,21.333,21.333H320
				c11.782,0,21.333-9.551,21.333-21.333S331.782,234.667,320,234.667z"
            />
            <path
              d="M320,149.333h-21.333c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333H320
				c11.782,0,21.333-9.551,21.333-21.333C341.333,158.885,331.782,149.333,320,149.333z"
            />
            <path
              d="M234.667,320H192c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333h42.667
				c11.782,0,21.333-9.551,21.333-21.333C256,329.551,246.449,320,234.667,320z"
            />
            <path
              d="M320,320h-21.333c-11.782,0-21.333,9.551-21.333,21.333c0,11.782,9.551,21.333,21.333,21.333H320
				c11.782,0,21.333-9.551,21.333-21.333C341.333,329.551,331.782,320,320,320z"
            />
            <path
              d="M192,277.333c11.776,0,21.333-9.557,21.333-21.333s-9.557-21.333-21.333-21.333s-21.333,9.557-21.333,21.333
				S180.224,277.333,192,277.333z"
            />
            <path
              d="M490.667,426.667C490.667,403.109,471.558,384,448,384h-21.333V128H448c23.558,0,42.667-19.109,42.667-42.667
				C502.449,85.333,512,75.782,512,64c0-11.782-9.551-21.333-21.333-21.333C490.667,19.109,471.558,0,448,0H64
				C40.442,0,21.333,19.109,21.333,42.667C9.551,42.667,0,52.218,0,64c0,11.782,9.551,21.333,21.333,21.333
				C21.333,108.891,40.442,128,64,128h21.333v256H64c-23.558,0-42.667,19.109-42.667,42.667C9.551,426.667,0,436.218,0,448
				c0,11.782,9.551,21.333,21.333,21.333C21.333,492.891,40.442,512,64,512h384c23.558,0,42.667-19.109,42.667-42.667
				c11.782,0,21.333-9.551,21.333-21.333C512,436.218,502.449,426.667,490.667,426.667z M64,42.667h384v42.667h-42.667H106.667H64
				V42.667z M128,128h256v256H128V128z M448,469.333H64v-42.667h42.667h298.667H448V469.333z"
            />
          </g>
        </g>
      </g>
    </svg>
  ),
  idolFound: (
    <svg
      fill="currentColor"
      height="20px"
      width="20px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 511.999 511.999"
      style={{
        margin: "auto",
      }}
    >
      <g>
        <g>
          <path
            d="M507.101,4.898c-6.53-6.531-17.118-6.531-23.649,0l-45.563,45.563l-41.534-13.844
			c-18.144-6.047-37.816-1.405-51.338,12.119C334.839,58.915,53.146,340.607,43.16,350.593
			c-13.522,13.523-18.165,33.193-12.118,51.337l13.845,41.534L4.898,483.452c-6.531,6.53-6.531,17.118,0,23.649
			c6.531,6.531,17.118,6.531,23.649,0l39.991-39.991c44.756,14.913,47.016,16.448,57.517,16.448
			c13.054,0,25.757-5.126,35.358-14.727c10.116-10.116,291.178-291.178,301.851-301.851c13.524-13.524,18.167-33.195,12.119-51.338
			L461.538,74.11l45.563-45.563C513.632,22.017,513.632,11.429,507.101,4.898z M137.763,445.182
			c-4.506,4.507-11.064,6.055-17.112,4.04L77.24,434.756l-14.469-43.404c-2.016-6.049-0.468-12.608,4.039-17.115l27.785-27.785
			v54.225c0,9.235,7.487,16.722,16.722,16.722h54.225L137.763,445.182z M189.192,383.958H128.04v-61.153h61.153V383.958z
			 M189.192,289.362H151.69l37.503-37.503V289.362z M222.637,360.308v-37.503h37.503L222.637,360.308z M283.789,289.362h-61.152
			V228.21h61.152V289.362z M283.789,194.765h-37.502l37.502-37.502V194.765z M317.234,265.713V228.21h37.503L317.234,265.713z
			 M378.384,194.765h-61.152v-61.152h61.152V194.765z M439.614,143.332l-27.785,27.785v-54.225c0-9.235-7.487-16.722-16.722-16.722
			h-54.224l27.785-27.785c4.506-4.508,11.062-6.056,17.111-4.039l43.407,14.468l14.468,43.407
			C445.669,132.267,444.121,138.823,439.614,143.332z"
          />
        </g>
      </g>
    </svg>
  ),
  voteNullified: (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto" }}
    >
      <path
        d="M10 12L14 16M14 12L10 16M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ),
  fire: (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      id="Line"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
      }}
    >
      <line
        id="primary"
        x1="4"
        y1="21"
        x2="20"
        y2="17"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></line>
      <path
        id="primary-2"
        data-name="primary"
        d="M20,21,4,17m12.67-6.66a7.18,7.18,0,0,0-1.34-4,3.29,3.29,0,0,1-1.33,2A6.92,6.92,0,0,0,10.68,3c0,4-3.35,4-3.35,7.33A4.58,4.58,0,0,0,12,15C16,15,16.67,12.43,16.67,10.34Z"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  ),
  placement: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      style={{ margin: "auto" }}
    >
      <path d="M14 13l-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L11 10" />
      <path d="M16 16l6-6" />
      <path d="M8 8l6-6" />
      <path d="M9 7l8 8" />
      <path d="M21 11l-8-8" />
    </svg>
  ),
};

const PointStringMap: Record<string, string> = {
  // Standard
  survival: "Survived",
  votes: "Correct votes",
  teamImmunity: "Immunity (team)",
  individualImmunity: "Immunity (indiv.)",
  advantage: "Advantage",
  idolFound: "Idol found",
  voteNullified: "Votes nullified",
  placement: "Jury placement",
  fire: "Fire",

  // Upside down
  losingTeam: "Losing team",
  abysmalChallenge: "Abysmal challenge",
  crying: "Random crying",
  wrongVote: "Voted wrong",
  blindsided: "Blindsided at tribal",
  outFirst: "Voted out first",
  outPreMerge: "Voted out pre-merge",
  outPostMerge: "Voted out post-merge",
  medEvac: "Med evac pre-merge",
  threatenedToQuit: "Threatening to quit",
  vomit: "Vomit",
};

function getBadge(playerScore: PlayerScore) {
  if (playerScore.status === "eliminated") {
    return (
      <Badge bg="danger" style={styles.badge}>
        Eliminated
      </Badge>
    );
  } else if (playerScore.status === "jury") {
    return (
      <Badge bg="info" style={styles.badge}>
        Jury
      </Badge>
    );
  } else if (playerScore.status === "winner") {
    return (
      <Badge bg="success" style={styles.badge}>
        Winner
      </Badge>
    );
  } else {
    return (
      <Badge bg="secondary" style={styles.badge}>
        Active
      </Badge>
    );
  }
}

function getScoreElement(
  thisWeekPoints: number = 0,
  lastWeekPoints: number | undefined
) {
  const scoreDiff = thisWeekPoints - (lastWeekPoints || 0);

  if (scoreDiff > 0) {
    return (
      <span>
        {thisWeekPoints}
        <span style={styles.units}>pts</span>{" "}
        <span style={styles.indicatorGreen}>(+{scoreDiff})</span>
      </span>
    );
  } else {
    return (
      <span>
        {thisWeekPoints}
        <span style={styles.units}>pts</span>{" "}
        <span style={styles.indicatorNeutral}>(-)</span>
      </span>
    );
  }
}

function getDetailsView(
  ruleSet: RuleSet,
  thisWeekScore: PlayerScore,
  lastWeekScore?: PlayerScore
) {
  return (
    <>
      {thisWeekScore[ruleSet].total! === 0 && <>No points earned yet :(</>}

      {...Object.entries(PointStringMap).map(([key, label]) => {
        const pointsThisWeek = thisWeekScore[ruleSet].points as any;
        const pointsLastWeek = lastWeekScore?.[ruleSet].points as any;

        return (
          pointsThisWeek[key] > 0 && (
            <>
              <span style={styles.scoreLabel}>{label}: </span>
              {getScoreElement(
                pointsThisWeek[key],
                pointsLastWeek && (pointsLastWeek[key] || 0)
              )}
              <br />
            </>
          )
        );
      })}
    </>
  );
}

export default function Scores(props: {
  thisWeekRankings: PlayerRankings;
  lastWeekRankings?: PlayerRankings;
  teams: Array<Team>;
  hideSpoilers?: boolean;
}) {
  const { thisWeekRankings, lastWeekRankings, teams, hideSpoilers } = props;

  const ruleSet = useContext(RuleSetContext);

  const tribeGroups: Record<PlayerTribes, Player[]> = players.reduce(
    (acc, player) => {
      const { tribe } = player;
      if (!acc[tribe]) {
        acc[tribe] = [];
      }
      acc[tribe].push(player);
      return acc;
    },
    {} as Record<PlayerTribes, Player[]>
  );

  return (
    <>
      <h1>Original Tribes</h1>
      <div className="tribes-flex-container">
        {...Object.entries(tribeGroups).map(([tribe, tribePlayers], i) => (
          <div key={i} className="tribe-container">
            <div style={styles.tribeDetailsContainer}>
              <div style={styles.tribeName}>{tribe}</div>
              <div
                style={{
                  ...styles.tribeColorIndicator,
                  backgroundColor: tribeColors[tribe as PlayerTribes],
                }}
              ></div>
            </div>
            <div className="tribe-members-flex-container">
              {...tribePlayers.map((player) => {
                const thisWeekScore = (thisWeekRankings || []).find(
                  (p) => p.player === player
                );

                const isActive =
                  thisWeekScore &&
                  ["active", "winner"].includes(thisWeekScore.status);

                return (
                  <img
                    key={player.key}
                    src={
                      hideSpoilers
                        ? "mystery-man.png"
                        : `${player.name.toLowerCase()}.jpg`
                    }
                    alt={player.name}
                    width={72}
                    height={72}
                    className={isActive || hideSpoilers ? "" : "eliminated"}
                  ></img>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <h1>Players</h1>
      <div
        className="flex flex-wrap items-center justify-center flex-item-card"
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "15px",
          padding: "10px",
          gap: "15px",
          backgroundColor: "var(--component-background-color-primary)",
          width: "fit-content",
          fontSize: "10pt",
        }}
      >
        <div>{tableCols.survival} Survived</div>
        <div>{tableCols.votes} Correct votes</div>
        <div>{tableCols.teamImmunity} Immunity (team)</div>
        <div>{tableCols.individualImmunity} Immunity (indiv.)</div>
        <div>{tableCols.advantage} Advantage</div>
        <div>{tableCols.idolFound} Idol found</div>
        <div>{tableCols.voteNullified} Votes nullified</div>
        <div>{tableCols.fire} Fire</div>
        <div>{tableCols.placement} Jury placement</div>
      </div>

      <div
        className="flex flex-wrap items-center justify-center"
        style={{
          gap: "15px",
          marginBottom: "15px",
        }}
      >
        {...(thisWeekRankings || []).map((score) => {
          const { player } = score;
          const lastWeekScore = lastWeekRankings?.find(
            (p) => p.player === score.player
          );

          const popularity = teams.reduce((acc, curr) => {
            return curr.players.includes(player) ? acc + 1 : acc;
          }, 0);

          function getRankDiff() {
            if (lastWeekScore) {
              if (score[ruleSet].rank < lastWeekScore[ruleSet].rank) {
                return (
                  <>
                    <span style={styles.indicatorGreen}>
                      (▲ {lastWeekScore[ruleSet].rank - score[ruleSet].rank})
                    </span>
                  </>
                );
              } else if (score[ruleSet].rank > lastWeekScore[ruleSet].rank) {
                return (
                  <>
                    <span style={styles.indicatorRed}>
                      (▼ {score[ruleSet].rank - lastWeekScore[ruleSet].rank})
                    </span>
                  </>
                );
              } else {
                return "(-)";
              }
            } else {
              return "(-)";
            }
          }

          function getScoreDiff() {
            const scoreDiff =
              score[ruleSet].total -
              (lastWeekScore ? lastWeekScore[ruleSet].total : 0);

            if (scoreDiff > 0) {
              return (
                <>
                  <span style={styles.indicatorGreen}>
                    (+
                    {scoreDiff})
                  </span>
                </>
              );
            } else {
              return "(-)";
            }
          }

          return (
            <div
              key={player.name}
              className="flex-item-card"
              style={{
                maxWidth: "350px",
                border: "none",
              }}
            >
              <div
                className="grid"
                style={{
                  gridTemplateRows: "25px 15px",
                  gridTemplateColumns: "44px auto 44px",
                  marginBottom: "10px",
                  paddingTop: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  borderTop: `10px solid ${tribeColors[score.player.tribe]}`,
                  borderTopLeftRadius: "var(--border-radius-standard)",
                  borderTopRightRadius: "var(--border-radius-standard)",
                }}
              >
                <div
                  style={{
                    justifySelf: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12pt",
                      padding: "0px 6px",
                      borderRadius: "var(--border-radius-standard)",
                      backgroundColor:
                        "var(--component-background-color-secondary)",
                    }}
                  >
                    #{score[ruleSet].rank}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "14pt",
                    textAlign: "center",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                >
                  {player.name}
                </div>

                <div
                  style={{
                    textAlign: "center",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                >
                  {score[ruleSet].total}
                  <span style={styles.units}>pts</span>
                </div>
                <div
                  style={{
                    justifySelf: "center",
                    fontSize: "8pt",
                  }}
                >
                  {getRankDiff()}
                </div>

                <div
                  style={{
                    textAlign: "center",
                    justifySelf: "center",
                    alignSelf: "center",
                  }}
                ></div>
                <div
                  style={{
                    justifySelf: "center",
                    fontSize: "8pt",
                  }}
                >
                  {getScoreDiff()}
                </div>
              </div>
              <div
                className="flex flex-wrap"
                style={{
                  marginBottom: "5px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <img
                  src={
                    hideSpoilers
                      ? "mystery-man.png"
                      : `${player.name.toLowerCase()}.jpg`
                  }
                  alt={player.name}
                  width={95}
                  height={95}
                  style={{ borderRadius: "12px" }}
                ></img>
                <div
                  className="flex-grow"
                  style={{
                    marginBottom: "0px",
                    paddingLeft: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <table
                    style={{
                      marginBottom: "0px",
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <thead style={{ height: "25px" }}>
                      <tr>
                        {Object.keys(tableCols).map((key) => (
                          <th key={key}>{tableCols[key]}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody style={{ verticalAlign: "bottom", height: "25px" }}>
                      <tr>
                        {...Object.keys(tableCols).map((key) => {
                          const points = score[ruleSet].points as any;
                          const lastWeekPoints = lastWeekScore?.[ruleSet]
                            .points as any;
                          const scoreDiff =
                            (points[key] || 0) - (lastWeekPoints?.[key] || 0);

                          return (
                            <td key={key} style={{ fontSize: "9pt" }}>
                              {scoreDiff > 0 ? (
                                <span style={styles.indicatorGreen}>
                                  +{scoreDiff}
                                </span>
                              ) : (
                                <span style={styles.indicatorNeutral}>-</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                      <tr>
                        {...Object.keys(tableCols).map((key) => {
                          const points = score[ruleSet].points as any;
                          return (
                            <td key={key} style={{ fontSize: "10pt" }}>
                              {points[key] || 0}
                            </td>
                          );
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="grid grid-cols-2" style={{ marginBottom: "5px" }}>
                <div style={{ textAlign: "center" }}>
                  <span style={styles.units}>{popularity} teams</span>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    borderLeft:
                      "1px solid var(--component-text-color-secondary)",
                  }}
                >
                  <span style={styles.units}>{player.history}</span>
                </div>
              </div>

              <div style={{ width: "100%" }}>{getBadge(score)}</div>
            </div>
          );
        })}
      </div>
      {/* <Container>
        {...(thisWeekRankings || []).map((thisWeekScore) => {
          const lastWeekScore = lastWeekRankings?.find(
            (p) => p.player === thisWeekScore.player
          );

          let rank;

          if (lastWeekScore && lastWeekScore[ruleSet]) {
            if (thisWeekScore[ruleSet].rank < lastWeekScore[ruleSet].rank) {
              rank = (
                <span>
                  #{thisWeekScore[ruleSet].rank}{" "}
                  <span style={styles.indicatorGreen}>
                    (▲{" "}
                    {lastWeekScore[ruleSet].rank - thisWeekScore[ruleSet].rank})
                  </span>
                </span>
              );
            } else if (
              thisWeekScore[ruleSet].rank > lastWeekScore[ruleSet].rank
            ) {
              rank = (
                <span>
                  #{thisWeekScore[ruleSet].rank}{" "}
                  <span style={styles.indicatorRed}>
                    (▼{" "}
                    {thisWeekScore[ruleSet].rank - lastWeekScore[ruleSet].rank})
                  </span>
                </span>
              );
            } else {
              rank = (
                <span>
                  #{thisWeekScore[ruleSet].rank}{" "}
                  <span style={styles.indicatorNeutral}>(-)</span>
                </span>
              );
            }
          } else {
            rank = <span>#{thisWeekScore[ruleSet].rank}</span>;
          }

          const popularity = teams.reduce((acc, curr) => {
            return curr.players.includes(thisWeekScore.player) ? acc + 1 : acc;
          }, 0);

          const popularityEmoji =
            popularity >= 17
              ? "⭐️"
              : popularity >= 13
              ? "🔥"
              : popularity >= 11
              ? "👍"
              : "☘️";

          return (
            <Row
              key={thisWeekScore.player.name}
              className="justify-content-center gx-0"
            >
              <Col xs={12} lg={9} xl={8} xxl={7}>
                <Row className="justify-content-center gx-0">
                  <Col xs={12} md={6}>
                    <Card
                      style={
                        screenWidth < 768
                          ? styles.leftCardSmall
                          : styles.leftCard
                      }
                    >
                      <div>
                        <span style={styles.name}>
                          {thisWeekScore.player.name}
                        </span>
                        <hr style={styles.hr} />
                        <img
                          src={
                            hideSpoilers
                              ? "mystery-man.png"
                              : `${thisWeekScore.player.name.toLowerCase()}.jpg`
                          }
                          alt={thisWeekScore.player.name}
                          width={115}
                          height={115}
                          style={styles.avatar}
                        ></img>
                        <div style={styles.details}>
                          <br />
                          <strong style={styles.scoreLabel}>Rank: </strong>
                          {rank}
                          <br />
                          <strong style={styles.scoreLabel}>
                            Total:{" "}
                          </strong>{" "}
                          {getScoreElement(
                            thisWeekScore[ruleSet].total,
                            lastWeekScore?.[ruleSet]?.total
                          )}
                          <br />
                          <strong style={styles.scoreLabel}>
                            Popularity:{" "}
                          </strong>
                          {popularity} <span style={styles.units}> teams</span>{" "}
                          <span style={styles.popularityEmoji}>
                            {popularityEmoji}
                          </span>
                        </div>
                        {getBadge(thisWeekScore)}
                      </div>
                    </Card>
                  </Col>
                  <Col xs={12} md={5}>
                    <Card
                      style={
                        screenWidth < 768
                          ? styles.rightCardSmall
                          : styles.rightCard
                      }
                    >
                      <div>
                        <Card.Body>
                          {isSmallScreen ? (
                            <Accordion
                              flush
                              className="player-details-accordion"
                            >
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  Show details
                                </Accordion.Header>
                                <Accordion.Body>
                                  {getDetailsView(
                                    ruleSet,
                                    thisWeekScore,
                                    lastWeekScore
                                  )}
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          ) : (
                            getDetailsView(
                              ruleSet,
                              thisWeekScore,
                              lastWeekScore
                            )
                          )}
                        </Card.Body>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
      </Container> */}
    </>
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1920px",
      // custom => @media (min-width: 1920px) { ... }
    },
    extend: {
      // fontFamily: {
      //   sans: ["Pretendard"],
      //   oneMobileTitle: ["ONE-Mobile-Title"],
      //   //sans: ['Noto Sans KR'],
      // },
      fontSize: {
        // title
        h1: [
          "36px",
          {
            fontWeight: "800",
            lineHeight: "52px",
            letterSpacing: "0.015em",
          },
        ],
        h2: [
          "32px",
          {
            fontWeight: "800",
            lineHeight: "42px",
            letterSpacing: "0.015em",
          },
        ],
        h3: [
          "28px",
          {
            fontWeight: "800",
            lineHeight: "38px",
            letterSpacing: "0.015em",
          },
        ],
        subtitle1: [
          "26px",
          {
            fontWeight: "800",
            lineHeight: "36px",
            letterSpacing: "0.015em",
          },
        ],
        subtitle2: [
          "24px",
          {
            fontWeight: "800",
            lineHeight: "34px",
            letterSpacing: "0.015em",
          },
        ],
        subtitle3: [
          "22px",
          {
            fontWeight: "800",
            lineHeight: "30px",
            letterSpacing: "0.015em",
          },
        ],
        // body
        body1_700: [
          "22px",
          {
            fontWeight: "700",
            lineHeight: "32px",
            letterSpacing: "0.015em",
          },
        ],
        body1_600: [
          "22px",
          {
            fontWeight: "600",
            lineHeight: "32px",
            letterSpacing: "0.015em",
          },
        ],
        body1_500: [
          "22px",
          {
            fontWeight: "500",
            lineHeight: "32px",
            letterSpacing: "0.015em",
          },
        ],
        body1_500l: [
          "22px",
          {
            fontWeight: "500",
            lineHeight: "34px",
            letterSpacing: "0.015em",
          },
        ],
        body2_700: [
          "20px",
          {
            fontWeight: "700",
            lineHeight: "30px",
            letterSpacing: "0.015em",
          },
        ],
        body2_700l: [
          "20px",
          {
            fontWeight: "700",
            lineHeight: "32px",
            letterSpacing: "0.015em",
          },
        ],
        body2_600: [
          "20px",
          {
            fontWeight: "600",
            lineHeight: "30px",
            letterSpacing: "0.015em",
          },
        ],
        body2_500: [
          "20px",
          {
            fontWeight: "500",
            lineHeight: "30px",
            letterSpacing: "0.015em",
          },
        ],
        body2_500l: [
          "20px",
          {
            fontWeight: "500",
            lineHeight: "32px",
            letterSpacing: "0.015em",
          },
        ],
        body3_700: [
          "18px",
          {
            fontWeight: "700",
            lineHeight: "28px",
            letterSpacing: "0.015em",
          },
        ],
        body3_600: [
          "18px",
          {
            fontWeight: "600",
            lineHeight: "28px",
            letterSpacing: "0.015em",
          },
        ],
        body3_500: [
          "18px",
          {
            fontWeight: "500",
            lineHeight: "28px",
            letterSpacing: "0.015em",
          },
        ],
        body3_400: [
          "18px",
          {
            fontWeight: "400",
            lineHeight: "28px",
            letterSpacing: "0.015em",
          },
        ],
        caption1_700: [
          "16px",
          {
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "0.015em",
          },
        ],
        caption1_500: [
          "16px",
          {
            fontWeight: "500",
            lineHeight: "24px",
            letterSpacing: "0.015em",
          },
        ],
        caption1_400: [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "0.015em",
          },
        ],
        caption1_600: [
          "16px",
          {
            fontWeight: "600",
            lineHeight: "24px",
            letterSpacing: "0.015em",
          },
        ],
        caption2_700: [
          "15px",
          {
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "0.015em",
          },
        ],
        caption2_400: [
          "15px",
          {
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "0.015em",
          },
        ],
        caption3: [
          "13px",
          {
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "0.015em",
          },
        ],
        btn_700: [
          "22px",
          {
            fontWeight: "700",
            lineHeight: "32px",
            letterSpacing: "0.04em",
          },
        ],
      },
      colors: {
        //gray
        black: "#0D0D0D",
        white: "#FEFEFE",
        back_ground: "#FCFBF2",
        gray_200: "#242424",
        gray_180: "#333",
        gray_170: "#3D3D3D",
        gray_160: "#555",
        gray_140: "#6F6F6F",
        gray_120: "#8B8B8B",
        gray_100: "#A5A5A5",
        gray_95: "#F3F3F2",
        gray_80: "#C1C1C1",
        gray_70: "#BAB7B5",
        gray_60: "#DFDFDF",
        gray_40: "#ECECEC",
        gray_30: "#EFEFEF",
        gray_20: "#F5F4F3",
        gray_15: "#F9F8F7",
        gray_10: "#FDFCFB",
        //green
        green_180: "#0D2712",
        green_160: "#1A4D23",
        green_140: "#176525",
        green_120: "#339A45",
        green_100: "#36B44D",
        green_80: "#66CD79",
        green_60: "#8DD99A",
        green_40: "#B3E6BC",
        green_20: "#d9f3de",
        green_10: "#e9f8eb",
        green_5: "#f0faf2",
        //orange
        orange_180: "#CD410A",
        orange_160: "#E8590C",
        orange_140: "#F76707",
        orange_120: "#FD7E14",
        orange_100: "#FF922B",
        orange_80: "#FFA94D",
        orange_60: "#FFC078",
        orange_40: "#FFD8A8",
        orange_20: "#FFE8CC",
        orange_10: "#FFF4E6",
        //yellow
        yellow_180: "#e67700",
        yellow_160: "#f08c00",
        yellow_140: "#f59f00",
        yellow_120: "#fab005",
        yellow_100: "#fcc419",
        yellow_80: "#ffd43b",
        yellow_60: "#FFE066",
        yellow_40: "#ffec99",
        yellow_20: "#fff3bf",
        yellow_10: "#fff9db",
        //system colors
        error: "#FD3B5E",
        correct: "#0E69F0",
        //여기부터 old
        primary_160: "#64392A",
        primary_140: "#96563F",
        primary_120: "#C87254",
        primary_110: "#E1815E",
        primary_100: "#FA8F69 ",
        primary_80: "#FBA587",
        primary_60: "#FCBCA5",
        primary_40: "#FDD2C3",
        primary_20: "#FEE9E1",
        primary_10: "#FFF4F0",
        //SECONDARY
        secondary_160: "#274C34",
        secondary_140: "#3A724E",
        secondary_120: "#4E9868",
        secondary_110: "#57AB75",
        secondary_100: "#61BE82 ",
        secondary_80: "#81CB9B",
        secondary_60: "#A0D8B4",
        secondary_40: "#C0E5CD",
        secondary_20: "#CAEFD7",
        secondary_10: "#E3FCEB",
        //TERTIARY
        tertiary_10: "#FFF8E1",
        tertiary_20: "#FFF2C6",
        tertiary_40: "#FFE9A0",
        //message component
        title_text: "#111111",
        title_subtext: "#000000",
        //증상 color
        level1: "#FA5E2C",
        level2: "#FF914B",
        level3: "#F5B21E",
        level4: "#9DBE46",
        level5: "#61BE82",
      },
    },
  },
  plugins: [],
};

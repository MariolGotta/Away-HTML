module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "Unit": "16px",
        "FiveUnits": "80px",
        "FourUnits": "64px",
        "HalfUnit": "8px",
        "ThreeUnits": "48px",
        "SixUnits": "96px",
        "TwoUnits": "32px",
        "OneAndHalfUnits": "24px"
      },
      "borderRadius": {
        "Radius4": "4px",
        "Radius8": "8px",
        "Radius2": "2px",
        "Round": "50%"
      },
      "scale": {
        "XSmall": "16px",
        "XLarge": "192px",
        "XXLarge": "288px",
        "Medium": "96px",
        "Large": "144px",
        "MaxWidth": "1400px",
        "Small": "48px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}
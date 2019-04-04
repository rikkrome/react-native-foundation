/**
 * @Themes
 */
const darkTheme = {
  primary: "#D40424",
  secondary: "#AEC5D6",
  backgroundColor: "#000000",
  textColor: "#ffffff",
  errorColor: "ff7200",
  activeTintColor: "tomato",
  inactiveTintColor: "gray",
  btnPrimary: {
    backgroundColor: "#007bff",
    textColor: "#ffffff"
  },
  btnSecondary: {
    backgroundColor: "#6c757d",
    textColor: "#ffffff"
  },
  btnSuccess: {
    backgroundColor: "#28a745",
    textColor: "#ffffff"
  },
  btnDanger: {
    backgroundColor: "#dc3545",
    textColor: "#ffffff"
  },
  btnWarning: {
    backgroundColor: "#ffc107",
    textColor: "#000000"
  },
  btnInfo: {
    backgroundColor: "#17a2b8",
    textColor: "#ffffff"
  },
  btnLight: {
    backgroundColor: "#f8f9fa",
    textColor: "#000000"
  },
  btnDark: {
    backgroundColor: "#343a40",
    textColor: "#ffffff"
  }
};

const lightTheme = {
  primary: "#D40424",
  secondary: "#AEC5D6",
  backgroundColor: "#ffffff",
  textColor: "#000000",
  errorColor: "#ff7200",
  activeTintColor: "tomato",
  inactiveTintColor: "gray",
  btnPrimary: {
    backgroundColor: "#007bff",
    textColor: "#ffffff"
  },
  btnSecondary: {
    backgroundColor: "#6c757d",
    textColor: "#ffffff"
  },
  btnSuccess: {
    backgroundColor: "#28a745",
    textColor: "#ffffff"
  },
  btnDanger: {
    backgroundColor: "#dc3545",
    textColor: "#ffffff"
  },
  btnWarning: {
    backgroundColor: "#ffc107",
    textColor: "#ffffff"
  },
  btnInfo: {
    backgroundColor: "#17a2b8",
    textColor: "#ffffff"
  },
  btnLight: {
    backgroundColor: "#f8f9fa",
    textColor: "#ffffff"
  },
  btnDark: {
    backgroundColor: "#343a40",
    textColor: "#ffffff"
  }
};

/**
 *
 */
const themes = { darkTheme: darkTheme, lightTheme: lightTheme };
const theme = {
  selectedTheme: null
};

export function getTheme() {
  if (theme && theme.selectedTheme && theme.selectedTheme.primary) {
    return theme.selectedTheme;
  } else {
    theme.selectedTheme = lightTheme;
    return lightTheme;
  }
}
export function setTheme(selectedTheme) {
  if (themes[selectedTheme]) {
    theme.selectedTheme = themes[selectedTheme];
  }
}

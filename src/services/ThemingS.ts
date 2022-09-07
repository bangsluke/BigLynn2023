import { useState, useEffect } from 'react';
import { CSSProperties } from 'react';
import { createTheme } from '@mui/material/styles';

const COLORS = {};

const toolTheme = createTheme({
  // Define the colours used throughout the tool
  palette: {
    primary: {
      // Main: COLORS.main,
      // Light: COLORS.light
    },
    secondary: {
      // Main: COLORS.secondary
    },
    background: {
      // Default: COLORS.lightbackground,
      // Paper: COLORS.darkbackground
    },
    common: {
      // Black: COLORS.black,
      // White: COLORS.white
    }
    // Background: "TBC",
  },
  breakpoints: {
    values: {
      xs: 0, // Xs, extra-small: 0px
      sm: 600, // Sm, small: 600px
      md: 900, // Md, medium: 900px
      lg: 1200, // Lg, large: 1200px
      xl: 1536 // Xl, extra-large: 1536px
    }
  },
  typography: {
    fontSize: 16,
    h1: {
      fontSize: 30,
      fontWeight: 600,
      paddingBottom: 10
    },
    h2: {
      fontSize: 24,
      fontWeight: 600,
      paddingBottom: 10
    }
  }
});

// https://stackoverflow.com/a/36862446
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const { width } = windowDimensions;

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Default MUI breakpoints used for Grid:
  // 	Xs, extra-small: 0px
  // 	Sm, small: 600px
  // 	Md, medium: 900px
  // 	Lg, large: 1200px
  // 	Xl, extra-large: 1536px

  let windowSize;
  if (width <= 768) {
    // 280 is a very narrow phone. 768 is iPad Mini width in portrait
    windowSize = 'Phone';
  } else if (width > 768 && width <= 1200) {
    // 768 is iPad Mini width in portrait. 1200 is standard desktop width
    windowSize = 'Tablet';
  } else if (width > 1200 && width <= 1500) {
    windowSize = 'Desktop';
  } else {
    windowSize = 'LargeDesktop';
  }
  // Console.log("Window size is: " + windowSize);

  return windowSize;
}

const SPACING: any = {
  // Header height
  headerHeight: {
    // Phone: "3rem",
    Phone: '7rem',
    Tablet: '7rem',
    Desktop: '9rem',
    LargeDesktop: '9rem'
  },
  // Divider height
  dividerHeight: '4rem',
  dividerHeightDesktop: '6rem',
  // Logo container height - the height of the container for both header logos
  logoContainerHeight: '6rem',
  // Base Company Logo Width - the starting width of the company logo before modification
  baseCompanyLogoWidth: '6rem',
  // The multiplication factor to extend the company logo if required
  // Navigation height
  navHeight: {
    // Phone: "3rem",
    Phone: toolTheme.spacing(2),
    Tablet: '3rem',
    Desktop: '4rem',
    LargeDesktop: '4rem'
  },

  // Data offset below height of the header
  dataPageOffset: '3rem',

  // Floating button offset from bottom of the screen
  floatingButtonBottomOffset: '5rem',
  // Footer height
  footerHeight: '3rem',

  // Generic spacing unit
  toolSpacing: '1'
};

function DYNAMICSPACING(propertyName: string) {
  // A function that returns the dynamic value for a property, given the object name and property name
  // E.g. ThemingS.DYNAMICSPACING("headerHeight") will return 2rem on mobile, or 3rem on desktop
  const windowSize = useWindowDimensions(); // Retrieve the window dimension (e.g. Mobile)
  // Console.log("propertyName", propertyName);
  // Console.log("SPACING[propertyName]", SPACING[propertyName]);
  // Console.log("SPACING[propertyName][windowSize]", SPACING[propertyName][windowSize]);
  return SPACING[propertyName][windowSize]; // Return the stored value
}

export interface CSSConfig {
  [Key: string]: CSSProperties;
}

export interface WindowResolutions {
  // https://stackoverflow.com/a/38262343
  Phone: { [CSSProperties: string]: string };
  Tablet: { [CSSProperties: string]: string };
  Desktop: { [CSSProperties: string]: string };
  LargeDesktop: { [CSSProperties: string]: string };
  Other: { [CSSProperties: string]: string };
}

export const ThemingS = {
  getWindowDimensions,
  useWindowDimensions,
  COLORS,
  SPACING,
  toolTheme,
  DYNAMICSPACING
};

export default ThemingS;

import { useMemo, ReactNode } from 'react';

// Material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeOptions, ThemeProvider, Theme } from '@mui/material/styles';

// Project import
import useConfig from '../hooks/useConfig';
import Palette from './palette';
import Typography from './typography';

import componentStyleOverrides from './compStyleOverride';
import customShadows from './shadows';

// Assets
import colors from '../scss/_themes-vars.module.scss';
// Import theme1 from '../scss/_theme1.module.scss';
// Import theme2 from '../scss/_theme2.module.scss';
// Import theme3 from '../scss/_theme3.module.scss';
// Import theme4 from '../scss/_theme4.module.scss';
// Import theme5 from '../scss/_theme5.module.scss';
// Import theme6 from '../scss/_theme6.module.scss';

// Types
import { ColorProps } from 'types';
import { CustomShadowProps } from 'types/default-theme';
import { TypographyOptions } from '@mui/material/styles/createTypography';

interface Props {
  children: ReactNode;
}

export default function ThemeCustomization({ children }: Props) {
  const config = useConfig();
  const { borderRadius, fontFamily, navType, outlinedFilled, presetColor, rtlLayout } = useConfig();

  const theme: Theme = useMemo<Theme>(() => Palette(navType, presetColor), [navType, presetColor]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography: TypographyOptions = useMemo<TypographyOptions>(
    () => Typography(theme, borderRadius, fontFamily),
    [theme, borderRadius, fontFamily]
  );
  const themeCustomShadows: CustomShadowProps = useMemo<CustomShadowProps>(() => customShadows(navType, theme), [navType, theme]);

  let color: ColorProps;
  switch (config.presetColor) {
    // Case 'theme1':
    //   Color = theme1;
    //   Break;
    // Case 'theme2':
    //   Color = theme2;
    //   Break;
    // Case 'theme3':
    //   Color = theme3;
    //   Break;
    // Case 'theme4':
    //   Color = theme4;
    //   Break;
    // Case 'theme5':
    //   Color = theme5;
    //   Break;
    // Case 'theme6':
    //   Color = theme6;
    //   Break;
    case 'default':
    default:
      color = colors;
  }

  const themeOption = {
    colors: color,
    heading: '',
    paper: '',
    backgroundDefault: '',
    background: '',
    darkTextPrimary: '',
    darkTextSecondary: '',
    textDark: '',
    menuSelected: '',
    menuSelectedBack: '',
    divider: '',
    customization: config
  };

  switch (config.navType) {
    case 'dark':
      themeOption.paper = color.darkLevel2;
      themeOption.backgroundDefault = color.darkPaper;
      themeOption.background = color.darkBackground;
      themeOption.darkTextPrimary = color.darkTextPrimary;
      themeOption.darkTextSecondary = color.darkTextSecondary;
      themeOption.textDark = color.darkTextPrimary;
      themeOption.menuSelected = color.darkSecondaryMain;
      themeOption.menuSelectedBack = color.darkSecondaryMain + 15;
      themeOption.divider = color.darkTextPrimary;
      themeOption.heading = color.darkTextTitle;
      break;
    case 'light':
    default:
      themeOption.paper = color.paper;
      themeOption.backgroundDefault = color.paper;
      themeOption.background = color.primaryLight;
      themeOption.darkTextPrimary = color.grey700;
      themeOption.darkTextSecondary = color.grey500;
      themeOption.textDark = color.grey900;
      themeOption.menuSelected = color.secondaryDark;
      themeOption.menuSelectedBack = color.secondaryLight;
      themeOption.divider = color.grey200;
      themeOption.heading = color.grey900;
      break;
  }

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      direction: rtlLayout ? 'rtl' : 'ltr',
      palette: theme.palette,
      mixins: {
        toolbar: {
          minHeight: '48px',
          padding: '16px',
          '@media (min-width: 600px)': {
            minHeight: '48px'
          }
        }
      },
      typography: themeTypography,
      customShadows: themeCustomShadows
    }),
    [rtlLayout, theme, themeCustomShadows, themeTypography]
  );

  const themes: Theme = createTheme(themeOptions);
  themes.components = useMemo(() => componentStyleOverrides(themes, borderRadius, outlinedFilled), [themes, borderRadius, outlinedFilled]);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

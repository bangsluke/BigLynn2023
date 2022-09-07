import { createContext, ReactNode } from 'react';

// Project import
import defaultConfig from 'config';
// Import useLocalStorage from 'hooks/useLocalStorage';

// Types
import { PaletteMode } from '@mui/material';
import { CustomizationProps } from 'types/config';

// Initial state
const initialState: CustomizationProps = {
  ...defaultConfig,
  container: false,
  onChangeMenuType: () => {},
  onChangePresetColor: () => {},
  onChangeLocale: () => {},
  onChangeRTL: () => {},
  onChangeContainer: () => {},
  onChangeFontFamily: () => {},
  onChangeBorderRadius: () => {},
  onChangeOutlinedField: () => {}
};

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

const ConfigContext = createContext(initialState);

type ConfigProviderProps = {
  children: ReactNode;
};

function ConfigProvider({ children }: ConfigProviderProps) {
  // Const [config, setConfig] = useLocalStorage('berry-config', {
  //   FontFamily: initialState.fontFamily,
  //   BorderRadius: initialState.borderRadius,
  //   OutlinedFilled: initialState.outlinedFilled,
  //   NavType: initialState.navType,
  //   PresetColor: initialState.presetColor,
  //   Locale: initialState.locale,
  //   RtlLayout: initialState.rtlLayout
  // });

  const onChangeMenuType = (navType: PaletteMode) => {
    setConfig({
      ...config,
      navType
    });
  };

  const onChangePresetColor = (presetColor: string) => {
    setConfig({
      ...config,
      presetColor
    });
  };

  const onChangeLocale = (locale: string) => {
    setConfig({
      ...config,
      locale
    });
  };

  const onChangeRTL = (rtlLayout: boolean) => {
    setConfig({
      ...config,
      rtlLayout
    });
  };

  const onChangeContainer = () => {
    setConfig({
      ...config,
      container: !config.container
    });
  };

  const onChangeFontFamily = (fontFamily: string) => {
    setConfig({
      ...config,
      fontFamily
    });
  };

  const onChangeBorderRadius = (event: Event, newValue: number | number[]) => {
    setConfig({
      ...config,
      borderRadius: newValue as number
    });
  };

  const onChangeOutlinedField = (outlinedFilled: boolean) => {
    setConfig({
      ...config,
      outlinedFilled
    });
  };

  return (
    <ConfigContext.Provider
      value={{
        // ...config,
        onChangeMenuType,
        onChangePresetColor,
        onChangeLocale,
        onChangeRTL,
        onChangeContainer,
        onChangeFontFamily,
        onChangeBorderRadius,
        onChangeOutlinedField
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}

export { ConfigProvider, ConfigContext };

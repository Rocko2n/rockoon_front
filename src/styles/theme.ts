import { ThemeType} from '../types/ThemeInterface';

const lightTheme : ThemeType= {
    backgroundColor: '#FFF',
    color: '#000'
  };
  
  const darkTheme : ThemeType = {
    backgroundColor: '#333',
    color: '#FFF'
  };

export const themeClass = {
    light : lightTheme,
    dark: darkTheme
  };
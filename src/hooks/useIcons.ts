// https://stackoverflow.com/a/66828783
import * as Icons from '@mui/icons-material';
import stringSimilarity from 'string-similarity';

type IconType = { [index: string]: any };

function useIcons(word: any) {
  const iconsNames = Object.keys(Icons);

  const matches = stringSimilarity.findBestMatch(word, iconsNames);
  const bestMatch: any = matches.bestMatch.target;
  // @ts-ignore
  const Icon: IconType = Icons[bestMatch];
  return Icon;
}
export default useIcons;

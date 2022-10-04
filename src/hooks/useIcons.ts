// https://stackoverflow.com/a/66828783
import * as Icons from '@mui/icons-material';
import stringSimilarity from 'string-similarity';

function useIcons(word: any) {
  const iconsNames = Object.keys(Icons);

  const matches = stringSimilarity.findBestMatch(word, iconsNames);
  const bestMatch = matches.bestMatch.target;
  const Icon = Icons[bestMatch];
  return Icon;
}
export default useIcons;

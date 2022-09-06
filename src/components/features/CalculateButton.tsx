import Fab from '@mui/material/Fab';
import CalculateIcon from '@mui/icons-material/Calculate';
import { useRouter } from 'next/router';
// Import RoutingS from '../../services/RoutingS';
import { ThemingS, CSSConfig } from '../../services/ThemingS';

type ButtonProps = {
  companyName?: string;
  project?: string;
};

const floatingButtonStyles: CSSConfig = {
  floatingActionButton: {
    position: 'fixed',
    padding: '1.7rem',
    zIndex: 1,
    right: '2em',
    bottom: ThemingS.SPACING.floatingButtonBottomOffset,
    cursor: 'pointer'
  }
};

export default function CalculateButton({ companyName = '', project = '' }: ButtonProps) {
  const router = useRouter();

  const handleClick = (e: any, path: string) => {
    e.preventDefault();

    router.push(path);
  };

  return (
    <Fab
      style={floatingButtonStyles.floatingActionButton}
      variant="extended"
      size="large"
      color="primary"
      aria-label="add"
      onClick={(e) => handleClick(e, '/results')}
    >
      <CalculateIcon style={{ marginRight: 10 }} />
      Calculate
    </Fab>
  );
}

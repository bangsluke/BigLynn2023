import { CSSProperties, ReactNode } from 'react';
import { Card, CardContent, CardContentProps, CardHeader, CardHeaderProps, CardProps, Divider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Constant
const headerSX = {
	'& .MuiCardHeader-action': { mr: 0 }
};

// ==============================|| CUSTOM MAIN CARD ||============================== //

export interface MainCardProps {
  border?: boolean;
  boxShadow?: boolean;
  children: ReactNode | string;
  style?: CSSProperties;
  content?: boolean;
  className?: string;
  contentClass?: string;
  contentSX?: CardContentProps['sx'];
  darkTitle?: boolean;
  sx?: CardProps['sx'];
  secondary?: CardHeaderProps['action'];
  shadow?: string;
  elevation?: number;
  title?: ReactNode | string;
}

// eslint-disable-next-line react/display-name
export default function MainCard({
	border = true,
	boxShadow,
	children,
	content = true,
	contentClass = '',
	contentSX = {},
	darkTitle,
	secondary,
	shadow,
	sx = {},
	title,
	...others
}: MainCardProps) {
	const theme = useTheme();

	return (
		<Card
			{...others}
			sx={{
				border: border ? '1px solid' : 'none',
				borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary[200] + 75,
				':hover': {
					boxShadow: boxShadow
						? shadow || (theme.palette.mode === 'dark' ? '0 2px 14px 0 rgb(33 150 243 / 10%)' : '0 2px 14px 0 rgb(32 40 45 / 8%)')
						: 'inherit'
				},
				...sx
			}}>
			{/* Card header and action */}
			{!darkTitle && title && <CardHeader sx={headerSX} title={title} action={secondary} />}
			{darkTitle && title && <CardHeader sx={headerSX} title={<Typography variant='h3'>{title}</Typography>} action={secondary} />}

			{/* Content & header divider */}
			{title && <Divider />}

			{/* Card content */}
			{content && (
				<CardContent sx={contentSX} className={contentClass}>
					{children}
				</CardContent>
			)}
			{!content && children}
		</Card>
	);
}

import React, { ReactNode, Ref } from 'react';
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

interface SubCardProps {
  children: ReactNode | string | null;
  content?: boolean;
  className?: string;
  contentClass?: string;
  darkTitle?: boolean;
  secondary?: ReactNode | string | any;
  sx?: Record<string, unknown>;
  contentSX?: Record<string, unknown>;
  title?: ReactNode | string | any;
}

const SubCard = React.forwardRef(
	(
		{ children, className, content, contentClass, darkTitle, secondary, sx = {}, contentSX = {}, title, ...others }: SubCardProps,
		ref: Ref<HTMLDivElement>
	) => {
		const theme = useTheme();

		return (
			<Card
				ref={ref}
				sx={{
					border: '1px solid',
					borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.light + 15 : theme.palette.primary.light,
					':hover': {
						boxShadow: theme.palette.mode === 'dark' ? '0 2px 14px 0 rgb(33 150 243 / 10%)' : '0 2px 14px 0 rgb(32 40 45 / 8%)'
					},
					...sx
				}}
				{...others}>
				{/* Card header and action */}
				{!darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant='h5'>{title}</Typography>} action={secondary} />}
				{darkTitle && title && <CardHeader sx={{ p: 2.5 }} title={<Typography variant='h4'>{title}</Typography>} action={secondary} />}

				{/* Content & header divider */}
				{title && (
					<Divider
						sx={{
							opacity: 1,
							borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.light + 15 : theme.palette.primary.light
						}}
					/>
				)}

				{/* Card content */}
				{content && (
					<CardContent sx={{ p: 2.5, ...contentSX }} className={contentClass || ''}>
						{children}
					</CardContent>
				)}
				{!content && children}
			</Card>
		);
	}
);

SubCard.displayName = 'SubCard';

SubCard.defaultProps = {
	content: true
};

export default SubCard;

import { useTheme } from '@mui/material/styles';
import { Avatar, Box } from '@mui/material';
import Logo from 'components/ui/Logo';
import { IconMenu2 } from '@tabler/icons';

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

export default function Header() {
	const theme = useTheme();

	return (
		<>
			{/* Logo & toggler button */}
			<Box
				sx={{
					width: 228,
					display: 'flex',
					[theme.breakpoints.down('md')]: {
						width: 'auto'
					}
				}}>
				<Box component='span' sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
					<Logo />
				</Box>
				<Avatar
					variant='rounded'
					data-testid='drawer'
					sx={{
						...theme.typography.commonAvatar,
						...theme.typography.mediumAvatar,
						overflow: 'hidden',
						transition: 'all .2s ease-in-out',
						background: theme.palette.mode === 'dark' ? theme.palette.dark.main : theme.palette.secondary.light,
						color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.background.paper,
						'&:hover': {
							background: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.secondary.dark,
							color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.light
						},
						marginTop: '10px'
					}}
					color='inherit'>
					<IconMenu2 stroke={1.5} size='20px' />
				</Avatar>
			</Box>

			{/* Header search */}
			{/* <SearchSection /> */}
			<Box sx={{ flexGrow: 1 }} />
			<Box sx={{ flexGrow: 1 }} />

			{/* Live customization & localization */}
			{/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <LocalizationSection />
      </Box> */}

			{/* Notification & profile */}
			{/* <NotificationSection /> */}
			{/* <ProfileSection /> */}

			{/* Mobile header */}
			{/* <Box sx={{ display: { xs: "block", sm: "none" } }}>
				<MobileSection />
			</Box> */}
		</>
	);
}

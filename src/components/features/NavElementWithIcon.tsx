import { Link, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import useIcons from 'hooks/useIcons';

const NavElementWithIcon = (props: { id: number; name: string; anchor: string; iconName: string }) => {
  const { id, name, anchor, iconName } = props; // Destructure props

  // Dynamically import the MUI Icon - https://stackoverflow.com/a/66828783
  const MUIIcon = useIcons(iconName);
  // Console.log(MUIIcon);

  return (
    <Link key={id} style={{ textDecoration: 'none' }} href={`#${anchor}`}>
      <ListItemButton component="a">
        <ListItemIcon>
          <MUIIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </Link>
  );
};

export default NavElementWithIcon;

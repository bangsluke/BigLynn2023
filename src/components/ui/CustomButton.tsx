// material-ui
import { Button } from "@mui/material";
import { CSSConfig } from "fe/services/ThemingS";
import { MouseEventHandler } from "react";

// ==============================|| CUSTOM BUTTON ||============================== //

export interface ButtonProps {
	text: string;
	onClick: MouseEventHandler;
	enabled?: boolean;
	customStyles?: CSSConfig;
}

// eslint-disable-next-line react/display-name
export default function CustomButton({ text, onClick, enabled, ...others }: ButtonProps) {
	return (
		<Button onClick={onClick} disabled={!enabled} variant='contained' size='medium' style={customStyles.Button}>
			{text}
		</Button>
	);
}

const customStyles: CSSConfig = {
	Button: {
		zIndex: 1,
		borderRadius: 30,
		padding: "10px 20px",
		cursor: "pointer",
		top: "0px",
		// height: "10px",
		margin: "0px 5px", // Add a horizontal gap between the buttons
	},
};

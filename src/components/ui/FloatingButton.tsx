import Fab from "@mui/material/Fab";
import { CSSConfig, ThemingS } from "fe/services/ThemingS";
import { MouseEventHandler } from "react";

type ButtonProps = {
	companyName?: string;
	project?: string;
	rightSide: boolean;
	text: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	Icon: any;
	IconRightSide: boolean;
	enabled: boolean;
	onClickAction: MouseEventHandler<HTMLButtonElement>;
};

const FloatingButton: React.FC<ButtonProps> = ({ rightSide, text, Icon, IconRightSide, enabled, onClickAction }) => {
	return (
		<>
			{enabled ? (
				<Fab
					style={floatingButtonStyles.floatingActionButton}
					variant='extended'
					size='large'
					color='primary'
					aria-label='add'
					sx={{ right: rightSide ? "1em" : "null", left: rightSide ? "null" : "20em" }}
					onClick={onClickAction}>
					{IconRightSide ? <Icon style={{ marginRight: 10 }} /> : null}
					{text}
					{IconRightSide ? null : <Icon style={{ marginLeft: 10 }} />}
				</Fab>
			) : (
				<Fab
					style={floatingButtonStyles.floatingActionButton}
					variant='extended'
					size='large'
					color='primary'
					aria-label='add'
					sx={{ right: rightSide ? "1em" : "null", left: rightSide ? "null" : "20em" }}
					disabled>
					{IconRightSide ? <Icon style={{ marginRight: 10 }} /> : null}
					{text}
					{IconRightSide ? null : <Icon style={{ marginLeft: 10 }} />}
				</Fab>
			)}
		</>
	);
};

const floatingButtonStyles: CSSConfig = {
	floatingActionButton: {
		position: "fixed",
		zIndex: 1,
		borderRadius: 30,
		padding: "10px 20px",
		bottom: ThemingS.SPACING.floatingButtonBottomOffset,
		cursor: "pointer",
	},
};

export default FloatingButton;

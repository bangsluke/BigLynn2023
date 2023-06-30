import { HandicapProps, Marks } from "../Players/HandicapRange";

export function getHandicapMarks(props: HandicapProps) {
	const { lowestHandicap, highestHandicap, currentHandicap } = props; // Destructure props

	// Initialize marks with a 0 value handicap
	const marks: Marks[] = [
		{
			value: 0,
			label: "0",
		},
	];

	// Deal with the case where the highest handicap is greater than 36
	if (highestHandicap > 36) {
		// If the current handicap is the highest handicap, add it to the marks
		if (currentHandicap === highestHandicap) {
			// Push current handicap to the marks
			marks.push({
				value: (currentHandicap / highestHandicap) * 100,
				label: `${currentHandicap} - Current`,
			});
			// Also show 36
			marks.push({
				value: (36 / highestHandicap) * 100,
				label: "36",
			});
		} else {
			// Push current handicap to the marks
			marks.push({
				value: (currentHandicap / highestHandicap) * 100,
				label: `${currentHandicap} - Current`,
			});
			// Add the highest handicap to the marks
			marks.push({
				value: 100,
				label: highestHandicap.toString(),
			});
			// Push the lowest handicap to the marks if it makes sense
			if (lowestHandicap !== currentHandicap) {
				marks.push({
					value: (lowestHandicap / highestHandicap) * 100,
					label: `${lowestHandicap} - Lowest`,
				});
			}
		}
	} else {
		// Deal with everyone else with a max handicap of 36 or less

		// Push current handicap to the marks
		marks.push({
			value: (currentHandicap / 36) * 100,
			label: `${currentHandicap} - Current`,
		});

		// Push 36 to the marks if it makes sense
		if (highestHandicap !== 36) {
			marks.push({
				value: 100,
				label: "36",
			});
		}

		// Push the highest handicap to the marks if it makes sense
		if (highestHandicap !== 36 && highestHandicap !== currentHandicap) {
			marks.push({
				value: (highestHandicap / 36) * 100,
				label: `${highestHandicap} - Highest`,
			});
		}

		// Push the lowest handicap to the marks if it makes sense
		if (lowestHandicap !== currentHandicap) {
			marks.push({
				value: (lowestHandicap / 36) * 100,
				label: `${lowestHandicap} - Lowest`,
			});
		}
	}

	return marks;
}

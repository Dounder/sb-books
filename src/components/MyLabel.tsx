import "./mylabel.css";

export interface MyLabelProps {
	/**
	 * This is the text to display in the label
	 */
	label: string;
	/**
	 * This is the size of the label
	 */
	size?: "normal" | "h1" | "h2" | "h3";
	/**
	 * This the option to display the label in all caps
	 */
	allCaps?: boolean;
	/**
	 * This is the color of the label
	 */
	color?: "primary" | "secondary" | "tertiary";
    /**
     * This is the custom color of the label
     */
	fontColor?: string;
}

export const MyLabel = ({
	label = "No Label",
	size = "normal",
	allCaps = false,
	color = "primary",
    fontColor
}: MyLabelProps) => {
	return (
		<span className={["label", size, `text-${color}`].join(" ")} style={{color: fontColor}}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};

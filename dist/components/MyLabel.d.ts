/// <reference types="react" />
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
    /**
     * This is the custom color of the label
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor }: MyLabelProps) => JSX.Element;

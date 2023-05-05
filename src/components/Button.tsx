import { ButtonHTMLAttributes } from "react";

// type == variable like const, let, or var for interface
type ButtonColor = "primary" | "danger" | "success" | "warning" | "info" | "light" | "dark";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: ButtonColor;
	outline?: boolean;
	onClick?: () => void;
}

const Button = ({ children = "Click", type = "submit", onClick, color = "primary", outline = false, className, ...rest }: Props) => {
	// Uses .trim() to remove any whitespace from the beginning or end of the string
	/*
  This can be useful in cases where the className parameter is optional and may 
  be undefined, because it ensures that the final string does not have 
  unnecessary whitespace that could cause issues with CSS styling.
  */
	const classes = `btn btn${outline ? "-outline" : ""}-${color} ${className ?? ""}`.trim();

	return (
		<button className={classes} type={type} onClick={onClick} {...rest}>
			{children}
		</button>
	);
};

export default Button;

interface Props {
	children: string;
	buttonType?: "submit" | "reset" | "button";
	onClick?: () => void;
	color?: "primary" | "danger" | "success" | "warning" | "info" | "light" | "dark";
	outline?: boolean;
	otherClass?: string;
}

const Button = ({ children = "Click", buttonType = "submit", onClick, color = "primary", outline = false, otherClass }: Props) => {
	if (outline)
		return (
			<button className={"btn btn-outline-" + color + " " + otherClass} type={buttonType} onClick={onClick}>
				{children}
			</button>
		);

	return (
		<button className={"btn btn-" + color + " " + otherClass} type={buttonType} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;

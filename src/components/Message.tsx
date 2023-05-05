interface Props {
	children: string;
}

const Message = ({ children }: Props) => {
	return (
		<>
			{children && (
				<p>
					<i>{children}</i>
				</p>
			)}
		</>
	);
};

export default Message;

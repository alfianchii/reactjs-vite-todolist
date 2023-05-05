interface Props {
	children: string;
}

const Message = ({ children }: Props) => {
	return (
		<>
			{children && (
				<div className="alert alert-danger" role="alert">
					{children}
				</div>
			)}
		</>
	);
};

export default Message;

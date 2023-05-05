interface Props {
	children: React.ReactNode;
	madeBy: string;
	socmed: string;
}

const Heading = ({ children, madeBy, socmed }: Props) => {
	return (
		<div className="text-center mb-3">
			<h1>{children}</h1>

			<span className="mb-3 mt-2 d-inline-block h6 font-monospace font-weight-light text-muted">
				Made with{" "}
				<svg fill="red" xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-heart-fill" viewBox="0 0 16 16">
					<path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"></path>
				</svg>{" "}
				by{" "}
				<a href={socmed} rel="noreferrer" className="text-decoration-none" target="_blank">
					{madeBy}
				</a>
			</span>
		</div>
	);
};

export default Heading;

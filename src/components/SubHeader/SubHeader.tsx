type SubHeaderProps = {
	children: React.ReactNode;
};
const SubHeader = ({ children }: SubHeaderProps) => {
	return <p>{children}</p>;
};

export default SubHeader;

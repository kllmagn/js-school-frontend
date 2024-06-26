type SkeletonWrapperProps = {
	target: React.ReactNode;
	skeleton: React.ReactNode;
	isLoading: boolean;
};

export const SkeletonWrapper = ({
	target,
	skeleton,
	isLoading,
}: SkeletonWrapperProps) => {
	return <>{isLoading ? skeleton : target}</>;
};

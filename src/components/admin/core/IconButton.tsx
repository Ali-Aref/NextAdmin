interface IconButtonInterface {
	action?: (e: any) => void;
	indicator?: string;
	icon: any;
}

const IconButton = ({ icon, indicator, action }: IconButtonInterface) => {
	return (
		<label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-base-100 hover:text-base-content">
			<div className="indicator">
				{icon}
				{indicator && (
					<span className="badge badge-sm indicator-item">{indicator}</span>
				)}
			</div>
		</label>
	);
};

export default IconButton;

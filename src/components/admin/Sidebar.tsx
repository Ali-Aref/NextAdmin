import { v4 as uuidv4 } from "uuid";
import IconButton from "./core/IconButton";
import { BsSearch, BsLock, BsGrid, BsCart3 } from "react-icons/bs";
import {
	RiLightbulbFlashLine,
	RiNotification2Line,
	RiLogoutCircleRLine,
} from "react-icons/ri";
import {
	LuShirt,
	LuUser,
	LuTv,
	LuSettings,
	LuTag,
	LuMenu,
} from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import SidebarItem, { SidebarSubItemInterface } from "./SidebarItem";
import { unique } from "next/dist/build/utils";

const Sidebar = () => {
	const Items = [
		{ label: "Dashboard", icon: <BsGrid /> },
		{
			label: "Products",
			icon: <LuShirt />,
			subItems: [{ label: "New" }, { label: "List" }, { label: "Detail" }],
		},
		{
			label: "Orders",
			icon: <BsCart3 />,
			subItems: [{ label: "List" }, { label: "Detail" }],
		},
		{
			label: "Customers",
			icon: <LuUser />,
			subItems: [{ label: "List" }, { label: "Detail" }],
		},
		{
			label: "Store Front",
			icon: <LuTv />,
			subItems: [{ label: "List" }, { label: "Detail" }],
		},
		{
			label: "Shipping",
			icon: <LiaShippingFastSolid />,
		},
		{
			label: "Discount",
			icon: <LuTag />,
		},
		{
			label: "Settings",
			icon: <LuSettings />,
		},
	];

	const avatarComponent = (
		<div className="flex items-center flex-col">
			<div className="dropdown dropdown-bottom flex justify-center">
				<label tabIndex={0}>
					<div className="hover:shadow-lg flex flex-col items-center px-8 py-2 rounded-xl cursor-pointer">
						<div className="avatar">
							<div className="w-24 mask mask-squircle">
								<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
							</div>
						</div>
						<span className="font-bold text-md my-2">John Deo</span>
					</div>
				</label>
				<div
					tabIndex={0}
					className="dropdown-content z-[2] menu p-2 shadow rounded-box w-64 bg-base-100 text-base-content"
				>
					<ul className="menu">
						<li>
							<a className="hover:bg-primary hover:text-primary-content">
								<LuUser size={18} /> Profile
							</a>
						</li>
						<li>
							<a className="hover:bg-primary hover:text-primary-content">
								<BsLock size={18} /> Change Password
							</a>
						</li>
						<li>
							<a className="hover:bg-primary hover:text-primary-content">
								<RiLogoutCircleRLine size={18} /> Logout
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);

	const systemButtons = (
		<div className="flex justify-center">
			<IconButton icon={<BsSearch size={18} />} />
			<IconButton icon={<BsLock size={18} />} />
			<IconButton icon={<RiLightbulbFlashLine size={18} />} />
			<IconButton icon={<RiNotification2Line size={18} />} />
		</div>
	);

	const renderItems = Items.map((item: SidebarSubItemInterface, i: number) => (
		<SidebarItem key={`sbi-${i}`} {...item} />
	));


	return (
		<div className="">
			<div className="drawer">
				<input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
				<div className="drawer-content">
					<div className="flex justify-between items-center rounded-br-lg rounded-bl-lg px-4 py-2 bg-primary text-primary-content lg:hidden">
						<div className="flex-auto w-full">LOGO</div>
						<div className="flex-auto i">
							<label
								htmlFor="sidebar-drawer"
								className="drawer-button tex-end"
							>
								<LuMenu size={22} className="cursor-pointer" />
							</label>
						</div>
					</div>
				</div>
				<div className="drawer-side lg:hidden">
					<label htmlFor="sidebar-drawer" className="drawer-overlay"></label>
					<div className="menu bg-primary text-primary-content px-8 py-5 rounded-tr-2xl min-h-screen rounded-br-2xl w-[22.5rem]">
						{avatarComponent}
						{systemButtons}
						{renderItems}
					</div>
				</div>
			</div>
			<div
				className="bg-primary text-primary-content px-8 py-5 rounded-tr-2xl min-h-screen rounded-br-2xl 
		hidden w-[22.5rem] lg:block"
			>
				{avatarComponent}
				{systemButtons}
				{renderItems}
			</div>
		</div>
	);
};

export default Sidebar;

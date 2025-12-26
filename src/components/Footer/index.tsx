import { Copyright } from "../Copyright";
import { MenuItems } from "../MenuItems";
import { SocialLinks } from "../SocialLinks";
import { SubscriptionForm } from "../SubscriptionForm";

export const Footer = () => {
	return (
		<footer className="bg-footer-bg">
			<div className="container">
				<div className="flex flex-col lg:flex-row justify-between py-10 px-2 gap-4">
					<div className="flex flex-col gap-8 min-w-[280px] sm:min-w-[344px]">
						<SubscriptionForm />
						<SocialLinks />
					</div>

					<MenuItems />
				</div>
				<Copyright />
			</div>
		</footer>
	);
};

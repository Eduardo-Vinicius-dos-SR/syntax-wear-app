const menus = [
	{ title: "Masculino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
	{ title: "Feminino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
	{ title: "Outlet", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
	{ title: "Sobre", items: ["Quem somos", "Missão"] },
];

export const MenuItems = () => {
	return (
		<div className="flex flex-col sm:flex-row gap-10 mt-2 md:mt-0">
			{menus.map(({ title, items }) => (
				<nav>
					<ul className="flex flex-col gap-4">
						<li>
							<p className="font-normal text-surface-alt text-xl">{title}</p>
						</li>
						{items.map((item) => (
							<li key={item}>
								<a href="#" className="font-medium hover:text-[#cccccc] transition-colors text-xl">
									{item}
								</a>
							</li>
						))}
					</ul>
				</nav>
			))}
		</div>
	);
};

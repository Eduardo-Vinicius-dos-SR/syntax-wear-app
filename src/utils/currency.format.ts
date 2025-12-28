export type FormatCurrencyOptions = {
	locale?: string;
	currency?: string;
	minimumFractionDigits?: number;
	maximumFractionDigits?: number;
};

/**
 * Formata um valor como moeda.
 * Aceita number, string com número, ou null/undefined (retorna string vazia).
 * Padrões: locale = 'pt-BR', currency = 'BRL'.
 */
export function formatCurrency(value: number | string | null | undefined, options: FormatCurrencyOptions = {}): string {
	if (value === null || value === undefined || value === "") return "";

	const { locale = "pt-BR", currency = "BRL", minimumFractionDigits, maximumFractionDigits } = options;

	// Normaliza string com vírgula/point
	let numeric =
		typeof value === "number"
			? value
			: Number(
					String(value)
						.replace(/[^0-9-,.]/g, "")
						.replace(/,/g, ".")
				);

	if (Number.isNaN(numeric)) return "";

	const fmtOptions: Intl.NumberFormatOptions = {
		style: "currency",
		currency,
	};

	if (typeof minimumFractionDigits === "number") fmtOptions.minimumFractionDigits = minimumFractionDigits;
	if (typeof maximumFractionDigits === "number") fmtOptions.maximumFractionDigits = maximumFractionDigits;

	return new Intl.NumberFormat(locale, fmtOptions).format(numeric);
}

export default formatCurrency;

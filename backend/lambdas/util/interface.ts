export interface currencyResult {
    currency: string,
    date: string,
    buy_price: string,
    sell_price: string,
    buy_time: string,
    sell_time: string,
    profit: string
}

export interface arguments {
    date: string,
    currency?: string
}

export interface quoteData {
    time: string,
    price: string
}

export interface currencyData {
    currency: string,
    date: string,
    quotes: quoteData[]
}
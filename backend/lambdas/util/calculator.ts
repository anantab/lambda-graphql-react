import { currencyResult, arguments, quoteData, currencyData } from "./interface";

class profitCalculator {
    private data: [] = [];

    public setData(data: []) {
        this.data = data;
        return this;
    }

    public getData() {
        return this.data;
    }

    public getResultsForADate(arg: arguments): currencyResult[] {
        if (typeof arg.date == "undefined") {
            return [];
        }
        let data = this.getData();
        let result: currencyResult[] = [];
        for (let i = 0; i < data.length; i++) {
            let currency: currencyData = data[i];
            if (currency.date != arg.date ||
                (typeof arg.currency == "string" && arg.currency != currency.currency)) {
                continue;
            }
            let profitData = this.getprofitForQuotes(currency.quotes);
            let currencyProfitData = {
                currency: currency.currency,
                date: arg.date,
                profit: profitData.profit,
                buy_time: profitData.buy_time,
                buy_price: profitData.buy_price,
                sell_time: profitData.sell_time,
                sell_price: profitData.sell_price
            };
            result.push(currencyProfitData);
        }
        return result;
    }

    private getprofitForQuotes(quotes: quoteData[]): any {
        let buy_time = quotes[0].time;
        let buy_price = quotes[0].price;
        let sell_time = quotes[0].time;
        let sell_price = quotes[0].price;
        let profit: any = 0;

        //assumption:quotes can be in random order of time.
        for (let i = 0; i < quotes.length; i++) {
            for (let j = 0; j < quotes.length; j++) {
                if (parseInt(quotes[j].time) > parseInt(quotes[i].time) &&
                    parseFloat(quotes[j].price) > parseFloat(quotes[i].price)) {
                    if (i == j) {
                        continue;
                    }
                    let currentProfit = parseFloat(quotes[j].price) - parseFloat(quotes[i].price);
                    if (currentProfit > profit) {
                        profit = currentProfit;
                        buy_time = quotes[i].time;
                        buy_price = quotes[i].price;
                        sell_time = quotes[j].time;
                        sell_price = quotes[j].price;
                    }
                }
            }
        }
        profit = profit.toFixed(2).toString();
        return {
            profit,
            buy_time,
            buy_price,
            sell_time,
            sell_price
        }
    }
}

export default profitCalculator;
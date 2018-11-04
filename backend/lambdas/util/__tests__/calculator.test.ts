import * as data from "../../../data.json";
import profitCalculator from "../calculator";
import { currencyResult, arguments } from "../interface";
let calculator: profitCalculator;

describe("Test Calculator", () => {
    beforeAll(() => {
        calculator = new profitCalculator();
        calculator.setData(<any>data);
    });
    it("It Should return all currencies for a day", () => {
        let args: arguments = {
            date: "20180507"
        };
        let result: currencyResult[] = calculator.getResultsForADate(args);
        expect(result.length).toBe(3);
        expect(result[0].currency).toBe("BTC");
        expect(result[0].date).toBe("20180507");
        expect(result[0].profit).toBe("2.03");
        expect(result[0].buy_time).toBe("0915");
        expect(result[0].buy_price).toBe("34.98");
        expect(result[0].sell_time).toBe("1230");
        expect(result[0].sell_price).toBe("37.01");
    });

    it("It Should return only result of currency supplied in argument", () => {
        let args: arguments = {
            date: "20180508",
            currency: "ETC"
        };
        let result: currencyResult[] = calculator.getResultsForADate(args);
        expect(result.length).toBe(1);
        expect(result[0].currency).toBe("ETC");
        expect(result[0].date).toBe("20180508");
        expect(result[0].profit).toBe("1.60");
        expect(result[0].buy_time).toBe("1245");
        expect(result[0].buy_price).toBe("1.55");
        expect(result[0].sell_time).toBe("1700");
        expect(result[0].sell_price).toBe("3.15");
    });
});

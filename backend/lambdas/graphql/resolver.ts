import * as data from "../../data.json";
import { currencyResult, arguments } from "../util/interface";
import profitCalculator from "../util/calculator";

const currencyResolver = (root: any, args: arguments): currencyResult[] => {
    let calculator = new profitCalculator();
    calculator.setData(<any>data);
    return calculator.getResultsForADate(args);
};

export const resolvers = {
    Query: {
        data: (root: any, args: arguments) => currencyResolver(root, args),
    },
};

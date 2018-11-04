const currencyQuery = `
    data(
        date:String!,
        currency:String,
        ): [currencyResult]!
`;

const currentyResultTypes = `
type currencyResult {
            currency: String!
            date: String!
            buy_price: String!
            sell_price: String!
            buy_time: String!
            sell_time: String!
            profit: String!
        }
`;

const schema = `
    type Query {
        ${currencyQuery}
    }
        ${currentyResultTypes}
`;

export default schema;

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import DataDisplay from '../DataDisplay';
test('Renders data correctly', () => {
    const item = {
        "date": "20180507",
        "currency": "BTC",
        "buy_time": "0915",
        "buy_price": "34.98",
        "sell_time": "1230",
        "sell_price": "37.01",
        "profit": "2.03"
    }

    const component = renderer.create(
        <DataDisplay item={item} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
import * as React from 'react';
import { formatDate, formatTime } from '../lib';

class DataDisplay extends React.Component<any, any> {
    public render() {
        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td colSpan={2}>{formatDate(this.props.item.date)}</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="table-secondary">{this.props.item.currency}</td>
                    </tr>
                    <tr>
                        <td><strong>Buy</strong></td>
                        <td><strong>Sell</strong></td>
                    </tr>
                    <tr>
                        <td>${this.props.item.buy_price}</td>
                        <td>${this.props.item.sell_price}</td>
                    </tr>
                    <tr>
                        <td>{formatTime(this.props.item.buy_time)}</td>
                        <td>{formatTime(this.props.item.sell_time)}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Profit: ${this.props.item.profit}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default DataDisplay;


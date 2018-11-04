import * as React from 'react';
import { connect } from 'react-redux';
import { fetchData } from "../actions"

class SearchForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            date: this.props.date,
            currency: this.props.currency
        }
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    public handleChange(event: any) {
        const formState = {};
        formState[event.target.name] = event.target.value;
        this.setState(formState);
    }

    public submit(e: any) {
        e.preventDefault();
        this.props.fetchData(this.state.date, this.state.currency);
    }

    public render() {
        return (
            <form className="form-inline mt-5 mb-5" onSubmit={this.submit}>
                <div className="form-group mb-2">
                    <label className="pr-3">Date</label>
                    <input type="text" name="date" className="form-control" placeholder="yyyymmdd" value={this.state.date} onChange={this.handleChange} />
                </div>
                <div className="form-group mb-2">
                    <label className="pr-3 pl-3">Currency</label>
                    <input type="text" name="currency" className="form-control" value={this.state.currency} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary mb-2 ml-3"> Show Results </button>
            </form>
        );
    }
}
const mapStateToProps = (state: any, ownProps: any) => {
    return {
        ...ownProps, date: state.dataReducer.date, currency: state.dataReducer.currency
    };
}

export default connect(mapStateToProps, { fetchData })(SearchForm);


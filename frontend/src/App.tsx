import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';
import DataDisplay from './components/DataDisplay';
import SearchForm from './components/SearchForm';
import { initializeData } from "./actions"


class App extends React.Component<any, any> {

  public componentWillMount() {
    this.props.initializeData();
  }

  public render() {

    const data = this.props.data;
    const info: any[] = [];
    const result: any[] = [];
    if (this.props.loading) {
      info.push(<div className="row"><div className="col-4">Loading...</div></div>);
    }
    if (data.length === 0) {
      info.push(<div className="row"><div className="col-4" >No data.</div></div >);
    } else {
      data.forEach((item: any, key: number) => {
        result.push(<div className="col-4" key={key}><DataDisplay item={item} key={key} /></div>);
      });
    }
    return (
      <div className="App container container-fluid px-3">
        <SearchForm />
        {info}
        <div className="row">
          {result}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    loading: state.dataReducer.loading,
    data: state.dataReducer.results
  };
}

export default connect(mapStateToProps, { initializeData })(App);

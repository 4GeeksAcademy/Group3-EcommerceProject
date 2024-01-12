import React, {Component} from "react";


export default class MainContent extends Component {
    state = { 
        pageTitle: "Customers", 
        customersCount: 5, 
        customers: [
            {id:1, name: "Scott", phone: "123-456", address: {city: "San Jose"}},
            {id:2, name: "Jones", phone: "543-568", address: {city: "New York"}},
            {id:3, name: "Allen", phone: "927-381", address: {city: "Sacramento"}},
            {id:4, name: "James", phone: "072-265", address: {city: "Houston"}},
            {id:5, name: "John", phone: "044-223", address: {city: "Miami"}},
        ]
    };

    

    render() {
      return (
        <div>
          <h4 className="border-bottom m-1 p-1">
            {this.state.pageTitle}

            <span className="badge badge-secondary m-2 bg-secondary">
                {this.state.customersCount}
            </span>
            <button className="btn btn-info text-light" onClick={this.onRefreshClick}>Refresh</button>
          </h4>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.customers.map((cust)=> {
                        return(
                        <tr key={cust.id}>
                            <td>{cust.id}</td>
                            <td>{cust.name}</td>
                            <td>{cust.phone}</td>
                            <td>{cust.address.city}</td>
                        </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
      );
    }
    
    onRefreshClick = () => {
        this.setState({
            customersCount:7,
        });
    };


}
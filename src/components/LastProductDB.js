import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class LastProductDB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            items: []
        };
    }


    componentDidMount() {
        fetch('http://localhost:3000/api/productsExtra/lastProductDB')
        .then(result=>result.json())
        .then(item=>this.setState({
            done: true,
            item
        }))
    }

    render() {
        return(
            <div className="col-lg-12 mb-4">
                {
                     this.state.done ? (
                        <div className="card shadow h-100 mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Last product in Data Base: <span className='text-dark'>{this.state.item.data.product.name}</span></h6>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 400}} src={this.state.item.data.product.image} alt=""/>
                                </div>
                                <p>{this.state.item.data.product.description}</p>
                                <Link to={`/products/${this.state.item.data.product.id}`}> View product detail </Link>
                            </div>
                        </div>
                    ) : (
                        <p>Cargando resultados...</p>
                    )
                }
            </div>
        )
    }
}

export default LastProductDB
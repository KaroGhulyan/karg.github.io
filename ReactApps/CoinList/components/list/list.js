import React from 'react';
import { API_URL } from '../../config';
import { handleResponse } from '../../helper';
import Loading from '../common/loading';
import Table from './table';
import Pagination from './Pagination';


class List extends React.Component{
    constructor(){
        super();
        this.state = {
            currencies:[],
            loading:false,
            error:null,
            page:1,
            totalPages:0,
            
        }
        this.handlePanginationClick=this.handlePanginationClick.bind(this);
        // console.log("constructor");
    }
    // componentWillMount(){
    //     console.log("componenWillMount");
        
    // }
    componentDidMount(){
        this.fetchCurrencies();
        
    }
   
    handlePanginationClick(direction){
        let nextPage = this.state.page;
        nextPage = direction === "next" ? nextPage + 1 : nextPage - 1;
        this.setState({
            page:nextPage,
        },this.fetchCurrencies);
        
        
    }
    fetchCurrencies(){
        const { page } = this.state ;   
        this.setState({
            loading:true
        })
        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`) //sarqel em 1 1000-ic
        .then(handleResponse)
        .then((data) => {
        //   console.log(data);
          this.setState({
              currencies:data.currencies,
              loading:false,
              totalPages:data.totalPages,
            })                     //tuny nayel
        })
        .catch((error) => {
          console.log(error);
          this.setState({
              loading:false,
              error:"errorMessage",
          })
        });
    }
    render(){
        const {loading,error,currencies,page,totalPages}=this.state;
        console.log(this.state.currencies);
        // console.log(this.state);
        if(loading){
            return <div className="loading-container">
                <Loading/>
            </div>
        }
        if(error){
            return <div className="error">
                {error}
            </div>
        }
        return (<div>
            <Table currencies={currencies}/>;
            <Pagination handlePanginationClick={this.handlePanginationClick} page={page} totalPages={totalPages}/>
        </div>)
        
    }
}
export default List;
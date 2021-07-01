import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import React from "react"
import {Form,InputGroup} from "react-bootstrap"
import List from "./components/List.js"
import Typed from "react-typed"


class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			item:[],
			currentItem:{
			text:"",
			key:""
			}
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.deleteItem = this.deleteItem.bind(this)
	}	
	handleChange(e){
	
			this.setState({                     		
        			currentItem:{
        				text:e.target.value,
        				key:Date.now()
        			}
        		})		
	}
	handleSubmit(e){
		e.preventDefault()
		if(this.state.currentItem.text.length > 0){

		let newItem = [...this.state.item,this.state.currentItem]
		this.setState({
			item:newItem,
			currentItem:{
				text:""
			}
		})
		}
	
	}
	deleteItem(key){
		
			let deleted = this.state.item.filter(i => i.key!== key)
			this.setState({
					item:deleted
			})

	}
	render(){
		return(
			<div className="container">
			
				<h1 className="text-center text-primary mt-3">
				<Typed  
				strings={["Todo App","React Js","By Udinesia325"]}
				typeSpeed={100}
				backSpeed={40}
				loop
			/>
				</h1>
	
				<Form 
				className="my-5 bg-light shadow"
				onSubmit={this.handleSubmit}
			>
					<InputGroup>
					
						<Form.Control
						type="text"
						placeholder="tambah tugas ..."
						onChange={this.handleChange}
						value={this.state.currentItem.text}
					/>
							<InputGroup.Append>
								<Form.Control type="submit" value="tambah" className="btn btn-success"/>
							</InputGroup.Append>
						

					</InputGroup>
				</Form>
				<List  item={this.state.item} delete={this.deleteItem}/>	

			</div>
		)
	}

}
export default App;

import React from "react"
import {ListGroup} from "react-bootstrap"

const List = (props)=>{
	const ListItem = props.item.map(i =>{
		return <ListGroup.Item key={i.key}>
			{i.text}
			<button className=" btn btn-danger ml-5"
			onClick={()=> props.delete(i.key)}>&times;</button>
			</ListGroup.Item>
			})


	return(
		<ListGroup>{ListItem}</ListGroup>
	)

}
export default List

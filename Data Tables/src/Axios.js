import React, { useState } from "react";
import axios from "axios";

function Axios() {
	const [newfiles, setNewFiles] = useState('');


	function handleUpload() {

		//Add new Products
		fetch('https://fakestoreapi.com/products', {
			method: "POST",
			body: JSON.stringify(
				{
					title: 'Post product',
					price: 13.5,
					description: 'lorem ipsum set',
					image: 'https://i.pravatar.cc',
					category: 'electronic'
				}
			)
		})
			.then(res => res.json())
			.then(json => console.log("Post:", json))

		// get data through Axio
		fetch('https://fakestoreapi.com/products/category/jewelery')
			.then(res => res.json())
			.then(json => console.log("Get", json))


		// Update Product
		fetch('https://fakestoreapi.com/products/7', {
			method: "PUT",
			body: JSON.stringify(
				{
					title: 'Update product',
					price: 13.5,
					description: 'lorem ipsum set',
					image: 'https://i.pravatar.cc',
					category: 'electronic'
				}
			)
		})
			.then(res => res.json())
			.then(json => console.log("Update",json))



		// Delete	
			fetch('https://fakestoreapi.com/products/6',{
		        method:"DELETE"
		    })
		        .then(res=>res.json())
		        .then(json=>console.log("Delete",json))
	}

	return (
		<div>
			<button onClick={handleUpload()}>
				Test
			</button>
		</div>
	);
}


export default Axios;

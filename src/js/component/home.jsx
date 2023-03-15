import React, { useState } from "react";

export const Home = () => {
	
	const [active, setActive]= useState("")
	const handleClick = (event) => {
		console.log(event.target.id)
		setActive(event.target.id)
	}
	const [purple, setPurple] = useState(false)
	
	const handleNewColorButton = () => {	
		setPurple(!purple)
	}
	
	const handleButton = () => {
		switch(active){
			case "red":
				setActive("green")
			break;
			case "green":
				setActive("yellow")
			break;
			case "yellow":
				if(purple){
					setActive("purple")
				} else {
					setActive("red")
				}
			break;
			case "purple":
				setActive("red")
			break;
			default: setActive("green")
		}
	}
	return (
		<>
		<div className="text-center traffic-top">
		</div>
			<div className="container">
				<div className={`traffic-light red ${active === "red" ? "active" : "" }`} id="red" onClick={handleClick}></div>
				<div className={`traffic-light yellow ${active === "yellow" ? "active" : "" }`} id="yellow" onClick={handleClick}></div>
				<div className={`traffic-light green ${active === "green" ? "active" : "" }`} id="green" onClick={handleClick}></div>
				{ purple && <div className={`traffic-light purple ${active === "purple" ? "active" : "" }`} id="p" onClick={handleClick}></div>}
			</div>
			<div className='row d-flex justify-content-end'>
				<div className="col-8 ">
				<button type="button" class="btn btn-dark w-25 m-auto mt-3 sm-w-100" onClick={handleButton}>Change Color</button>
				<button type="button" class="btn btn-dark w-25 m-auto mt-3 sm-w-100" onClick={handleNewColorButton}>Add Color</button>
				</div>
				<h3 className="col-7 text-warning my-5"> by Guillermo Longueira 🖥️</h3>
			</div>
		
		</>
	);
};


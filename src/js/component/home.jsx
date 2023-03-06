import React, { useState } from "react";

//create your first component
const Home = () => {

	const [colorRed, setSelectRed]= useState("")
	const [colorGreen, setSelectGreen]= useState("")
	const [colorYellow, setSelectYellow]= useState("")
	const [colorPurple, setSelectPurple]= useState("")


	const [newDiv, setNewDiv]= useState("")


	const glowRender=(aux)=>{
		if(aux == "1"){
			setSelectRed("selected")
			setSelectGreen("")
			setSelectYellow("")
			setSelectPurple("")
		}else if (aux == "2"){
			setSelectYellow("selected")
			setSelectGreen("")
			setSelectRed("")
			setSelectPurple("")
		}else if( aux == "3"){
			setSelectGreen("selected")
			setSelectYellow("")
			setSelectRed("")
			setSelectPurple("")
		}else if(aux == "4"){
			setSelectPurple("selected")
			setSelectYellow("")
			setSelectRed("")
			setSelectGreen("")
		}
	}
	const changeColor=(ev)=>{
		const aux = ev.target.id
		glowRender(aux)
	}
	const randomColor=()=>{
		const aux = Math.floor(Math.random()*5)
		glowRender(aux)
	}

	const addColor=()=>{
		setNewDiv(<div onClick={changeColor} id="4" className={`purple light ${colorPurple}`}></div>)
	}


	return (
		<div className="d-flex justify-content-center flex-column">
		<div className="trafficTop"></div>
			<div className="container">
				<div onClick={changeColor} id="1" className={`red light ${colorRed}`}></div>
				<div onClick={changeColor} id="2" className={`yellow light ${colorYellow}`}></div>
				<div onClick={changeColor} id="3" className={`green light ${colorGreen}`}></div>
				{newDiv}
			</div>
			<button type="button" class="btn btn-dark w-25 m-auto mt-3" onClick={randomColor}>Change Color</button>
			<button type="button" class="btn btn-dark w-25 m-auto mt-3" onClick={addColor}>Add Color</button>
		</div>

	);
};

export default Home;

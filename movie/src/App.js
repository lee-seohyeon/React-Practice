import React, { useEffect, useState } from "react";

const App = () => {
	const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault(); //기본동작 실행하지 않도록
        if (toDo === "") {
            return ; //toDo가 비어있으면 함수가 작동하지 않도록 함.
        }
        setToDo(""); //누르면 비도록 
        setToDos(currentArray => [toDo, ...currentArray]);
    };
    console.log(toDos);
	return (
		<>
        <h1>My To Do List ({toDos.length}) </h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={toDo}
					type="text"
					placeholder="Write your to do"
				></input>
                <button>Add To Do</button>
			</form>
            <hr/>
            <ul>{toDos.map((item) => <li>{item}</li>)}</ul>
		</>
	);
};

export default App;

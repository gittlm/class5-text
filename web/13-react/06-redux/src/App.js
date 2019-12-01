import React,{Component} from 'react'
import './App.css'
import Item from './Item.js'

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			list:['吃饭','睡觉打','打豆豆'],
			task:''
		}
	}
	handleClick(){
		const list = [...this.state.list,this.state.task]
		this.setState((preState)=>({
			list:list,
			task:''
		}));
	}
	handleInput(ev){
		this.setState({
		   task:ev.target.value
		})
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState((preState)=>({
			list:list
		}))
	}
	render(){
		return (
			<div className='App'>
				<input onChange={this.handleInput.bind(this)} value={this.state.task}/>
				<button className='btn' onClick={this.handleClick.bind(this)}>提交</button>
				<ul className='list'>
					{
						/*
							<li>吃饭</li>
							<li>睡觉</li>
							<li>打豆豆</li>
						*/
						
						this.state.list.map((item,index)=>{
							/*return (<li key={index} onClick={this.handleDel.bind(this)}>{item}</li>)*/
							return (<Item key={index}/>)
						})
					}
				</ul>
			</div>
		)
	}
}

export default App
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
		this.handleInput=this.handleInput.bind(this)
		this.handleAdd=this.handleAdd.bind(this)
	}
	handleAdd(){
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
	getItem(){
		return this.state.list.map((item,index)=>{
			return (<Item
					 key={index}
					 task={item}
					 list={this.state.list}
					 index={index}
					 handleDel={this.handleDel.bind(this,index)}
			/>)
		})
	}
	render(){
		return (
			<div className='App'>
				<input onChange={this.handleInput} value={this.state.task}/>
				<button className='btn' onClick={this.handleAdd}>提交</button>
				<ul className='list'>
					{
						this.getItem()
					}
				</ul>
			</div>
		)
	}
}

export default App
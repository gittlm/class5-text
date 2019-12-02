import React,{Component} from 'react'
import './App.css'
import Item from './Item.js'

class App extends Component{
	constructor(props){
		super(props);
		this.state={//内部存储，初始化state
			list:['吃饭','睡觉打','打豆豆'],
			task:''
		}
		this.handleInput=this.handleInput.bind(this)
		this.handleAdd=this.handleAdd.bind(this)
	}
	handleAdd(){
		const list = [...this.state.list,this.state.task]
		this.setState((preState)=>({//this.setState可以返回一个回调函数，或者返回一个对象
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
		list.splice(index,1)//删除指定的下标值对应的对象
		this.setState((preState)=>({
			list:list
		}))
	}
	getItem(){//构建函数要把对象返回出去才能接收
		return this.state.list.map((item,index)=>{
			return (<Item//父组件给子组件传值和方法
					 key={index}
					 task={item}
					 list={this.state.list}
					 index={index}
					 handleDel={this.handleDel.bind(this,index)}
			/>)//开始使用组件
		})
	}
	render(){
		return (
			<div className='App'>
				<input onChange={this.handleInput} value={this.state.task}/>
				<button className='btn' onClick={this.handleAdd}>提交</button>
				<ul className='list'>
					{
						/*
							<li>吃饭</li>
							<li>睡觉</li>
							<li>打豆豆</li>
						*/
						
						// this.state.list.map((item,index)=>{
						// 	// return (<li 
						// 	// 		key={index} 
						// 	// 		onClick={this.handleDel.bind(this,index)}
						// 	// 		>
						// 	// 			{item}
						// 	// 		</li>)
						// 	return (<Item//父组件给子组件传值和方法
						// 			 key={index}
						// 			 task={item}
						// 			 list={this.state.list}
						// 			 index={index}
						// 			 handleDel={this.handleDel.bind(this,index)}
						// 			/>)//开始使用组件
						// })

						
						this.getItem()
					}
				</ul>
			</div>
		)
	}
}

export default App
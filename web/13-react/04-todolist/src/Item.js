import React,{Component} from 'react'

class Item extends Component{
	constructor(props){//外层组件传递数据的方式
		super(props)
	}
	// handleDelete(){
	// 	console.log(this.props.list)
	// 	console.log(this.props.task)
	// 	console.log(this.props.index)
	// }
	render(){
		const { handleDel,task }=this.props
		return(
			//试验传值过程
			// <li onClick={this.handleDelete.bind(this)}>{this.props.task}</li>

			<li onClick={handleDel}>{task}</li>
		)
		
	}
}

Item.propTypes={
	//用proptypes校验验证
	handleDel:PropTypes.func,//校验事件是函数
	task:PropTypes.string.isRequired//校验数据是字符串和必须要传值
}

Item.defaultProps={
	//如果父组件中不传值可以设置默认值
	task:'learn more'
}
export default Item
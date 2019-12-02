import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Item extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const { handleDel,task }=this.props
		return(
			<li onClick={handleDel}>{task}</li>
		)
	}
}
Item.propTypes={
	handleDel:PropTypes.func,//校验事件是函数
	task:PropTypes.string.isRequired//校验数据是字符串和必须要传值
}

Item.defaultProps={
	//如果父组件中不传值可以设置默认值
	task:'learn more'
}
export default Item
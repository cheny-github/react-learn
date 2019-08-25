# componentWillReceiveProps
componentWillReceiveProps在初始化render的时候不会执行，它会在Component接受到新的状态(Props)时被触发，一般用于父组件状态更新时子组件的重新渲染。这个东西十分好用，但是一旦用错也会造成十分严重的后果。



###### **使用**
---

在回调函数的第一个参数中可以拿到即将要更新的属性

`componentWillReceiveProps (nextProps)`


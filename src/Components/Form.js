import React,{useState} from 'react'

function Form(props){
    return(<><h1>Form Component</h1>
    <form name ="name" onSubmit={props.onSubmit}>
        <input type='text' onChange = {props.onChange}></input>
        <input type='submit'></input>
    </form>
    </>)
}
export default Form
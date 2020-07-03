import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { notification } from 'antd'

export default class login extends Component {
    constructor(props){
        super(props)
        let loggedin = false
        this.state = {
            username: '',
            password:'',
            loggedin
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

    }
    
    onChange(e)
    {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitForm(e)
    {
        e.preventDefault()
        const { username, password} = this.state
        if(username === "admin" && password==="admin")
        {
            localStorage.setItem("token","jzxcbmjbxckuiqe")
            this.setState({
                loggedIn: true
            })
        }
        else 
        {
            notification.error({
                message: 'Some thing went wrong',
              });
        }
    }
    render() {
        if(this.state.loggedIn){
            return <Redirect to="/admin"/>
        }
        return (
            <div className="containermain">
                <h1
                    style={{
                    textAlign: 'center',
                    marginTop: 10,
                    textTransform: 'uppercase',
                }}> LOGIN   
                </h1>
                <form onSubmit={this.submitForm}>
                    {/* <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}></input>
                    <br/>
                    <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}></input>
                    <br/>
                    <input type="submit"></input> */}
                    <div className="container">
                        <label htmlFor="uname">
                        <b>Username</b>
                        </label>
                        <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.onChange}></input>                        <label htmlFor="psw">
                        <b>Password</b>
                        </label>
                        <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}></input>
                        <button type="submit">Login</button>
                        <label>
                        <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
                        Remember me
                        </label>
                    </div>
                    <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                        <button type="button" className="cancelbtn">
                        Cancel
                        </button>
                        <span className="psw">
                        Forgot <a href="#">password?</a>
                        </span>
                    </div>
                    
                </form>
            </div>
        )
    }
}

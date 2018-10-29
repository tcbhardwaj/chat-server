import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ChatBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: "",
            chatMsg: ""
        };

        this.updateMsg = this.updateMsg.bind(this);
        this.sendMsg = this.sendMsg.bind(this);
    }

    updateMsg(event) {        
        this.setState({
            msg: event.target.value            
        });
    }

    async sendMsg(event) {        
        this.setState({
            msg: "",
            chatMsg :  this.state.chatMsg + ("Me:" +this.state.msg) + "\n"
        });
        await this.props.fetchChat(this.state.msg);        
        this.setState({
            chatMsg :  this.state.chatMsg + (this.props.chat) + "\n"
        })                   
    }

    render() {
        return (
            <div className="container">
                <div className="row">                    
                    <div className="col s10 offset-s1">
                        <h4> Chat-Box </h4>
                        <textarea 
                            value = {this.state.chatMsg}
                            name="msgArea"
                            rows={100}  readOnly={true} 
                            style={{overFlow: "auto", resize: "none", height: "150px"}}
                        >

                        </textarea>
                        <input 
                            name="msg"
                            value = {this.state.msg}
                            onChange={this.updateMsg}/>
                        <button onClick={this.sendMsg}>Send</button>                                               
                    </div>
                </div>                
            </div>
        );
    }
}

function mapStateToProps({chat}) {
    return { chat };
}

export default connect(mapStateToProps, actions)(ChatBox);
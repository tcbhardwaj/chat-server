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

    sendMsg(event) {        
        this.setState({
            msg: "",
            chatMsg :  this.state.chatMsg + ("Me:" +this.state.msg) + "\n"
        });
        this.props.fetchChat(this.state.msg);
        event.target.value = "";           
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s4 offset-s4">
                        <textarea 
                            value = {this.state.chatMsg}
                            name="msgArea"
                            rows="50"  readOnly={true} 
                            style={{overFlow: "auto", resize: "none", height: "150px"}}
                        >

                        </textarea>
                        <input 
                            name="msg"
                            value = {this.state.msg}
                            onChange={this.updateMsg}/>
                        <button onClick={this.sendMsg}>Send</button>
                        <label>{ this.props.chat }</label>
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
import React from "react";

import { Avatar } from "@material-ui/core";
import {
    ArrowDownwardOutlined,
    ArrowUpwardOutlined,
    ChatBubbleOutline,
    MoreHorizOutlined,
    RepeatOneOutlined,
    ShareOutlined,
} from "@material-ui/icons";
import "../post/post.css";

function post() {
    return (
        <div className="post">
            <div className="post_info">
                <Avatar />
                <h4>user name</h4>
                <small>Timestamp</small>
            </div>
            <div className="post_body">
                <div className="post_question">
                <p>This is test question</p>
                <button className="post_btnAnswer">Answer</button>
            </div>
            </div>
                <div className="post_footer">
                    <div className="post_footerAction">
                        <ArrowUpwardOutlined />
                        <ArrowDownwardOutlined />
                    </div>
                    <RepeatOneOutlined />
                    <ChatBubbleOutline />


                    <div className="post_footerLeft">
                        <ShareOutlined />
                        <MoreHorizOutlined />
                    </div>
                </div>

                <p style={{color:"rgba(0,0,0,0.5)", fontSize: "12px", fontWeight:"bold", margin:"10px 0px "}}>1 Answer</p>

                <div className="post_answer" style={{ margin: "5px 0px 0px 0px", padding: "5px 0px 0px 20px", borderTop: "1px solid lightgray" }}>

                    <div className="post-answer-container">
                        <div className="post-answered">
                            <Avatar />
                            <div className="post-info">
                                <p>username</p>
                                <span>Timestamp</span>
                            </div>
                        </div>
                        <div className="post-answer">This is test answer</div>
                    </div>
                </div>
            
        </div>
    );
}

export default post;

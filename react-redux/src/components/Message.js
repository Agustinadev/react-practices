import React from 'react'

const MessageErr = ({ msg, bgColor}) => {
    let styles = {
        padding: "1rem",
        marginBottom: "1rem",
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: bgColor,
    }
    return (
        <div style={styles}>
           <p dangerouslySetInnerHTML={{__html:msg}}/> 
        </div>
    )
}

export default MessageErr

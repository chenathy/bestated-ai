import React from 'react';
import { Message } from 'rsuite';


const NotificationMessage = ({response, message}) => {

    const type = response === 201 ?  'success' : 'error'
    
    return (
        <>
            <Message 
                type={type} 
                centered showIcon
                header={message}
            >
                <strong>{type} !</strong> {message}
            </Message>
        </>
    )
};

export default NotificationMessage;
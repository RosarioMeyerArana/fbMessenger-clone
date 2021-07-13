import React, { forwardRef } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './message.css'


const Message = forwardRef( ({username, message}, ref) => {
    
    const isUser = username === message.username
    

    return (
        <div ref={ref} className={`message ${isUser && 'messageUser'} `}> 
        <p className='message-userName'>
        {
            !isUser && `${message.username || 'Unknown User'}: `  
        }
        </p>
        <Card className={isUser ? 'messageUserCard' : 'messageGuestCard'}>
            <CardContent>
                <Typography
                // color="textSecondary"
                variant="body2" 
                component="p"
                >
                {message.message}
                </Typography>
            </CardContent>
        </Card> 
        </div>
    )
})

export default Message


import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (    
    <div style={{height: '100vh'}}>
        <PrettyChatWindow 
            projectId='ced21a9a-23e9-4a8e-bf1f-2f279f1a16b9'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
        />
    </div>
    )
}

export default ChatsPage
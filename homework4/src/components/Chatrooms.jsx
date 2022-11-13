import { List } from '@mui/material'
import { Chat } from './Chat.jsx';

export const Chatrooms = () => {

    const chatsArray = [
        {
            id: 1,
            name: 'Chat1'
        },
        {
            id: 2,
            name: 'Chat2'
        },
        {
            id: 3,
            name: 'Chat3'
        },
    ];

    return (
        <List>
            {
                chatsArray.map((e, i) => <Chat name={e.name} key={e.id} />)
            }
        </List>
    )
}

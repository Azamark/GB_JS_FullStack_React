import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom'

export const Chat = ({ id, name }) => {
    return (
        <NavLink to={`/chat/${id}`}>
            <ListItem sx={{ color: 'black' }}>
                <ListItemButton>
                    <ListItemIcon>
                        <ChatBubbleOutlineIcon />
                    </ListItemIcon>
                    <ListItemText primary={name} />
                </ListItemButton>
            </ListItem>
        </NavLink>
    )
}


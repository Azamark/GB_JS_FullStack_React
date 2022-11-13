import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export const Chat = ({ name }) => {
    return (
        <ListItem sx={{ color: 'black' }}>
            <ListItemButton>
                <ListItemIcon>
                    <ChatBubbleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    )
}


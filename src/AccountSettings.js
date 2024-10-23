import React, { useState } from 'react';
import { Box, TextField, Typography, Button, IconButton } from '@mui/material';
import { Edit as EditIcon, Key as KeyIcon, Email as EmailIcon, Person as PersonIcon } from '@mui/icons-material';

const AccountSettings = () => {
    const [name, setName] = useState('Your Name');
    const [email, setEmail] = useState('example@ufl.edu');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h3" sx={{ color: '#f5a623', marginBottom: 2 }}>
                Account Settings
            </Typography>

            {/* Name Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
                <PersonIcon sx={{ fontSize: 40, marginRight: 2 }} />
                <Typography variant="h6" sx={{ marginRight: 2 }}>
                    Name:
                </Typography>
                <TextField
                    value={name}
                    onChange={handleNameChange}
                    variant="outlined"
                    sx={{ width: '300px' }}
                />
                <IconButton>
                    <EditIcon />
                </IconButton>
            </Box>

            {/* Email Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
                <EmailIcon sx={{ fontSize: 40, marginRight: 2 }} />
                <Typography variant="h6" sx={{ marginRight: 2 }}>
                    Email:
                </Typography>
                <TextField
                    value={email}
                    onChange={handleEmailChange}
                    variant="outlined"
                    sx={{ width: '300px' }}
                />
                <IconButton>
                    <EditIcon />
                </IconButton>
            </Box>

            {/* Change Password Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 3 }}>
                <KeyIcon sx={{ fontSize: 40, marginRight: 2 }} />
                <Button variant="outlined">Change Password</Button>
            </Box>
        </Box>
    );
};

export default AccountSettings;

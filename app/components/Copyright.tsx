
'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Copyright() {
    return (
        <Box
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                zIndex: 1000,
            }}
        >
            <Typography variant="body2" color="text.secondary" align="right">
                {'Copyright © '}
                {new Date().getFullYear()}{' Hiro. All rights reserved.'}
            </Typography>
        </Box>
    );
}

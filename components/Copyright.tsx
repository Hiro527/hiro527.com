import { Box, Typography } from '@mui/material';

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
                Copyright © 2025 Hiro. All rights reserved.
            </Typography>
        </Box>
    );
}

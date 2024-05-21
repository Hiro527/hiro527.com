'use client';

import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Image from 'next/image';

import HiroIconColorBG from '@/public/hiro_icon_colorbg.png';

export default function Home() {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline></CssBaseline>
            <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <Grid item xs={10} md={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: {
                                xs: 'column',
                                md: 'row',
                            },
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Icon */}
                        <Box
                            sx={{
                                marginRight: {
                                    xs: 0,
                                    md: 5,
                                },
                                marginBottom: {
                                    xs: 2,
                                    md: 0,
                                },
                            }}
                        >
                            <Image src={HiroIconColorBG} alt="Hiro's icon" width={150} style={{ borderRadius: '50%' }}></Image>
                        </Box>
                        {/* Main Contents */}
                        <Box
                            sx={{
                                fontFamily: 'hiragino-kaku-gothic-pron, sans-serif',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: '30pt',
                                }}
                            >
                                Hiro
                            </Typography>
                            {/* SNS Link */}
                            <Box
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                <IconButton
                                    href="https://x.com/hirx527"
                                    rel="noreferrer noopener"
                                    target="_blank"
                                    sx={{
                                        marginRight: 1,
                                    }}
                                >
                                    <XIcon></XIcon>
                                </IconButton>
                                <IconButton href="https://github.com/Hiro527" rel="noreferrer noopener" target="_blank">
                                    <GitHubIcon></GitHubIcon>
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

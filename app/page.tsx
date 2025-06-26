'use client';

import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import { Box, IconButton, Link, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Image from 'next/image';

import HiroIconColorBG from '@/public/hiro_icon_colorbg.png';

export const runtime = 'edge';

export default function Home() {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
        },
        typography: {
            allVariants: {
                fontFamily: 'hiragino-kaku-gothic-pron, sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    width: '100vw',
                    overflowX: 'hidden',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            xs: 'column',
                            md: 'row',
                        },
                        alignItems: 'center',
                        justifyContent: 'center',
                        maxWidth: 'md',
                        width: '100%',
                        padding: {
                            xs: 2,
                            md: 0,
                        },
                        boxSizing: 'border-box',
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
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: {
                                xs: 'center',
                                md: 'flex-start',
                            },
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
                        <Typography>
                            🎂 2004/05/27
                            <br />
                            📍 Tokyo
                            <br />
                            🏢{' '}
                            <Link href="https://escl.co.jp" rel="noreferrer noopener" target="_blank">
                                ESCL
                            </Link>
                            {' / '}
                            <Link href="https://unlimit.games" rel="noreferrer noopener" target="_blank">
                                FT UNLIMIT
                            </Link>
                            <br />
                            💼 Software Engineer / Designer / Event Organizer
                        </Typography>
                        {/* SNS Link */}
                        <Box
                            sx={{
                                display: 'flex',
                                my: 1,
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
            </Box>
        </ThemeProvider>
    );
}

'use client';

import { Box, Grid, Typography } from '@mui/material';
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
                        <Box
                            sx={{
                                marginRight: {
                                    xs: 0,
                                    md: 5,
                                },
                            }}
                        >
                            <Image src={HiroIconColorBG} alt="Hiro's icon" width={128} style={{ borderRadius: '50%' }}></Image>
                        </Box>
                        <Typography>新しい時代のこころを映すタイプフェイスデザイン</Typography>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

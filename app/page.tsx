import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import { Box, IconButton, Link, Tooltip, Typography } from '@mui/material';

import Image from 'next/image';

import HiroIconColorBG from '@/public/hiro_icon_colorbg.png';
import Copyright from './components/Copyright';

export const runtime = 'edge';

export default function Home() {
    return (
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
                    <Image src={HiroIconColorBG} alt="Hiro's icon" width={200} style={{ borderRadius: '50%' }}></Image>
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
                        💼 System Engineer / Designer
                        <br />
                        💬 eスポーツ業界でお仕事してます
                    </Typography>
                    {/* SNS Link */}
                    <Box
                        sx={{
                            display: 'flex',
                            my: 1,
                        }}
                    >
                        <Tooltip title="Email">
                            <IconButton
                                href="mailto:contact@unlimit.games"
                                sx={{
                                    mr: 1,
                                }}
                            >
                                <EmailIcon></EmailIcon>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="X">
                            <IconButton
                                href="https://x.com/hirx527"
                                rel="noreferrer noopener"
                                target="_blank"
                                sx={{
                                    mr: 1,
                                }}
                            >
                                <XIcon></XIcon>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="GitHub">
                            <IconButton href="https://github.com/Hiro527" rel="noreferrer noopener" target="_blank">
                                <GitHubIcon></GitHubIcon>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
            <Copyright />
        </Box>
    );
}

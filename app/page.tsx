import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import XIcon from "@mui/icons-material/X"
import { Box, IconButton, Link, Tooltip, Typography } from "@mui/material"
import { IconContainer } from "@/components/IconContainer"

export default function Home() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                width: "100vw",
                overflowX: "hidden",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                    alignItems: "center",
                    justifyContent: "center",
                    maxWidth: "md",
                    width: "100%",
                    padding: {
                        xs: 2,
                        md: 0,
                    },
                    boxSizing: "border-box",
                }}
            >
                {/* Icon */}
                <IconContainer />
                {/* Main Contents */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: {
                            xs: "center",
                            md: "flex-start",
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontSize: "30pt",
                        }}
                    >
                        Hiro
                    </Typography>
                    <Typography>
                        🎂 2004/05/27
                        <br />📍 東京
                        <br />🏢{" "}
                        <Link
                            href="https://unlimit.games"
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            株式会社 FT UNLIMIT
                        </Link>
                        <br />💼 エンジニア / イベント・配信制作/技術
                        <br />🔗 <Link href="/works">実績はこちらから</Link>
                    </Typography>
                    {/* SNS Link */}
                    <Box
                        sx={{
                            display: "flex",
                            my: 1,
                        }}
                    >
                        <Tooltip title="Email">
                            <IconButton
                                href="mailto:nakajima@unlimit.games"
                                sx={{
                                    mr: 1,
                                }}
                            >
                                <EmailIcon />
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
                                <XIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="GitHub">
                            <IconButton
                                href="https://github.com/Hiro527"
                                rel="noreferrer noopener"
                                target="_blank"
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

"use client"

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material"
import dayjs from "dayjs"
import type { Content } from "@/lib/microcms"

type Props = {
    content: Content
}

export default function ContentCard({ content }: Props) {
    const contentDate = dayjs(content.date)

    return (
        <Card
            sx={{
                width: {
                    xs: '100%',
                    md: 480
                },
                ":hover": {
                    boxShadow: 5,
                },
            }}
        >
            <CardActionArea href={`/works/${content.id}`}>
                <CardMedia sx={{ height: 270 }} image={content.thumbnail.url} />
                <CardContent>
                    <Typography
                        gutterBottom
                        sx={{
                            fontSize: "12pt",
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {content.title}
                    </Typography>
                    <Typography
                        sx={{
                            color: "gray",
                            fontSize: "11pt",
                        }}
                    >
                        <CalendarMonthIcon
                            sx={{
                                verticalAlign: "-3px",
                                mr: 0.5,
                                fontSize: "14pt",
                            }}
                        />
                        {content.private
                            ? contentDate.format("YYYY/MM")
                            : contentDate.format("YYYY/MM/DD")}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

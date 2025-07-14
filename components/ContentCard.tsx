import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material"
import timezone from "dayjs/plugin/timezone"
import dayjs from "dayjs"
import type { Content } from "@/lib/microcms"

type Props = {
    content: Content
}

export default function ContentCard({ content }: Props) {
    dayjs.extend(timezone)
    dayjs.tz.setDefault("Asia/Tokyo")

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
                        {content.private
                            ? contentDate.format("YYYY/MM")
                            : contentDate.format("YYYY/MM/DD")}{' - '}
                        {
                            content.private ? '非公開' : content.client_name
                        }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

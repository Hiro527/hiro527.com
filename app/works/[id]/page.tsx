import ApartmentIcon from "@mui/icons-material/Apartment"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import InfoIcon from "@mui/icons-material/Info"
import { Box, Link, Typography } from "@mui/material"
import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { type Content, client } from "@/lib/microcms"

type Props = {
    params: Promise<{
        id: string
    }>
}

const getContent = async (id: string) => {
    try {
        const res = await client.getList({
            endpoint: "works",
            queries: {
                limit: 1,
                filters: `env[contains]${process.env.ENV}[and]id[equals]${id}`,
            },
            customRequestInit: {
                cache: "no-store",
            },
        })

        const contents = res.contents as Content[]

        return contents[0]
    } catch (error) {
        // 404エラー時はNotFoundを表示する
        if (error instanceof Error && error.message.includes("404")) {
            return null
        }
        throw error
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const content = await getContent(id)

    if (!content) {
        throw new Error("News not found")
    }

    return {
        title: `${content.title} - hiro527.com`,
        description: `${content.title}の詳細ページです`,
    }
}

export default async function Home({ params }: Props) {
    const { id } = await params
    const content = await getContent(id)

    if (!content) {
        notFound()
    }

    dayjs.extend(timezone)
    dayjs.tz.setDefault("Asia/Tokyo")

    const contentDate = dayjs(content.date)

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh",
                width: "100vw",
                overflowX: "hidden",
            }}
        >
            <Box
                sx={{
                    width: "95%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: {
                            xs: "100%",
                            md: "50%",
                        },
                    }}
                >
                    <Link href={"/works"}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                my: 1,
                            }}
                        >
                            <ArrowBackIosNewIcon
                                sx={{
                                    verticalAlign: "-5px",
                                    mr: 0.5,
                                    fontSize: "14pt",
                                }}
                            />
                            <Typography>一覧へ戻る</Typography>
                        </Box>
                    </Link>
                    <Box
                        sx={{
                            position: "relative",
                            display: "block",
                            width: "100%",
                            aspectRatio: "16 / 9",
                        }}
                    >
                        <Image src={content.thumbnail.url} alt={""} fill />
                    </Box>
                    <Typography
                        sx={{
                            fontWeight: 600,
                            fontSize: "20pt",
                            mt: 3,
                        }}
                    >
                        {content.title}
                    </Typography>
                    <Typography
                        sx={{
                            color: "gray",
                            fontSize: "14pt",
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
                            ? contentDate.tz().format("YYYY/MM")
                            : contentDate.tz().format("YYYY/MM/DD")}
                    </Typography>
                    <Typography
                        sx={{
                            color: "gray",
                            fontSize: "14pt",
                        }}
                    >
                        <ApartmentIcon
                            sx={{
                                verticalAlign: "-3px",
                                mr: 0.5,
                                fontSize: "14pt",
                            }}
                        />
                        {content.private ? "非公開案件" : content.client_name}
                    </Typography>
                    <Typography
                        sx={{
                            color: "gray",
                            fontSize: "14pt",
                        }}
                    >
                        <InfoIcon
                            sx={{
                                verticalAlign: "-3px",
                                mr: 0.5,
                                fontSize: "14pt",
                            }}
                        />
                        {content.info}
                    </Typography>
                    <div
                        // biome-ignore lint/security/noDangerouslySetInnerHtml: microCMS側でHTMLを吐き出してくれるため
                        dangerouslySetInnerHTML={{
                            __html: content.content || "",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    )
}

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import { Box, Link, Typography } from "@mui/material"
import type { Metadata } from "next"
import ContentCard from "@/components/ContentCard"
import CustomPagination from "@/components/CustomPagination"
import { type Content, client } from "@/lib/microcms"

export const metadata: Metadata = {
    title: "Works - hiro527.com",
    description: "実績の一覧です",
}

type Props = {
    searchParams: Promise<{
        page?: string
    }>
}

const getContents = async (page: number) => {
    const res = await client.getList({
        endpoint: "works",
        queries: {
            limit: 10,
            filters: `env[contains]${process.env.ENV}`,
            orders: "-date",
            offset: (page - 1) * 10,
        },
    })

    return res
}

export default async function Home({ searchParams }: Props) {
    const { page } = await searchParams

    const {
        totalCount,
        contents,
    }: {
        totalCount: number
        contents: Content[]
    } = await getContents(Number.parseInt(page || "1"))

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minHeight: "100vh",
                width: "100%",
                overflowX: "hidden",
            }}
        >
            <Box
                sx={{
                    width: {
                        xs: "95%",
                        md: "60%",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                    }}
                >
                    <Link
                        href={"/"}
                        sx={{
                            position: "absolute",
                            left: 0,
                        }}
                    >
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
                            <Typography>HOME</Typography>
                        </Box>
                    </Link>
                    <Box>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: "30pt",
                                my: 2,
                            }}
                        >
                            Works
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: {
                            xs: "nowrap",
                            md: "wrap",
                        },
                        flexDirection: {
                            xs: "column",
                            md: "row",
                        },
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        gap: 3,
                    }}
                >
                    {contents.map((content) => {
                        return (
                            <ContentCard content={content} key={content.id} />
                        )
                    })}
                </Box>
                <CustomPagination
                    page={Number.parseInt(page || "1")}
                    totalCount={totalCount}
                />
            </Box>
        </Box>
    )
}

'use client';
import { Box, Pagination } from "@mui/material"
import { redirect, useRouter } from "next/navigation"

type Props = {
    page: number,
    totalCount: number
}

export default function CustomPagination({page, totalCount}: Props) {
    const router = useRouter()
    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            my: 5,
            }}
        >
            <Pagination
                count={Math.ceil(totalCount / 10)}
                page={page}
                onChange={(_, value) => {
                    router.push(`/works?page=${value}`)
                }}
            />
        </Box>
    )
}
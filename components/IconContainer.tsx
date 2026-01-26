'use client'

import { Box, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Icon from "@/public/icon.webp"

export const IconContainer = () => {
    const boxRef = useRef<HTMLDivElement>(null)
    const [overlayOpacity, setOverlayOpacity] = useState(0)

    useEffect(() => {
        const ref = boxRef.current

        const handleMouseOver = () => {
            setOverlayOpacity(1)
        }

        const handleMouseOut = () => {
            setOverlayOpacity(0)
        }

        if (ref) {
            ref.addEventListener("mouseover", handleMouseOver)
            ref.addEventListener("mouseout", handleMouseOut)
        }

        return () => {
            if (ref) {
                ref.removeEventListener("mouseover", handleMouseOver)
                ref.removeEventListener("mouseout", handleMouseOut)
            }
        }
    }, [])

    return <Box
                sx={{
                    marginRight: {
                        xs: 0,
                        md: 5,
                    },
                    marginBottom: {
                        xs: 2,
                        md: 0,
                    },
                    position: 'relative',
                    borderRadius: '50%',
                    width: 200,
                    height: 200,
                    overflow: 'hidden',
                }}
                ref={boxRef}
            >
                <Box 
                    sx={{
                        opacity: overlayOpacity, 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.75)',
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                    }}
                    component={'a'}
                    href="https://x.com/S1M0N0M1Y4"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Typography sx={{
                        color: 'white',
                    }}>
                        Illustration by 下之宮
                    </Typography>
                </Box>
                <Image
                    src={Icon}
                    alt="Icon"
                    width={200}
                />
                </Box>
}
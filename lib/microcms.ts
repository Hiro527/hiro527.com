/** biome-ignore-all lint/style/noNonNullAssertion: To use env variables */
import { createClient } from "microcms-js-sdk";

export interface Content {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    client_name: string
    date: string
    thumbnail: {
        url: string
        height: number
        width: number
    }
    content: string
    env: [
        'dev' | 'prod'
    ]
    private: boolean
    info: string
}

export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
    apiKey: process.env.MICROCMS_API_KEY!,
})

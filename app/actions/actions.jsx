"use server"
import { cookies } from "next/headers"

async function createCookie(data, value) {
    cookies().set({
        name: data,
        value: value,
        path: "/",
        httpOnly: true
    })

}

async function deleteCookie(data) {
    cookies().delete(data)
}

export { createCookie, deleteCookie }
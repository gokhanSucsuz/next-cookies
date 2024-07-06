import { userAgent } from "next/server";

export function middleware(req) {
	const { device, os, isBot, browser, engin, cpu } = userAgent(req);
	console.log(device, os, isBot, browser, engin, cpu);
}

"use client";

import { Analytics } from "@vercel/analytics/react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { ReactNode, useEffect } from "react";

type AnalyticsProviderProps = {
	children?: ReactNode;
};

let posthogClient: any | null = null;

async function getPosthog() {
	if (typeof window === "undefined") return null;
	if (posthogClient) return posthogClient;
	const mod = await import("posthog-js");
	posthogClient = mod.default;
	return posthogClient;
}

export default function AnalyticsProvider({
	children,
}: AnalyticsProviderProps) {
	useEffect(() => {
		const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
		const host =
			process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.posthog.com";

		if (!key || typeof window === "undefined") return;

		const init = () => {
			getPosthog().then((ph) => {
				if (!ph) return;
				if (!(window as any).__POSTHOG_INIT__) {
					ph.init(key, {
						api_host: host,
						capture_pageview: true,
						capture_pageleave: true,
						persistence: "localStorage+cookie",
						autocapture: true,
					});
					(window as any).__POSTHOG_INIT__ = true;
				}
			});
		};

		if ("requestIdleCallback" in window) {
			(window as any).requestIdleCallback(init);
		} else {
			setTimeout(init, 1500);
		}
	}, []);

	return (
		<PHProvider client={posthog}>
			{children}
			<Analytics />
		</PHProvider>
	);
}

export function track(eventName: string, properties?: Record<string, unknown>) {
	if (typeof window === "undefined") return;
	getPosthog()
		.then((ph) => {
			if (!ph) return;
			try {
				ph.capture(eventName, properties);
			} catch {
				// no-op
			}
		})
		.catch(() => {
			// no-op
		});
}

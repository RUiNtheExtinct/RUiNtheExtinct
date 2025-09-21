"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { track } from "./AnalyticsProvider";

function RouteAnalyticsInner() {
	const pathname = usePathname();
	const search = useSearchParams();

	useEffect(() => {
		if (typeof window === "undefined") return;
		track("$pageview", {
			pathname,
			search: search?.toString() ?? "",
		});
	}, [pathname, search]);

	return null;
}

export default function RouteAnalytics() {
	return (
		<Suspense fallback={null}>
			<RouteAnalyticsInner />
		</Suspense>
	);
}

import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function GET() {
	const projectId = uuidv4(); // Generate a new UUID for your project

	return NextResponse.json({
		projectId: projectId,
		// Other DevTools-specific configurations can be added here if needed
	}, {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type, Authorization',
		},
	});
}

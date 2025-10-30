import { NextRequest, NextResponse } from 'next/server';

/**
 * CORS Configuration
 * Define allowed origins, methods, and headers
 */
export const CORS_CONFIG = {
  // Allowed origins - add your production domain here
  allowedOrigins: [
    'http://localhost:3000',
    'http://localhost:3001',
    'https://dmd-ascenseur.fr',
    'https://www.dmd-ascenseur.fr',
    process.env.NEXT_PUBLIC_SITE_URL || '',
  ].filter(Boolean),

  // Allowed HTTP methods
  allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],

  // Allowed headers
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept',
    'Origin',
  ],

  // Exposed headers
  exposedHeaders: ['Content-Length', 'X-JSON-Response-Size'],

  // Credentials
  credentials: true,

  // Max age for preflight cache (1 hour)
  maxAge: 3600,
};

/**
 * Handle CORS preflight requests
 */
export function handleCORS(request: NextRequest, origin?: string) {
  const requestOrigin = origin || request.headers.get('origin') || '';
  const isAllowed = CORS_CONFIG.allowedOrigins.includes(requestOrigin);

  if (!isAllowed && process.env.NODE_ENV === 'production') {
    return new NextResponse(null, { status: 403 });
  }

  const response = new NextResponse(null, { status: 200 });

  // Set CORS headers
  response.headers.set('Access-Control-Allow-Origin', requestOrigin || '*');
  response.headers.set(
    'Access-Control-Allow-Methods',
    CORS_CONFIG.allowedMethods.join(', ')
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    CORS_CONFIG.allowedHeaders.join(', ')
  );
  response.headers.set(
    'Access-Control-Expose-Headers',
    CORS_CONFIG.exposedHeaders.join(', ')
  );
  response.headers.set(
    'Access-Control-Max-Age',
    CORS_CONFIG.maxAge.toString()
  );

  if (CORS_CONFIG.credentials) {
    response.headers.set('Access-Control-Allow-Credentials', 'true');
  }

  return response;
}

/**
 * Add CORS headers to response
 */
export function addCORSHeaders(response: NextResponse, origin?: string) {
  const requestOrigin = origin || '';
  const isAllowed = CORS_CONFIG.allowedOrigins.includes(requestOrigin);

  if (isAllowed || process.env.NODE_ENV === 'development') {
    response.headers.set('Access-Control-Allow-Origin', requestOrigin || '*');
    response.headers.set(
      'Access-Control-Allow-Methods',
      CORS_CONFIG.allowedMethods.join(', ')
    );
    response.headers.set(
      'Access-Control-Allow-Headers',
      CORS_CONFIG.allowedHeaders.join(', ')
    );

    if (CORS_CONFIG.credentials) {
      response.headers.set('Access-Control-Allow-Credentials', 'true');
    }
  }

  return response;
}

import { NextRequest, NextResponse } from 'next/server';
import { ZodSchema } from 'zod';

/**
 * Validate API request with Zod schema
 */
export async function validateRequest<T>(
  request: NextRequest,
  schema: ZodSchema
): Promise<{ valid: true; data: T } | { valid: false; error: string }> {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      const errors = result.error.errors
        .map(err => `${err.path.join('.')}: ${err.message}`)
        .join('; ');
      return { valid: false, error: errors };
    }

    return { valid: true, data: result.data as T };
  } catch {
    return { valid: false, error: 'Invalid JSON in request body' };
  }
}

/**
 * Check if request method is allowed
 */
export function checkMethod(
  request: NextRequest,
  allowedMethods: string[]
): boolean {
  return allowedMethods.includes(request.method);
}

/**
 * Sanitize string input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim();
}

/**
 * Sanitize object recursively
 */
export function sanitizeObject(obj: Record<string, unknown>): Record<string, unknown> {
  const sanitized = { ...obj };
  
  for (const key in sanitized) {
    if (typeof sanitized[key] === 'string') {
      sanitized[key] = sanitizeInput(sanitized[key] as string);
    } else if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
      sanitized[key] = sanitizeObject(sanitized[key] as Record<string, unknown>);
    }
  }
  
  return sanitized;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

/**
 * Validate postal code (France)
 */
export function isValidPostalCode(postalCode: string): boolean {
  const postalCodeRegex = /^[0-9]{5}$/;
  return postalCodeRegex.test(postalCode);
}

/**
 * Create error response
 */
export function errorResponse(message: string, status: number = 400) {
  return NextResponse.json(
    { success: false, message },
    { status }
  );
}

/**
 * Create success response
 */
export function successResponse(data: unknown, status: number = 200) {
  return NextResponse.json(
    { success: true, data },
    { status }
  );
}

/**
 * Log security event
 */
export function logSecurityEvent(
  eventType: string,
  details: Record<string, unknown>,
  severity: 'low' | 'medium' | 'high' = 'low'
) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    eventType,
    severity,
    details,
  };

  // In production, send to logging service (e.g., Sentry, DataDog)
  if (severity === 'high') {
    console.error('[SECURITY]', logEntry);
  } else {
    console.warn('[SECURITY]', logEntry);
  }
}

/**
 * Verify environment variables are set
 */
export function verifyEnvironmentVariables(required: string[]): boolean {
  const missing = required.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    return false;
  }
  
  return true;
}

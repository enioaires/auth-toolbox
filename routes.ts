/**
 * Array of public routes
 * These routes are accessible to everyone
 * @type {string[]}
 */
export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * Array of auth routes
 * These routes are for authentication only
 * These router will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for the API authentication routes
 * Routes that start with this prefix are for authentication only
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect for the logged user
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";

// Vercel Edge Middleware — real password protection for the whole deployment.
// This runs on Vercel's servers BEFORE any file is sent, so the content cannot
// be reached (or read via "view source") without the password. Password: king
//
// Placement: put this file at the ROOT of the folder Vercel deploys
// (the same level that contains app-prototype/, brand-guide/, landing-page/).
// No build step or dependencies required.

export const config = {
  // Protect everything except Vercel internals.
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};

export default function middleware(request) {
  const auth = request.headers.get('authorization');

  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic' && encoded) {
      const decoded = atob(encoded);           // "username:password"
      const password = decoded.slice(decoded.indexOf(':') + 1);
      if (password === 'king') {
        return; // authorized — continue to the requested file
      }
    }
  }

  // Not authorized: browser shows a login box. Any username, password = king.
  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Forever Here — Private", charset="UTF-8"',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}

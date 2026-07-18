/** Next.js static export config */
const nextConfig = {
  // Ensure Next produces a static export (app/pages must be exportable)
  output: 'export',
  // Disable Next.js image optimization so the exported site can serve images as plain files
  images: {
    unoptimized: true,
  },
  // Put trailing slash on routes so next export creates index.html for subpaths
  trailingSlash: true,
};

module.exports = nextConfig;

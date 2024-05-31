/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://codeco.tech",
  generateRobotsTxt: true, // optional
  exclude: ["/login"],
};

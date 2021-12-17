module.exports = {
  images: {
    domains: [
      "romex.s3.ap-south-1.amazonaws.com",
      "cosmetica.com.bd",
      "cosmetica-eccom.s3.ap-south-1.amazonaws.com",
      "image.shutterstock.com",
      "wpthemesgrid.com",
      "images.unsplash.com",
      "proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com",
      "proman-prod.eba-faitp54h.ap-south-1.elasticbeanstalk.com",
      "proman-static.s3.ap-south-1.amazonaws.com",
      "via.placeholder.com",
      "proman-media.s3.amazonaws.com",
    ],
  },
  future: { webpack5: true },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = {
  images: {
    domains: [
      "romex.s3.ap-south-1.amazonaws.com",
      "cosmetica.com.bd",
      "cosmetica-eccom.s3.ap-south-1.amazonaws.com",
      "image.shutterstock.com",
      "wpthemesgrid.com",
      "images.unsplash.com",
      "promantest-env.eba-u7qpm2r2.ap-south-1.elasticbeanstalk.com",
      "promantest-env.eba-u7qpm2r2.ap-south-1.elasticbeanstalk.com",
      "proman-static.s3.ap-south-1.amazonaws.com",
      "via.placeholder.com",
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
};

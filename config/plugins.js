// cloudinary config
module.exports = ({ env }) => ({
  // ...
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_fr9OHMrpOViNcpco9EqK4UcTVp43/3d5rRnynCO",
      apiToken: "6QqqOX8QouwfkA8H4TULt9x5",
      appFilter: "strapi-api",
      teamFilter: "",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {
          folder: env("CLOUDINARY_FOLDER", ""),
        },
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});

import { MetadataRoute } from "next";
import { socket } from "@/common/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/reg-promo",
      disallow: "/",
    },
    sitemap: `${socket}/sitemap.xml`,
  };
}

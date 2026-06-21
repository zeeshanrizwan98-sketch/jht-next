import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/eco4grant",
        destination: "/eligibility",
        permanent: true,
      },
      {
        source: "/contact-jht-engergy",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/boiler-installation",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/under-floor-insulation",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/internal-wall-insulation",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/internal-wall-insulation-a-smart-energy-solution-by-jht-energy-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/external-wall-insulation",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/heat-pump-installation",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/heat-pump-installation-efficient-heating-and-cooling-with-jht-energy-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/loft-insulation-a-step-by-step-guide-by-jht-energy-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/energy-assessments",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/Solar-installation",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

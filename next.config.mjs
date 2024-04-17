/** @type {import('next').NextConfig} */
const nextConfig = {
  proxy: {
    "/gwapi": {
      target: "https://owstest.deppon.com/gwapi",
    },
  },
};

export default nextConfig;

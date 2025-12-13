export const configs = {
  API_BASE: process.env.NEXT_PUBLIC_API_BASE as string,
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN as string,
  AUTH_SECRET: process.env.NEXTAUTH_SECRET as string,
  AUTH_URL: process.env.NEXTAUTH_URL as string,
};

export const OV = {
  CONFIRMATION: "CONFIRMATION",
};

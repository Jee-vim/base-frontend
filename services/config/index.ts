export const configs = {
  API_BASE: process.env.NEXT_PUBLIC_API_BASE as string,
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN as string,
};

// NOTE router or routing
// defined like this
export const RTR = {
  project: () => `/project`,
  projectID: (id: string) => `/project/${id}`,

  blog: () => `/blog`,
  blogID: (id: string) => `/blog/${id}`,
};

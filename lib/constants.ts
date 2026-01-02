export const configs = {
  API_BASE: process.env.NEXT_PUBLIC_API_BASE as string,
  API_KEY: process.env.NEXT_PUBLIC_API_KEY as string,
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN as string,
  AUTH_SECRET: process.env.NEXTAUTH_SECRET as string,
  AUTH_URL: process.env.NEXTAUTH_URL as string,
};

export const K = {
  BANNER: "BANNER",
  USER: "USER",
};

export const OV = {
  CONFIRMATION: "CONFIRMATION",
  FORM: "FORM",
};

export const DUMMY_GROUP = [
  {
    label: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ],
  },
  {
    label: "Vegetables",
    items: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
      { value: "spinach", label: "Spinach" },
    ],
  },
];

// defined route like this
export const RTR = {
  project: () => `/project`,
  projectID: (id: string) => `/project/${id}`,

  blog: () => `/blog`,
  blogID: (id: string) => `/blog/${id}`,
};

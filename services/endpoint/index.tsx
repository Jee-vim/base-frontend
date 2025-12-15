import { Http } from "../config/method";

export const ENDP = {
  auth: {
    sign_up: (b: IBSignUp) => Http.post("/auth/sign-up/user", b),
    send_otp: (b: IBSendOTP) => Http.post("/auth/send-otp", b),
    verify_otp: (b: IBVerifyOTP) => Http.post("/auth/check-otp", b),
  },
  global: {
    banner: () => Http.get("/banner"),
    banner_get: (id: string) => Http.get(`/banner/${id}`),
    review_post: (id: string) => Http.post(`/review`, { id }),
  },
};

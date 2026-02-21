import * as Yup from "yup"

export const SignUpSchema=Yup.object({
    FullName:Yup.string().min(2).max(25).required("Full Name Required"),
    email: Yup.string().email().required("Email Required"),
    password : Yup.string().min(8).required("Password Required"),
    organization: Yup.string().required("Organization Name required")

})

export const Otp=Yup.object({
    otp:Yup.number().max(6).required("OTP required")
})
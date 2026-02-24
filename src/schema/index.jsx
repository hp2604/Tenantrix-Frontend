import * as Yup from "yup"

export const SignUpSchema=Yup.object({
    name:Yup.string().min(2).max(25).required("Full Name Required"),
    email: Yup.string().email().required("Email Required"),
    password : Yup.string().min(8).max(15).required("Password Required"),
    organizationName: Yup.string().required("Organization Name required")

})

export const Otp=Yup.object({
    otp:Yup.string().max(6).required("OTP required")
})
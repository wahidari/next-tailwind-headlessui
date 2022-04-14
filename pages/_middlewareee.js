import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server"

export default async function middleware(req) {
  // const token = await getToken({ req, secret: process.env.JWT_SECRET })
  // // console.log(req.page.name)
  // const url = req.nextUrl.clone()
  // url.pathname = '/signin'
  // if (!token && req.page.name == "/protected") {
  //   return NextResponse.redirect(url)
  //   // return NextResponse.rewrite(url)
  // }
}
import sendgrid from "@sendgrid/mail"
import { NextApiRequest, NextApiResponse } from "next"

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '')

type Data = {
  error: string
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse<Data>) {
  try{
    console.log("REQ.BODY", req.body)
    const response = await sendgrid.send({
      to: "lamparolho@gmail.com",
      from: "lamparolho@gmail.com",
      subject: "mail from portfolio page",
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
      <p>Fullname: ${req.body.fullname}</p>
      <p>Mail: ${req.body.email}</p>
      <p>Message: ${req.body.msg}</p>
      `,
    })
    console.log(response)
  } catch (err: any) {
    console.log(err)
    return res.status(err.statusCode || 500).json({error: err.message})
  }
  return res.status(200).json({error: ""})
}

export default sendEmail
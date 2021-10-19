import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

interface MailProps {
  type: string;
  name: string;
  email: string;
}

let host: string = process.env.SMTP_HOST as string;
let port: number = Number(process.env.SMTP_PORT);
let user: string = process.env.SMTP_USER as string;
let pass: string = process.env.SMTP_PASS as string;

export const transporter = nodemailer.createTransport({
  host,
  port,
  auth: {
    user,
    pass,
  },
});

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email, type } = req.body as MailProps;

    const subject = "PORTAL ALPAR PRIVACIDADE";
    const html = `
    <p>Finalidade do contato : ${name}</p>
    <p>Nome completo : ${email}</p>
    <p>Email cadastrado na Alpar: ${type}</p>
    `;

    const response = await transporter.sendMail({
      from: `${process.env.SMTP_TO_NAME} < ${process.env.SMTP_TO_MAIL}>`,
      to: `${process.env.SMTP_FROM_NAME} < ${process.env.SMTP_FROM_MAIL}>`,
      bcc: "Portal Alpar <portal@alpardobrasil.com.br>",

      subject: subject,
      html: html,
    });

    console.log(response);

    return res.status(200).json({});
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
}

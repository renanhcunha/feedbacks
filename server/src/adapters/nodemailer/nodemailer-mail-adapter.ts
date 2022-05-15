import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from '../mail-adapater';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e8d0b721254583",
    pass: "0c70b1266e2df9"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Renan Homem Cunha <renan2610@gmail.com>',
      subject,
      html: body
    })
  }
}
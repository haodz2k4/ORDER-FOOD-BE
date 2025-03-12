import nodemailer from "nodemailer"
import config from "../config/config";
import path from "path";
import { readFileSync } from "fs";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.MAILER.SMTP_USERNAME,
        pass: config.MAILER.SMTP_PASS
    }
});

export class MailService {


    static async sendVerifyEmail(to: string, token: string) {
        
        const url = `${config.APP_URL}/auth/verify-email?token=${token}`;

        const filePath = path.join(__dirname,'../templates/verify-email.txt'); 
        const html = readFileSync(filePath, {encoding: 'utf-8'})
            .replace('{{url}}',url);
        await transporter.sendMail({
            from: config.MAILER.SMTP_FROM,
            to,
            text: 'Xác thực Email của bạn',
            html
        })
    }
}
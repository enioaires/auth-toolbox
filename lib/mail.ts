import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "mail@maria-bonita.site",
    to: email,
    subject: "2FA Codigo de Verificacao",
    html: `<p>Seu codigo de segurança: ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.BASE_URL}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "mail@maria-bonita.site",
    to: email,
    subject: "Redefina sua senha",
    html: `<p>Clique <a href="${resetLink}">AQUI</a> para alterar sua senha</p>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.BASE_URL}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "mail@maria-bonita.site",
    to: email,
    subject: "Confirme seu e-mail",
    html: `<p>Clique <a href="${confirmLink}">AQUI</a> para confirmar seu e-mail</p>`,
  });
};

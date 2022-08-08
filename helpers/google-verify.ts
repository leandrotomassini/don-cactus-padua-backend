import { GOOGLE_CLIENT_ID } from "../global/enviroment";

const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_SECRET_ID);

export async function googleVerify(token: any) {

  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: GOOGLE_CLIENT_ID,
  });
  const { email, name, picture } = ticket.getPayload();

  const usuarioGoogle = {
    email,
    name,
    picture
  };


  return usuarioGoogle;
}
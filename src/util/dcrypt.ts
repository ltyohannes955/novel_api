import * as bcrypt from 'bcrypt';

export function encodePass(password: string) {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, SALT);
}

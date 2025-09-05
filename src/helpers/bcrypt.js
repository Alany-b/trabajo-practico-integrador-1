import bcrypt from 'bcrypt';

export const hashPassword = async (plain) => {
  const saltRounds = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, saltRounds);
};

// Verificar contraseña
export const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

import bcrypt from "bcryptjs";

export async function hashPassword(password : string) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export async function comparePassword(password : string, hashedPassword : string) {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
}
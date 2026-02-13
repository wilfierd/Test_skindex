export class JwtConstants {
    static get secret(): string {
        return process.env.JWT_SECRET || 'secretKey';
    }
}

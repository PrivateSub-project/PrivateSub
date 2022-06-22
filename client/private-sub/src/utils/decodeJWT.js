import jwt_decode from 'jwt-decode';
export default function JWTDecode(token) {
    return jwt_decode(token);
}

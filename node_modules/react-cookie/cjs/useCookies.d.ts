import { Cookie, CookieSetOptions } from 'universal-cookie';
export default function useCookies<T extends string, U = {
    [K in T]?: any;
}>(dependencies?: T[]): [U, (name: T, value: Cookie, options?: CookieSetOptions) => void, (name: T, options?: CookieSetOptions) => void];

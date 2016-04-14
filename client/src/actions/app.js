export const APP_SET_USUARIO = 'APP_SET_USUARIO';

export function setUsuario(usuario) {
    return {
        type: APP_SET_USUARIO,
        usuario
    }
}

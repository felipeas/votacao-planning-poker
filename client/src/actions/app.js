export const APP_SET_USUARIO_LOGADO = 'APP_SET_USUARIO_LOGADO';

export function setUsuarioLogado(usuario) {
  return {
    type: APP_SET_USUARIO_LOGADO,
    usuario
  }
}

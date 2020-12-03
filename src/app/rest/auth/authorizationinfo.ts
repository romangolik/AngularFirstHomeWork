export class AuthorizationInfo {
  token: string;

  constructor(authorizationInfo: AuthorizationInfo) {
    this.token = authorizationInfo ? authorizationInfo.token : null;
  }
}

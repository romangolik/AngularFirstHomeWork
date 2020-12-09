export class UserInfo {
  mail: string;
  password: string;

  constructor(userInfo: UserInfo) {
    this.mail = userInfo ? userInfo.mail : null;
    this.password = userInfo ? userInfo.password : null;
  }
}

export interface ICredentials {
  id: number;
  token: string;
  email: string;
  expiration: string;
  roleId: number | null;
}

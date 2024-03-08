export interface Account {
  accountAlias: string,
  accountNumber: number,
  balance: number
}


export interface AccountResponse {
  data: {
    acounts: Account[]
  }
}


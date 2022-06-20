export interface ITransaction {
    id: string;
    walletId: string;
    type: string;
    amount: number;
    description: string;
    walletName: string
}
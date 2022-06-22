export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            login: undefined;
            signup: undefined;
            dashboard: undefined;
            transaction_details: {
                id: string | number | undefined
            };
            main: undefined,
            edit_profile: {
                id: string
            },
            edit_transaction: {
                id: string
            },
            show_wallet: {
                id: string | number;
                name: string;
            }
        }
    }
}
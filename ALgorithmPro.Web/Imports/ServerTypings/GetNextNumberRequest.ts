namespace ALgorithmPro {
    export interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
        StoreID?: string;
        TR_TY?: number;
    }
}

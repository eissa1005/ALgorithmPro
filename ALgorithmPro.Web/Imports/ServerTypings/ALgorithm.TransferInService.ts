namespace ALgorithmPro.ALgorithm {
    export namespace TransferInService {
        export const baseUrl = 'ALgorithm/TransferIn';

        export declare function Create(request: Serenity.SaveRequest<TransferInRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<TransferInRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransferInRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransferInRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ALgorithm/TransferIn/Create",
            Update = "ALgorithm/TransferIn/Update",
            Delete = "ALgorithm/TransferIn/Delete",
            GetNextNumber = "ALgorithm/TransferIn/GetNextNumber",
            Retrieve = "ALgorithm/TransferIn/Retrieve",
            List = "ALgorithm/TransferIn/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'GetNextNumber', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TransferInService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

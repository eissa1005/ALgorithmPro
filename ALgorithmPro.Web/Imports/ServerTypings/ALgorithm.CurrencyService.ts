namespace ALgorithmPro.ALgorithm {
    export namespace CurrencyService {
        export const baseUrl = 'ALgorithm/Currency';

        export declare function Create(request: Serenity.SaveRequest<CurrencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<CurrencyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CurrencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CurrencyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "ALgorithm/Currency/Create",
            Update = "ALgorithm/Currency/Update",
            Delete = "ALgorithm/Currency/Delete",
            GetNextNumber = "ALgorithm/Currency/GetNextNumber",
            Retrieve = "ALgorithm/Currency/Retrieve",
            List = "ALgorithm/Currency/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'GetNextNumber', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>CurrencyService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

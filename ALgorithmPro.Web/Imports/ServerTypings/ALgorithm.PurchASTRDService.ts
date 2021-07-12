namespace ALgorithmPro.ALgorithm {
    export namespace PurchASTRDService {
        export const baseUrl = 'ALgorithm/PurchASTRD';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PurchASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PurchASTRDRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetItemBAL(request: GetItemBALRequest, onSuccess?: (response: GetItemBALResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "ALgorithm/PurchASTRD/Retrieve",
            List = "ALgorithm/PurchASTRD/List",
            GetItemBAL = "ALgorithm/PurchASTRD/GetItemBAL"
        }

        [
            'Retrieve', 
            'List', 
            'GetItemBAL'
        ].forEach(x => {
            (<any>PurchASTRDService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

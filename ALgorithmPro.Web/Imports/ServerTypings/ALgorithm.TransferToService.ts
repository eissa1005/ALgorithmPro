namespace ALgorithmPro.ALgorithm {
    export namespace TransferToService {
        export const baseUrl = 'ALgorithm/TransferTo';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TransferToRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TransferToRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "ALgorithm/TransferTo/Retrieve",
            List = "ALgorithm/TransferTo/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>TransferToService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

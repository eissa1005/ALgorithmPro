namespace ALgorithmPro.ALgorithm {
    export namespace AdjustDetailEndpointService {
        export const baseUrl = 'ALgorithm/AdjustDetail';

        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AdjustDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AdjustDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Retrieve = "ALgorithm/AdjustDetail/Retrieve",
            List = "ALgorithm/AdjustDetail/List"
        }

        [
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AdjustDetailEndpointService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

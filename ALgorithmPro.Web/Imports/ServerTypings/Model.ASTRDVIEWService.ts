namespace ALgorithmPro.Model {
    export namespace ASTRDVIEWService {
        export const baseUrl = 'Model/ASTRDVIEW';

        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ASTRDVIEWRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            List = "Model/ASTRDVIEW/List"
        }

        [
            'List'
        ].forEach(x => {
            (<any>ASTRDVIEWService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

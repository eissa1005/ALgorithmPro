namespace ALgorithmPro.Model {
    export interface ASCURRATRow {
        CurrencyID1?: string;
        CurrencyID2?: string;
        CUR_RAT?: number;
        ICUR_RAT?: number;
    }

    export namespace ASCURRATRow {
        export const idProperty = 'CurrencyID1';
        export const nameProperty = 'CurrencyID1';
        export const localTextPrefix = 'ALgorithm.ASCURRAT';
        export const lookupKey = 'ALgorithm:ASCURRAT';

        export function getLookup(): Q.Lookup<ASCURRATRow> {
            return Q.getLookup<ASCURRATRow>('ALgorithm:ASCURRAT');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CurrencyID1 = "CurrencyID1",
            CurrencyID2 = "CurrencyID2",
            CUR_RAT = "CUR_RAT",
            ICUR_RAT = "ICUR_RAT"
        }
    }
}

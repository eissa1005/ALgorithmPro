namespace AS {
    export function text(key: string, fallback: string): string {
        var result = Q.text(key);

        if (result == key) return fallback;
        else return result;
    }

    export function isCosmicThemeApplied(): boolean {
        return document.body.className.indexOf('cosmic') >= 0;
    }

    export function getSelectedLanguage(): string {
        var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
        return lang;
    }

    export function isBanglaMode(): boolean {
        var lang = document.getElementsByTagName('html')[0].getAttribute('lang');
        if (lang) return lang.toLowerCase().indexOf('bn') >= 0;
        return false;
    }

    export function formatDecimal(value) {
        let title = Serenity.NumberFormatter.format(value, '#,##0.00');
        return title;
    }

    export function formatInt(value) {
        let title = Serenity.NumberFormatter.format(value, '#,##0');
        return title;
    }

    // Check numeric or not then return value, if NAN then return zero(0)
    export function ToNumber(value): number {
        return isNaN(value) ? 0 : Number(value);
    }

    export function ToFixed(value, fractionDigits = 2): string {
        return ToNumber(value).toFixed(fractionDigits);
    }

    export function ToBool(value) {
        switch (value) {
            case '1':
                return true;
                break;
            case '0':
                return false;
                break;
            case 'true':
                return true;
                break;
            case 'false':
                return false;
                break;

            default:
                return false;
                break;
        }
    }

    export function IsNull(value, defaultvalue: number = 0) {
        if (Q.isEmptyOrNull(value)) return defaultvalue;
        else
            return value;
    }
    export function Trim(value: string): string {
        if (value == null || value.length === 0) return '';
        //return value.replace(new RegExp('^\\s+|\\s+$', 'g'), '');
        if (!String.prototype.trim) {
            (function () {
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function () {
                    return value.replace(rtrim, '');
                };
            })();
        }
    }
    export function IsNullValue(value): boolean {
        // 👈 null and undefined check
        return value == undefined || Q.isEmptyOrNull(value) || AS.Trim(value) == "" || AS.Trim(value) == "''" || 
            AS.Trim(value) == "0." || AS.Trim(value) == "0.00%" ;
    }
    export function IsNullObject(value): boolean {
        //value 👈 null and undefined check
        return value == null || Object.keys(value).length === 0 && value.constructor === Object  || value.length == 0;
    }

    //colorDepth should be within '0123456789ABCDEF'
    export function getRandomColor(hexLetters) {
        var letters = hexLetters// '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            var letterIndex = Math.floor((Math.random()) * letters.length);
            if (letterIndex > 15) letterIndex = 15;
            if (letterIndex < 0) letterIndex = 0;
            color += letters[letterIndex];
        }
        return color;
    }

    export function deepClone<T>(target: T): T {
        if (target === null) {
            return target;
        }
        if (target instanceof Date) {
            return new Date(target.getTime()) as any;
        }
        if (target instanceof Array) {
            const cp = [] as any[];
            (target as any[]).forEach((v) => { cp.push(v); });
            return cp.map((n: any) => deepClone<any>(n)) as any;
        }
        if (typeof target === 'object' && target !== {}) {
            const cp = { ...(target as { [key: string]: any }) } as { [key: string]: any };
            Object.keys(cp).forEach(k => {
                cp[k] = deepClone<any>(cp[k]);
            });
            return cp as T;
        }
        return target;
    };


}


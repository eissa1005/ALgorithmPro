namespace AS {
    export function Sum(xs: any[], key) {
        if (!xs) return null;

        let initObj = {};
        initObj[key] = 0;

        let sumObj = xs.reduce(function (rv, x) {
            (rv[key] += x[key] || 0);
            return rv;
        }, initObj)

        return sumObj[key];
         
    }
    export function ContainKey(xs: any[], key) {
        if (key == null || key == 'undefined') return false;
        if (xs.length == 1) {
            if (xs[0] == key)
                return true;
        }
        else if (xs.length > 1) {
            for (var i = 0; i < xs.length; i++) {
                if (xs[i] == key)
                    return true;
            }
        }
        return false;
    }
    export function GroupBy(xs: any[], key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }

    export function SortBy<T>(xs: T[], key) {
        return xs.sort((a, b) => {
            if (a[key] < b[key]) {
                return -1;
            }
            if (a[key] > b[key]) {
                return 1;
            }

            return 0;
        });
    }

    export function SortByDesc<T>(xs: T[], key) {
        return xs.sort((a, b) => {
            if (a[key] > b[key]) {
                return -1;
            }
            if (a[key] < b[key]) {
                return 1;
            }

            return 0;
        });
    }
   
}

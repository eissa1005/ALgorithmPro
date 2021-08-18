
namespace BS {

    var array = Array<object>();
    //GetCurrencyRAT
    export function GetCurrencyRAT(OldValue, NewValue) {
        let RATE = 1;
        if (!AS.IsNullValue(OldValue) && !AS.IsNullValue(NewValue)) {

            var Currency = Q.tryFirst(ALgorithmPro.Model.ASCURRATRow.getLookup().items,
                x => x.CurrencyID1 == OldValue && x.CurrencyID2 == NewValue);
            RATE = Currency.CUR_RAT;

        } else {

            if (!AS.IsNullValue(NewValue)) {
                let CurrencyID = NewValue;
                var CurrencyRAT = Q.tryFirst(ALgorithmPro.ALgorithm.CurrencyRow.getLookup().items,
                    x => x.CurrencyID == CurrencyID);
                RATE = CurrencyRAT.CUR_RAT;
            } else RATE = 1;
        }
        return RATE;
    }

    // GetItemBAL
    export function GetItemBAL(StoreID, ItemCD): number {
        let ItemBAL = 0;
        if (!AS.IsNullValue(StoreID) && !AS.IsNullValue(ItemCD)) {

            var ItemLoc = Q.tryFirst(ALgorithmPro.ALgorithm.ItemsLocRow.getLookup()
                .items, x => x.StoreID == StoreID && x.Item_CD == ItemCD);

            return ItemBAL = AS.IsNull(ItemLoc.BAL);
        }
    }
    // UpdateGrid
    export function UpdateGrid(grid: Slick.Grid, index, row: any) {

        if (AS.IsNullObject(row)) return;
        var price = row.Price;
        var QTY = AS.IsNull(row.QTY);
        var value = QTY * price;
        var DISC1 = AS.IsNull(row.DISC1);
        var DISC2 = AS.IsNull(row.DISC2);
        var DISC3 = AS.IsNull(row.DISC3);
        var SumDisc = DISC1 + DISC2 + DISC3;
        var TAX1 = AS.IsNull(row.TAX1);
        var TAX2 = AS.IsNull(row.TAX2);
        var TAX3 = AS.IsNull(row.TAX3);
        var SumTAX = TAX1 + TAX2 + TAX3;
        row.Price = price;
        row.QTY = QTY;
        row.Value = value;
        row.DISC1 = DISC1;
        row.DISC2 = DISC2;
        row.DISC3 = DISC3;
        row.NetBeforeTAX = value - SumDisc;
        row.NetAfterTAX = value + SumTAX;
        row.NET = value + SumTAX - SumDisc;
        row.ItemBal = BS.GetItemBAL(row.StoreID, row.Item_CD);
        grid.updateRow(index, row);
        grid.render();
    }

    //PackageChange
    export function PackageChange(grid: Slick.Grid, Field, index, items: any) {

        if (AS.IsNullObject(items)) return;
        var FLD = ALgorithmPro.ASTRDVIEWRow;
        var item = items;

        if (Field == FLD.Fields.PKID) {

            var PKID = Q.toId(item.PKID);

            if (array.length == 0)
                array.push(PKID);

            else if (array.length > 0) {
                if (!AS.ContainKey(array, PKID)) {
                    array.push(PKID);
                }
            }
            if (array.length == 1) {
                var QTY = Q.toId(item.QTY);
                var Price = Q.toId(item.Price);
                var newPrice: number;
                var PK = Q.tryFirst(ALgorithmPro.ALgorithm.PackageRow.getLookup().items, x => x.PKID == PKID).PKCNT;
                item.PK = PK;
                if (Price != null && PK != null) {
                    newPrice = PK * Q.parseDecimal(Price)
                    item.Price = newPrice;
                    item.PKPRC = newPrice / PK;
                }
                item.Value = newPrice * Q.parseDecimal(QTY);
                grid.updateRow(index, item);
                grid.render();
            }
            else if (array.length > 1) {
                var PKIDS = item.PKID;
                var PK = Q.tryFirst(ALgorithmPro.ALgorithm.PackageRow.getLookup().items, x => x.PKID == PKIDS).PKCNT;
                var FACT = Q.tryFirst(ALgorithmPro.ALgorithm.PackageRow.getLookup().items, x => x.PKID == PKIDS).FACT;
                item.PK = PK;
                var QTY = Q.toId(item.QTY);
                var Price = Q.toId(item.Price);
                var newPrice: number;
                if (Price != null && FACT != null) {
                    newPrice = FACT * Q.parseDecimal(Price)
                    newPrice = Q.round(newPrice, 0);
                    item.Price = newPrice;
                    item.PKPRC = newPrice / PK;
                }

                item.Value = newPrice * Q.parseDecimal(QTY);
                grid.updateRow(index, item);
                grid.render();
            }
        }
    }

    // Delete Row And Update Data
    export function  ResetRowNumber(grd: Slick.Grid) {
        var items = grd.getData();
        if (items != null) {
            for (let i = 0; i < items.length; i++) {
                (items[i] as any).RowNum = i + 1;
                grd.updateRow(i, items);
                grd.updateRowCount();
                grd.render();
            }
        }
    }

    export function IsExistItem(grd: Slick.Grid, row) {
        let IsExist = false;
        let CNT = 0;
        let data = grd.getData();
        for (let item of data) {
            if (item && item.Item_CD == row.Item_CD ) {
                CNT++;
            }
        }
        if (CNT > 0)
            IsExist = true;

        return IsExist;
    }

    export function GetPrefixId(formkey) {

        if (AS.IsNullValue(formkey)) return "";
        var word: string;
        var value: string;
        var frm = Q.getForm(formkey);
        var query = $(frm[0].name);
        var element = query["prevObject"][0];
        var items = element["all"];
        var item = items["StoreID"];
        var ID: string = item["id"];
        var array = ID.split("_");
        if (array.length > 0) {
            word = array[0];
            word += "_" + array[1];
            word += "_" + array[2];
            value = word + "_";
        }

        return value;
    }

     // Update Rows OF Grid 👈
    export function UpdateGRD(grid: Slick.Grid, rate: number) {
        var rows = grid.getData();
        var index = 0;
        rows.forEach(s => {
            var ID = index;
            var price = s.Price * rate;
            var QTY = s.QTY;
            var Total = price * QTY;
            var DISC1 = s.DISC1;
            var DISC2 = s.DISC2;
            var DISC3 = s.DISC3;
            var TAX1 = s.TAX1;
            var TAX2 = s.TAX2;
            var TAX3 = s.TAX3;
            var NET = s.NET * rate;
            var NetBeforeTAX = s.NetBeforeTAX * rate;
            var NetAfterTAX = s.NetAfterTAX * rate;
            s.Price = price;
            s.Value = Q.round(Total, 0);
            s.DISC1 = DISC1;
            s.DISC2 = DISC2;
            s.DISC3 = DISC3;
            s.TAX1 = TAX1;
            s.TAX2 = TAX2;
            s.TAX3 = TAX3;
            s.NetBeforeTAX = Q.round(NetBeforeTAX, 0);
            s.NET = Q.round(NET, 0);
            s.NetAfterTAX = Q.round(NetAfterTAX, 0);
            s.RATE = rate;
            grid.updateRow(ID, s);
            index++;
        });
    }

}


namespace AS {

    @Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter])
    export class MonthYearFormatter implements Slick.Formatter {
        static format(val: string) {
            if (val) {
                if (val.length == 7) val += '-01';
                let valDate = Q.parseISODateTime(val);

                return AS.getEnumText('Months', valDate.getMonth()) + '-' + valDate.getFullYear();
            } else return '';
        }

        format(ctx: Slick.FormatterContext) {
            return MonthYearFormatter.format(ctx.value);
        }
    }

}
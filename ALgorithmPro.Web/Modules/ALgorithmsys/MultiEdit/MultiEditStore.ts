﻿namespace AS {

    @Serenity.Decorators.registerClass('MultiEditStore')
    export class MultiEditStore {

        constructor(fields: Serenity.PropertyItem[]) {

            this.items = [];

            if (fields == null) {
                throw new Q.ArgumentNullException('source');
            }

            this.fields = fields.slice();

            this.get_fields().sort(function (x, y) {
                var titleX = Q.tryGetText(x.title);
                if (titleX == null) {
                    titleX = x.title;
                    if (titleX == null)
                        titleX = x.name;
                }

                var titleY = Q.tryGetText(y.title);
                if (titleY == null) {
                    titleY = y.title;
                    if (titleY == null)
                        titleY = y.name;
                }

                return Q.turkishLocaleCompare(titleX, titleY);
            });

            this.fieldByName = {};

            for (var field of fields) {
                this.get_fieldByName()[field.name] = field;
            }
        }

        static getCriteriaFor(items: MultiEditLine[]): any[] {

            if (items == null)
                return [''];

            var inParens = false;
            var currentBlock = [''];
            var isBlockOr = false;
            var criteria = [''];

            for (var i = 0; i < items.length; i++) {
                var line = items[i];

                if (line.leftParen || inParens && line.rightParen) {

                    if (!Serenity.Criteria.isEmpty(currentBlock)) {

                        if (inParens)
                            currentBlock = Serenity.Criteria.paren(currentBlock);

                        if (isBlockOr)
                            criteria = Serenity.Criteria.join(criteria,
                                'or', currentBlock);
                        else
                            criteria = Serenity.Criteria.join(criteria,
                                'and', currentBlock);

                        currentBlock = [''];
                    }

                    inParens = false;
                }

                if (line.leftParen) {
                    isBlockOr = line.isOr;
                    inParens = true;
                }

                if (line.isOr)
                    currentBlock = Serenity.Criteria.join(currentBlock,
                        'or', line.criteria);
                else
                    currentBlock = Serenity.Criteria.join(currentBlock,
                        'and', line.criteria);
            }

            if (!Serenity.Criteria.isEmpty(currentBlock)) {
                if (isBlockOr)
                    criteria = Serenity.Criteria.join(criteria,
                        'or', Serenity.Criteria.paren(currentBlock));
                else
                    criteria = Serenity.Criteria.join(criteria,
                        'and', Serenity.Criteria.paren(currentBlock));
            }

            return criteria;
        }

        static getDisplayTextFor(items: MultiEditLine[]): string {

            if (items == null)
                return '';

            var inParens = false;
            var displayText = '';

            for (var i = 0; i < items.length; i++) {
                var line = items[i];

                if (inParens && (line.rightParen || line.leftParen)) {
                    displayText += ')';
                    inParens = false;
                }

                if (displayText.length > 0) {
                    displayText += ' ' + Q.text('Controls.FilterPanel.' +
                        (line.isOr ? 'Or' : 'And')) + ' ';
                }

                if (line.leftParen) {
                    displayText += '(';
                    inParens = true;
                }

                displayText += line.displayText;
            }

            if (inParens) {
                displayText += ')';
            }

            return displayText;
        }

        private changed: any;
        private displayText: string;
        private fields: Serenity.PropertyItem[];
        private fieldByName: Q.Dictionary<Serenity.PropertyItem>
        private items: MultiEditLine[];

        get_fields(): Serenity.PropertyItem[] {
            return this.fields;
        }

        get_fieldByName(): Q.Dictionary<Serenity.PropertyItem> {
            return this.fieldByName;
        }

        get_items(): MultiEditLine[] {
            return this.items;
        }

        raiseChanged(): void {
            this.displayText = null;
            this.changed && this.changed(this, {});
        }

        add_changed(value: (e: JQueryEventObject, a: any) => void): void {
            this.changed = Q.delegateCombine(this.changed, value);
        }

        remove_changed(value: (e: JQueryEventObject, a: any) => void): void {
            this.changed = Q.delegateRemove(this.changed, value);
        }

        get_activeCriteria(): any[] {
            return MultiEditStore.getCriteriaFor(this.items);
        }

        get_displayText(): string {
            if (this.displayText == null)
                this.displayText = MultiEditStore.getDisplayTextFor(this.items);
            
            return this.displayText;
        }
    }
}
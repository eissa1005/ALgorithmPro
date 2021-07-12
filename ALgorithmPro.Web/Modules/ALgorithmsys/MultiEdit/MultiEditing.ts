﻿namespace AS {
    export interface IMultiEditing {
        createEditor(): void;
        getCriteria(): CriteriaWithText;
        getOperators(): Serenity.FilterOperator[];
        loadState(state: any): void;
        saveState(): any;
        get_field(): Serenity.PropertyItem;
        set_field(value: Serenity.PropertyItem): void;
        get_container(): JQuery;
        set_container(value: JQuery): void;
        get_operator(): Serenity.FilterOperator;
        set_operator(value: Serenity.FilterOperator): void;
    }

    @Serenity.Decorators.registerInterface('Serenity.IMultiEditing')
    export class IMultiEditing {
    }

    export interface CriteriaWithText {
        criteria?: any[];
        displayText?: string;
    }

    import Operators = Serenity.FilterOperators;
    import Option = Serenity.Decorators.option

    @Serenity.Decorators.registerClass('Serenity.BaseMultiEditing', [IMultiEditing, Serenity.IQuickFiltering])
    export abstract class BaseMultiEditing implements IMultiEditing, Serenity.IQuickFiltering {

        private field: Serenity.PropertyItem;

        public get_field() {
            return this.field;
        }

        set_field(value: Serenity.PropertyItem) {
            this.field = value;
        }

        private container: JQuery;

        get_container() {
            return this.container;
        }

        set_container(value: JQuery) {
            this.container = value;
        }

        private operator: Serenity.FilterOperator;

        get_operator() {
            return this.operator;
        }

        set_operator(value: Serenity.FilterOperator) {
            this.operator = value;
        }

        abstract getOperators(): Serenity.FilterOperator[];

        protected appendNullableOperators(list: Serenity.FilterOperator[]) {
            if (!this.isNullable()) {
                return list;
            }
            list.push({ key: Serenity.FilterOperators.isNotNull });
            list.push({ key: Serenity.FilterOperators.isNull });
            return list;
        }

        protected appendComparisonOperators(list: Serenity.FilterOperator[]) {
            list.push({ key: Serenity.FilterOperators.EQ });
            list.push({ key: Serenity.FilterOperators.NE });
            list.push({ key: Serenity.FilterOperators.LT });
            list.push({ key: Serenity.FilterOperators.LE });
            list.push({ key: Serenity.FilterOperators.GT });
            list.push({ key: Serenity.FilterOperators.GE });
            return list;
        }

        protected isNullable() {
            return this.get_field().required !== true;
        }

        public createEditor() {
            switch (this.get_operator().key) {
                case 'true':
                case 'false':
                case 'isnull':
                case 'isnotnull': {
                    return;
                }
                case 'contains':
                case 'startswith':
                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge': {
                    this.get_container().html('<input type="text"/>');
                    return;
                }
            }

            throw new Q.Exception(Q.format("MultiEditing '{0}' has no editor for '{1}' operator",
                Q.getTypeName(Q.getInstanceType(this)), this.get_operator().key));
        }

        protected operatorFormat(op: Serenity.FilterOperator) {
            return Q.coalesce(op.format, Q.coalesce(Q.tryGetText(
                'Controls.FilterPanel.OperatorFormats.' + op.key), op.key));
        }

        protected getTitle(field: Serenity.PropertyItem) {
            return Q.coalesce(Q.tryGetText(field.title), Q.coalesce(field.title, field.name));
        }

        protected displayText(op: Serenity.FilterOperator, values?: any[]) {
            if (!values || values.length === 0) {
                return Q.format(this.operatorFormat(op), this.getTitle(this.field));
            }
            else if (values.length === 1) {
                return Q.format(this.operatorFormat(op), this.getTitle(this.field), values[0]);
            }
            else {
                return Q.format(this.operatorFormat(op), this.getTitle(this.field), values[0], values[1]);
            }
        }

        protected getCriteriaField() {
            return this.field.name;
        }

        public getCriteria(): CriteriaWithText {
            var result: CriteriaWithText = {};
            var text: string;
            switch (this.get_operator().key) {
                case 'true': {
                    result.displayText = this.displayText(this.get_operator(), []);
                    result.criteria = [[this.getCriteriaField()], '=', true];
                    return result;
                }

                case 'false': {
                    result.displayText = this.displayText(this.get_operator(), []);
                    result.criteria = [[this.getCriteriaField()], '=', false];
                    return result;
                }

                case 'isnull': {
                    result.displayText = this.displayText(this.get_operator(), []);
                    result.criteria = ['is null', [this.getCriteriaField()]];
                    return result;
                }

                case 'isnotnull': {
                    result.displayText = this.displayText(this.get_operator(), []);
                    result.criteria = ['is not null', [this.getCriteriaField()]];
                    return result;
                }

                case 'contains': {
                    text = this.getEditorText();
                    result.displayText = this.displayText(this.get_operator(), [text]);
                    result.criteria = [[this.getCriteriaField()], 'like', '%' + text + '%'];
                    return result;
                }

                case 'startswith': {
                    text = this.getEditorText();
                    result.displayText = this.displayText(this.get_operator(), [text]);
                    result.criteria = [[this.getCriteriaField()], 'like', text + '%'];
                    return result;
                }

                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge': {
                    text = this.getEditorText();
                    result.displayText = this.displayText(this.get_operator(), [text]);
                    result.criteria = [[this.getCriteriaField()], Serenity.FilterOperators.toCriteriaOperator[
                        this.get_operator().key], this.getEditorValue()];
                    return result;
                }
            }

            throw new Q.Exception(Q.format("MultiEditing '{0}' has no handler for '{1}' operator",
                Q.getTypeName(Q.getInstanceType(this)), this.get_operator().key));
        }

        loadState(state: any) {
            var input = this.get_container().find(':input').first();
            input.val(state);
        }

        saveState() {
            switch (this.get_operator().key) {
                case 'contains':
                case 'startswith':
                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge': {
                    var input = this.get_container().find(':input').first();
                    return input.val();
                }
            }
            return null;
        }

        protected argumentNull() {
            return new Q.ArgumentNullException('value', Q.text('Controls.FilterPanel.ValueRequired'));
        }

        validateEditorValue(value: string) {
            if (value.length === 0) {
                throw this.argumentNull();
            }
            return value;
        }

        getEditorValue() {
            var input = this.get_container().find(':input').not('.select2-focusser').first();
            if (input.length !== 1) {
                throw new Q.Exception(Q.format("Couldn't find input in filter container for {0}",
                    Q.coalesce(this.field.title, this.field.name)));
            }

            var value;
            if (input.data('select2') != null) {
                value = input.select2('val');
            }
            else {
                value = input.val();
            }

            value = Q.coalesce(value, '').trim();

            return this.validateEditorValue(value);
        }

        getEditorText() {
            var input = this.get_container().find(':input').not('.select2-focusser').not('.select2-input').first();
            if (input.length === 0) {
                return this.get_container().text().trim();
            }
            var value;
            if (input.data('select2') != null) {
                value = Q.coalesce(input.select2('data'), {}).text;
            }
            else {
                value = input.val();
            }
            return value;
        }

        initQuickFilter(filter: Serenity.QuickFilter<Serenity.Widget<any>, any>) {
            filter.field = this.getCriteriaField();
            filter.type = Serenity.StringEditor;
            filter.title = this.getTitle(this.field);
            filter.options = Q.deepClone({}, this.get_field().quickFilterParams);
        }
    }

    function MultiEditing(name: string) {
        return Serenity.Decorators.registerClass('Serenity.' + name + 'MultiEditing')
    }

    @MultiEditing('BaseEditor')
    export abstract class BaseEditorMultiEditing<TEditor extends Serenity.Widget<any>> extends BaseMultiEditing {
        constructor(public editorType: any) {
            super();
        }

        protected useEditor() {
            return true;
        }

        protected editor: TEditor;

        createEditor() {
            if (this.useEditor()) {
                this.editor = Serenity.Widget.create({
                    type: this.editorType,
                    container: this.get_container(),
                    options: this.getEditorOptions(),
                    init: null
                }) as any;
                return;
            }
            this.editor = null;
            super.createEditor();
        }

        protected useIdField() {
            return false;
        }

        getCriteriaField() {
            if (this.useEditor() &&
                this.useIdField() &&
                !Q.isEmptyOrNull(this.get_field().filteringIdField)) {
                return this.get_field().filteringIdField;
            }

            return super.getCriteriaField();
        }

        getEditorOptions() {
            var opt = Q.deepClone({}, this.get_field().editorParams);
            delete opt['cascadeFrom'];
            // currently can't support cascadeFrom in filtering
            return Q.deepClone(opt, this.get_field().filteringParams);
        }

        loadState(state: any) {
            if (this.useEditor()) {
                if (state == null) {
                    return;
                }

                Serenity.EditorUtils.setValue(this.editor, state);
                return;
            }

            super.loadState(state);
        }

        saveState() {
            if (this.useEditor()) {
                return Serenity.EditorUtils.getValue(this.editor);
            }

            return super.saveState();
        }

        getEditorValue() {
            if (this.useEditor()) {
                var value = Serenity.EditorUtils.getValue(this.editor);

                if (value == null || (typeof value == "string" && value.trim().length === 0))
                    throw this.argumentNull();

                return value;
            }

            return super.getEditorValue();
        }

        initQuickFilter(filter: Serenity.QuickFilter<Serenity.Widget<any>, any>) {
            super.initQuickFilter(filter);

            filter.type = this.editorType;
            filter.options = Q.deepClone({},
                this.getEditorOptions(),
                this.get_field().quickFilterParams);
        }
    }

    @MultiEditing('Date')
    export class DateMultiEditing extends BaseEditorMultiEditing<Serenity.DateEditor> {

        constructor() {
            super(Serenity.DateEditor)
        }

        getOperators(): Serenity.FilterOperator[] {
            return this.appendNullableOperators(this.appendComparisonOperators([]));
        }
    }

    @MultiEditing('Boolean')
    export class BooleanMultiEditing extends BaseMultiEditing {
        getOperators() {
            return this.appendNullableOperators([
                { key: Serenity.FilterOperators.isTrue },
                { key: Serenity.FilterOperators.isFalse }
            ]);
        }
    }

    @MultiEditing('DateTime')
    export class DateTimeMultiEditing extends BaseEditorMultiEditing<Serenity.DateEditor> {

        constructor() {
            super(Serenity.DateTimeEditor)
        }

        getOperators(): Serenity.FilterOperator[] {
            return this.appendNullableOperators(
                this.appendComparisonOperators([]));
        }

        getCriteria() {
            var result: CriteriaWithText = {};

            switch (this.get_operator().key) {
                case 'eq':
                case 'ne':
                case 'lt':
                case 'le':
                case 'gt':
                case 'ge': {
                    {
                        var text = this.getEditorText();
                        result.displayText = this.displayText(this.get_operator(), [text]);
                        var date = Q.parseISODateTime(this.getEditorValue());
                        date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                        var next = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
                        var criteria = [this.getCriteriaField()];
                        var dateValue = Q.formatDate(date, 'yyyy-MM-dd');
                        var nextValue = Q.formatDate(next, 'yyyy-MM-dd');
                        switch (this.get_operator().key) {
                            case 'eq': {
                                result.criteria = Serenity.Criteria.join([criteria, '>=', dateValue], 'and', [criteria, '<', nextValue]);
                                return result;
                            }
                            case 'ne': {
                                result.criteria = Serenity.Criteria.paren(Serenity.Criteria.join([criteria, '<', dateValue], 'or', [criteria, '>', nextValue]));
                                return result;
                            }
                            case 'lt': {
                                result.criteria = [criteria, '<', dateValue];
                                return result;
                            }
                            case 'le': {
                                result.criteria = [criteria, '<', nextValue];
                                return result;
                            }
                            case 'gt': {
                                result.criteria = [criteria, '>=', nextValue];
                                return result;
                            }
                            case 'ge': {
                                result.criteria = [criteria, '>=', dateValue];
                                return result;
                            }
                        }
                    }
                    break;
                }
            }

            return super.getCriteria();
        }
    }

    @MultiEditing('Decimal')
    export class DecimalMultiEditing extends BaseEditorMultiEditing<Serenity.DecimalEditor> {
        constructor() {
            super(Serenity.DecimalEditor);
        }

        getOperators(): Serenity.FilterOperator[] {
            return this.appendNullableOperators(
                this.appendComparisonOperators([]));
        }
    }

    @MultiEditing('Editor')
    export class EditorMultiEditing extends BaseEditorMultiEditing<Serenity.Widget<any>> {

        constructor() {
            super(Serenity.Widget)
        }

        @Option()
        editorType: string;

        @Option()
        useRelative: boolean;

        @Option()
        useLike: boolean;

        getOperators(): Serenity.FilterOperator[] {
            var list = [];

            list.push({ key: Operators.EQ });
            list.push({ key: Operators.NE });

            if (this.useRelative) {
                list.push({ key: Operators.LT });
                list.push({ key: Operators.LE });
                list.push({ key: Operators.GT });
                list.push({ key: Operators.GE });
            }

            if (this.useLike) {
                list.push({ key: Operators.contains });
                list.push({ key: Operators.startsWith });
            }

            this.appendNullableOperators(list);

            return list;
        }

        protected useEditor() {
            var op = this.get_operator().key;

            return op === Operators.EQ ||
                op === Operators.NE ||
                (this.useRelative && (
                    op === Operators.LT ||
                    op === Operators.LE ||
                    op === Operators.GT ||
                    op === Operators.GE));
        }

        getEditorOptions() {
            var opt = super.getEditorOptions();
            if (this.useEditor() && this.editorType === Q.coalesce(this.get_field().editorType, 'String')) {
                opt = $.extend(opt, this.get_field().editorParams);
            }

            return opt;
        }

        createEditor() {
            if (this.useEditor()) {
                var editorType = Serenity.EditorTypeRegistry.get(this.editorType);

                this.editor = Serenity.Widget.create({
                    type: editorType,
                    element: e => e.appendTo(this.get_container()),
                    options: this.getEditorOptions()
                });

                return;
            }

            super.createEditor();
        }

        protected useIdField(): boolean {
            return this.useEditor();
        }

        initQuickFilter(filter: Serenity.QuickFilter<Serenity.Widget<any>, any>) {
            super.initQuickFilter(filter);

            filter.type = Serenity.EditorTypeRegistry.get(this.editorType);
        }
    }

    @MultiEditing('Enum')
    export class EnumMultiEditing extends BaseEditorMultiEditing<Serenity.EnumEditor> {
        constructor() {
            super(Serenity.EnumEditor);
        }

        getOperators() {
            var op = [{ key: Operators.EQ }, { key: Operators.NE }];
            return this.appendNullableOperators(op);
        }
    }

    @MultiEditing('Integer')
    export class IntegerMultiEditing extends BaseEditorMultiEditing<Serenity.IntegerEditor> {
        constructor() {
            super(Serenity.IntegerEditor);
        }

        getOperators(): Serenity.FilterOperator[] {
            return this.appendNullableOperators(this.appendComparisonOperators([]));
        }
    }

    @MultiEditing('Lookup')
    export class LookupMultiEditing extends BaseEditorMultiEditing<Serenity.LookupEditor> {

        constructor() {
            super(Serenity.LookupEditor);
        }

        getOperators(): Serenity.FilterOperator[] {
            var ops = [{ key: Operators.EQ }, { key: Operators.NE }, { key: Operators.contains }, { key: Operators.startsWith }]
            return this.appendNullableOperators(ops);
        }

        protected useEditor(): boolean {
            var op = this.get_operator().key;
            return op == Operators.EQ || op == Operators.NE;
        }

        protected useIdField(): boolean {
            return this.useEditor();
        }

        getEditorText(): string {
            if (this.useEditor()) {
                return this.editor.text;
            }

            return super.getEditorText();
        }
    }

    @MultiEditing('String')
    export class StringMultiEditing extends BaseMultiEditing {

        getOperators(): Serenity.FilterOperator[] {
            var ops = [
                { key: Operators.contains },
                { key: Operators.startsWith },
                { key: Operators.EQ },
                { key: Operators.NE }
            ];
            return this.appendNullableOperators(ops);
        }

        validateEditorValue(value: string) {
            if (value.length === 0) {
                return value;
            }

            return super.validateEditorValue(value);
        }
    }

    export namespace MultiEditingTypeRegistry {

        let knownTypes: Q.Dictionary<Function>;


        function initialize(): void {

            if (knownTypes != null)
                return;

            knownTypes = {};

            for (var type of Q.getTypes()) {
                if (!Q.isAssignableFrom(AS.IMultiEditing, type))
                    continue;

                var fullName = Q.getTypeFullName(type).toLowerCase();

                knownTypes[fullName] = type;

                for (var k of Q.Config.rootNamespaces) {
                    if (Q.startsWith(fullName, k.toLowerCase() + '.')) {
                        var kx = fullName.substr(k.length + 1).toLowerCase();

                        if (knownTypes[kx] == null) {
                            knownTypes[kx] = type;
                        }
                    }
                }
            }

            setTypeKeysWithoutMultiEditHandlerSuffix();
        }

        function setTypeKeysWithoutMultiEditHandlerSuffix() {
            var suffix = 'filtering';

            for (var k of Object.keys(knownTypes)) {
                if (!Q.endsWith(k, suffix))
                    continue;

                var p = k.substr(0, k.length - suffix.length);
                if (Q.isEmptyOrNull(p))
                    continue;

                if (knownTypes[p] != null)
                    continue;

                knownTypes[p] = knownTypes[k];
            }
        }

        function reset(): void {
            knownTypes = null;
        }

        export function get(key: string): Function {

            if (Q.isEmptyOrNull(key))
                throw new Q.ArgumentNullException('key');

            initialize();
            var formatterType = knownTypes[key.toLowerCase()];
            //if (formatterType == null)
            //    throw new ss.Exception(Q.format(
            //        "Can't find {0} filter handler type!", key));

            return formatterType;
        }
    }
}
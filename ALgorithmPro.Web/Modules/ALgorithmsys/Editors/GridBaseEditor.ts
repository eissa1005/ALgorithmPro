/// <reference path="../Bases/GridBase.ts" />
namespace AS {

    @Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly])
    @Serenity.Decorators.editor()
    @Serenity.Decorators.element("<div/>")

    export class GridBaseEditor<TEntity> extends AS.GridBase<TEntity, any>

        implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {

        protected getASGridOptions(): ExtGridOptions { return Q.deepClone(AS.DefaultEditorGridOptions); }

        protected getIdProperty() { return "__id"; }

        isChildGrid = true;

        constructor(container: JQuery, options?) {
            super(container, options);

            this.slickGrid.onSort.subscribe((e, args) => {
                this.sortGridFunction((args.grid as Slick.Grid), args.sortCols[0], args.sortCols[0].sortCol.field);
                //(args.grid as Slick.Grid).init();
                (args.grid as Slick.Grid).invalidateAllRows();
                (args.grid as Slick.Grid).invalidate();
                (args.grid as Slick.Grid).render();
                /* (args.grid as Slick.Grid).resizeCanvas();*/
            });

        }

        private sortGridFunction(grid: Slick.Grid, column: any, field: any) {
            grid.getData().sort(function (a, b) {
                var result = a[field] > b[field] ? 1 :
                    a[field] < b[field] ? -1 :
                        0;
                return column.sortAsc ? result : -result;
            });
        }

        protected getQuickFilters() {
            return [];
        }

        protected id(entity: any) {
            return (entity)[this.getIdProperty()];
        }
       
        protected setNewID(entity: TEntity) {
            entity[this.getIdProperty()] = this.getNextId();
        }

        protected validateEntity(row: TEntity, id: number) {
            return true;
        }

        protected getNewEntity(): TEntity {
            return {} as TEntity;
        }

        protected getButtons(): Serenity.ToolButton[] {
            return null;
        }

        protected setEntities(items: TEntity[]) {
            this.view.setItems(items, true);
        }

        protected editItem(entityOrId: any): void {
            var id = entityOrId;
            var item = this.view.getItemById(id);
        }

        public getEditValue(property, target) {
            target[property.name] = this.value;
        }

        public setEditValue(source, property) {
            this.value = source[property.name];
        }

        public get value(): TEntity[] {

            var p = this.getIdProperty();

            (this.slickGrid as any).getEditController().commitCurrentEdit();

            let row = this.slickGrid.getData();

            var id = this.id(row);
            if (id == null) {
                (row as any)[this.getIdProperty()] = this.getNextId();
                id = row[p];
            }

            let items = this.slickGrid.getData();

            this.onBeforeGetValue(items);

            return items.map(x => {
                var y = Q.deepClone(x);
                var id = y[p];
                if (id && id.toString().charAt(0) == '`')
                    delete y[p];

                if (y['RowNum'])
                    delete y['RowNum'];
                return y;
            });
        }

        public set value(value: TEntity[]) {

            var id = this.getIdProperty();
            let val = value || [];
            val.map(x => {
                var entity = Q.deepClone(x);
                setTimeout(() => {
                    this.onItemsChanged(entity);
                    this.element.trigger('change');
                });
            });


            let items = val.map(x => {
                var y = Q.deepClone(x);
                if ((y as any)[id] == null) {
                    (y as any)[id] = "`" + this.nextId++;
                }
                return y;
            });

            let r = this.onViewProcessData({ Entities: items })
            this.slickGrid.setData(items, false);
            this.slickGrid.render();
            this.view.setItems(r.Entities, true);
            this.resetRowNumber(); // to generate serial no..
        }

        protected getGridCanLoad() {
            return false;
        }

        protected usePager() {
            return false;
        }

        protected getInitialTitle() {
            return null;
        }

        private searchText: string;

        protected createToolbarExtensions(): void {
            //super.createToolbarExtensions();
            if (this.getASGridOptions().EnableQuickSearch) {
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, (field, text) => {
                    this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    this.view.setItems(this.view.getItems(), true);
                });
            }
        }

        protected onViewFilter(row): boolean {
            if (!super.onViewFilter(row)) {
                return false;
            }

            if (this.searchText) {
                return this.matchContains(row);
            }

            return true;
        }

        private matchContains(item): boolean {
            let result = false;

            for (let prop in item) {
                result = Select2.util.stripDiacritics(String(item[prop] || '')).toLowerCase().indexOf(this.searchText) >= 0;

                if (result == true) {
                    return result;
                }
            }

            return result;
        }

        protected enableFiltering(): boolean { return false; }

        protected onViewSubmit() { return false; }

        get_readOnly(): boolean {
            return this.isReadOnly;
        }

        set_readOnly(value: boolean): void {
            this.isReadOnly = value;
            if (value == true) {
                this.element.find('.add-button').addClass('disabled');
                let opt = this.slickGrid.getOptions();
                opt.editable = false;

                this.slickGrid.setOptions(opt);
            } else {
                this.element.find('.add-button').removeClass('disabled');
            }

        }

        protected getSlickOptions() {
            let opt = super.getSlickOptions();
            opt.forceFitColumns = false;
            //opt.autoHeight = true; // If you need to show footer, you have to do opt.autoHeight = false
            return opt;
        }

        protected parentDialog: DialogBase<any, any>;

        protected onItemsChanged(value:any) {

        }
      
        protected onBeforeGetValue(items: TEntity[]) {

        }
       
    }
}
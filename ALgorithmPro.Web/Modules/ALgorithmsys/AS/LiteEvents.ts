
namespace ALgorithmPro {
    export interface IEventHandler<TSender, TArgs> {
        (sender: TSender, args: TArgs): void;
        Detial?: TArgs;
    }
    export interface IEvent<TSender, TArgs> {
        on(handler: IEventHandler<TSender, TArgs>): IEvent<TSender, TArgs>;
        off(handler: IEventHandler<TSender, TArgs>): IEvent<TSender, TArgs>;
        one(handler: IEventHandler<TSender, TArgs>): IEvent<TSender, TArgs>;
        trigger(sender?: TSender, args?: TArgs): IEvent<TSender, TArgs>;
        clear(handler: IEventHandler<TSender, TArgs>): IEvent<TSender, TArgs>;
    }

    export class LiteEvents<TSender, TArgs> implements IEvent<TSender, TArgs>{

        private _handlers: IEventHandler<TSender, TArgs>[] = [];
        
        public one(handler: IEventHandler<TSender, TArgs>): IEvent<TSender, TArgs> {
            var oneHendler = (sender: TSender, args: TArgs) => {
                handler(sender, args);
                this.off(oneHendler)
            };
            this.on(oneHendler);
            return this;
            
        }

        public on(handler: IEventHandler<TSender, TArgs>) {

            this._handlers.push(handler);
            return this;
        }

        public off(handler: IEventHandler<TSender, TArgs>) {

            if (!handler.Detial) {
                this._handlers = this._handlers.filter(h => h !== handler);
            } else {
                this._handlers = this._handlers.filter(h => h.Detial !== handler.Detial);
            }
            return this;
        }

        public clear(handler: IEventHandler<TSender, TArgs>) {

            this._handlers = [];
            return this;
        }

        public has(handler: IEventHandler<TSender, TArgs>): boolean {
            var result: IEventHandler<TSender, TArgs>[];
            if (!handler.Detial) {
                result = this._handlers.filter(h => h !== handler);
            } else {
                result = this._handlers.filter(h => h.Detial !== handler.Detial);
            }
            return result.length > 0;
        }

        public trigger(sender?: TSender, args?: TArgs) {
            this._handlers.forEach(h => h(sender, args));
            return this;
        }

        public expose() {
            return this;
        }

    }
}
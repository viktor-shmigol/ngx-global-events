export declare class NgxGlobalEvents {
    private _channels;
    subscribe(topic: string, ...handlers: Function[]): void;
    unsubscribe(topic: string, handler?: Function): boolean;
    publish(topic: string, ...args: any[]): any[] | null;
}

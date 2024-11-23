namespace MetaData {
    const register = new WeakMap<object, {[key: string]: any}>();
    export function get<T>(entity: object, name: string): T {
        let data = register.get(entity);
        if (!data) {
            data = {};
            register.set(entity, data);
        }
        if (!(name in data)) {
            data[name] = {} as T;
        }
        return data[name];
    }
}
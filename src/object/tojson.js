import initMK from '../_core/init';

// converts Matreshka.Object instance to ordinary object
export default function toJSON(recursive = true) {
    const { keys } = initMK(this);
    const result = {};

    nofn.forOwn(keys, (_, key) => {
        const value = this[key];
        // when recursive is true and when value has toJSON method then call it recusively
        if (recursive && value && typeof value.toJSON === 'function') {
            result[key] = value.toJSON(true);
        } else {
            result[key] = value;
        }
    });

    return result;
}

import Index from './controllers/index';

function dashToPascalCase(str) {
    return str.charAt(0)
        .concat(str.slice(1).toLowerCase())
        .replace(/-([a-z])/g, (g) => g[1].toUpperCase());
}

export default {
    init: function () {
        // get controller
        let Fn = Index[dashToPascalCase(this.root.tagName)];

        // call it with tag instance
        typeof Fn === 'function' && new Fn(this);
    }
}

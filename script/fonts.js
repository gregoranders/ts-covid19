import { dom, library } from '@fortawesome/fontawesome-svg-core';
const imports = [
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/free-regular-svg-icons',
    '@fortawesome/free-brands-svg-icons',
].map((name) => {
    return import(name);
});
Promise.all(imports)
    .then((modules) => {
    const list = [];
    modules.map((mod) => {
        Object.keys(mod).forEach((key) => {
            if (key.startsWith('fa') || key.startsWith('fas') || key.startsWith('far') || key.startsWith('fab')) {
                list.push(mod[key]);
            }
        });
    });
    library.add(...list);
})
    .finally(() => {
    dom.watch();
});

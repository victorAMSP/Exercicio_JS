const obj = {
    get name() {
        return this._name;
    },
    set name(value) {
        if (value.length > 2) {
            this._name = value;
        } else {
            console.log('Nome inválido. O nome deve ter mais de 2 caracteres.');
        }
}
};

obj.name = 'Luiz';
console.log(obj.name); // Luiz

obj.name = 'Lu';
console.log(obj.name); // Luiz
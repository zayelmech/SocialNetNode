const db = {
    'user': [
        { id: '1', name: 'Abdiel' },
    ],

};

async function list(tabla) {
    return db[tabla];
}

async function get(tabla, id) {
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}

async function upsert(tabla, data) {
    if (!db[tabla]) {
        console.log('Tabla vacia');
        db[tabla] = [];
    }
    db[tabla].push(data);
    console.log('Data added');
    console.log(db);
}

async function remove(tabla, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
};
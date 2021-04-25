const bcrypt = require('bcrypt');

const auth = require('../../../auth')
const TABLA = 'auth';
module.exports = function(injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    async function login(username, password) {
        const data = await store.query(TABLA, { username: username });
        return bcrypt.compare(password, data.password)
            .then(sonIguales => {
                if (sonIguales === true) {
                    //generar token
                    return auth.sign(data);

                } else {
                    //error
                    throw new Error('Informacion invalidad: clave 7');
                }
            })


    }

    async function upsert(data) {
        const authData = {
            id: data.id,

        }
        console.log('log in controller auth' + data);
        if (data.username) {
            authData.username = data.username
        }
        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 5); /*entre 5 y 10 es /el numero de veces recomendadas para ejecutar el algoritmo*/
        }
        return store.upsert(TABLA, authData);
    }
    return {
        upsert,
        login,
    }
};
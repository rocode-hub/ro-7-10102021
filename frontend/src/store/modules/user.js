/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   USER STORE
-------------------------------------------------------------------------------- */

const state = {
    userLogged: {
        id: 0,
        isadmin: 0,
        token: '',
    }
}

const getters = {

}

const mutations = {
    STORE_USERLOGGED (state, payload) {
        state.userLogged.id = payload.userId;
        state.userLogged.isadmin = payload.userAdmin;
        state.userLogged.token = payload.token;
    }
}

const actions = {
    async LOGIN (store, payload) {
        return new Promise((resolve, reject) => {
            const optLogin = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    email: payload.email,
                    pwd: payload.pwd,
                })
            };
            return fetch('http://localhost:3000/api/users/login', optLogin )
                .then( response => {
                    let result = response.status;
                    if( response.status === 200 ) {
                        response.json()
                            .then( data => {
                                store.commit('STORE_USERLOGGED', data);
                                resolve( { status: 200 } );
                            });
                    } else {
                        reject( result );
                    }
                })
                .catch( error => reject(error))
        });
    }
}


export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions,
    strict: true,
}

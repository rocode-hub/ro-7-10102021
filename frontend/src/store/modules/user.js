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
    GET_USERLOGGED (state) {
        return JSON({
            id: state.userLogged.id,
            isadmin: state.userLogged.isadmin,
            token: state.userLogged.token
        });
    }
}

const mutations = {
    STORE_USERLOGGED (state, payload) {
        state.userLogged.id = payload.userId;
        state.userLogged.isadmin = payload.userAdmin;
        state.userLogged.token = payload.token;
    }
}

const actions = {
    async LOGINCREATE (store, optionsFetch) {
        const mode = JSON.parse(optionsFetch.body).mode;
        const url = 'http://localhost:3000/api/users/' + ((mode === 1) ? 'login' : 'signup');
        return new Promise((resolve, reject) => {
            return fetch(url, optionsFetch)
                .then( response => {
                    if( response.ok ) {
                        if (mode === 1) {
                            response.json()
                            .then( data => {
                                store.commit('STORE_USERLOGGED', data);
                            });
                        }
                        resolve( { status: 200 } );
                    } else {
                        reject( response.status );
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

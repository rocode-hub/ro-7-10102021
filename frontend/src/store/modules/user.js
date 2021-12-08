/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   USER STORE
-------------------------------------------------------------------------------- */

const state = () => ({
    userLogged: {
        id: 0,
        isadmin: 0,
        token: '',
    }
})

const getters = {

}

const mutations = {
    STORE_USERLOGGED ( state, payload ) {
        state.userLogged.id = payload.userId;
        state.userLogged.isadmin = payload.userAdmin;
        state.userLogged.token = payload.token;
    }
}

const actions = {

    /* --------------------------------------------------------------------------------
    name ...  LOGSIGN
    obj  ...  Authentification ou création d'un utilisateur
    in   ...  optionsFetch {...}
                    email,
                    pwd,
                    mode : true > login / false > signup
    out  ...  payload {...}
                    userId,
                    userAdmin,
                    token
    -------------------------------------------------------------------------------- */
    async LOGSIGN ( { commit }, optionsFetch ) {
        const mode = JSON.parse( optionsFetch.body ).mode;
        const url = 'http://localhost:3000/api/users/' + (( mode ) ? 'login' : 'signup');
        return new Promise( ( resolve, reject ) => {
            return fetch( url, optionsFetch )
                .then( response => {
                    if( response.ok ) {
                        if ( mode ) {
                            response.json()
                            .then( data => {
                                commit( 'STORE_USERLOGGED', data );
                            });
                        }
                        resolve( { status: 200 } );
                    } else {
                        reject( response.status );
                    }
                })
                .catch( error => reject( error ))
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
    strict: true,
}

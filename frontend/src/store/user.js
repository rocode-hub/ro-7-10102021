/* --------------------------------------------------------------------------------
app   ...   Groupomania intra social network
mod   ...   USER STORE
-------------------------------------------------------------------------------- */

export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        LOGIN: ({ commit }, { email, password }) => {
            return new Promise((resolve, reject) => {
                const optLogin = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify({
                        email: email,
                        pwd: password,
                    })
                };
                commit;
                event.preventDefault();
                let res = fetch('http://localhost:3000/api/users/login', optLogin );
                console.log(res.status);
                console.log(res.statusText);
                if (res.status === 200) {
                    resolve(true);
                } else {
                    reject();
                }
            });
        }
    }
}

import store from '../store'
export async function login(body) {
    try {
        let res = await fetch("/login", {
            method: "POST",
            body: JSON.stringify(body)
        });
        if (res.status == 200) {
            let data = await res.json();
            if (data.status == "error") {
                return {
                    status: data.status,
                    msg: data.msg
                };
            } else {
                store.commit("setUser", body);
                return {
                    status: data.status,
                    msg: data.msg,
                    isAuth: true
                };
            }
        } else throw new Error("login failed");
    } catch (error) {
        return {
            status: "error",
            msg: error.message
        };
    }
}

// export async function checkUser() {
//     if (store.state.user.isAuth) return store.state.user
//     else {

//         try {
//             let user = await fetch('/check_user', {
//                 method: 'POST',
//             });
//             if (user.status === 200) {
//                 var data = await user.json()
//                 if (data.status == 'error') {
//                     return {
//                         status: data.status,
//                         msg: data.msg
//                     }
//                 } else {
//                     store.commit('setUser', data.payload)
//                     return {
//                         status: data.status,
//                         msg: data.msg,
//                     }
//                 }
//             } else {
//                 return {
//                     status: data.status,
//                     msg: data.msg
//                 }
//             }
//         } catch (error) {
//             return {
//                 status: data.status,
//                 msg: data.msg
//             }
//         }
//     }
// }
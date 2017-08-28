import { post } from '../util/HttpTool'
import { BASE_URL } from '../common/GlobalContants'

export async function loginApi(username, password, language = 'CN', registration_id) {
    const url = `${BASE_URL}/intest/api/login`;
    const params = {
        username, password, language, registration_id
    }
    return await post({ url, params }).then(res => res.json());
}

export async function alertsListApi(user_id, session_id) {
    const url = `${BASE_URL}/intest/api/alerts/list`;
    const params = {
        user_id, session_id
    }
    return await post({ url, params }).then(res => res.json());
}

export async function resetPwdApi(user_id, session_id, old_password, new_password) {
    const url = `${BASE_URL}/intest/api/resetpwd`;
    const params = {
        user_id, session_id
    }
    return await post({ url, params }).then(res => res.json());
}
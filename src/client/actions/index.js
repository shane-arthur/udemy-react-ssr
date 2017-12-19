export const FETCH_USERS = 'fetch_users';

export const fetchUsers = () => async (dispatch, getState, api) => {
    const url = '/users';
    const res = await api.get(url);

    const payload = res.data;

    dispatch({
        type: FETCH_USERS,
        payload
    });
}

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const url = '/current_user';
    const res = await api.get(url);

    const payload = res.data;

    dispatch({
        type: FETCH_CURRENT_USER,
        payload
    })
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
    const url = '/admins';
    const res = await api.get(url);
    const payload = res.data;

    dispatch({
        type: FETCH_ADMINS,
        payload
    })
}
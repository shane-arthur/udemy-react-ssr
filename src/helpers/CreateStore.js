import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers'
import axios from 'axios';

const getAxiosInstance = (cookie) => {
    cookie = cookie ? cookie : '';
    return axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookie }
    });
};

export default (req) => {
    const store = createStore
        (reducers, {}, applyMiddleware
            (thunk.withExtraArgument
                (getAxiosInstance
                    (req.get
                        ('cookie')
                    )
                )
            )
        );

    return store;
}
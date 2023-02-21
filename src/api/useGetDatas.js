import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

/**
 * 
 * @param {string} url 
 * @returns {{data: object, loading: boolean, error: string}}
 */

export default function useGetDatas(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true)

        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            })


    }, [url]);

    return { data, loading, error };
}

useGetDatas.propTypes = {
    url: PropTypes.string.isRequired,
    data: PropTypes.object,
    error: PropTypes.string
};
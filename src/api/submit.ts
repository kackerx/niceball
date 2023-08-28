import axios from "./base";

export const submit = (data: {}) => {
    return axios.post('articles', data,
        {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        }
    )
}

export const upload = (file: any, title: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    return axios.post('image/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': localStorage.getItem('token'),
        },
    })
    // .then(response => {
    //     console.log(response.data.message);
    //     // 处理上传成功后的逻辑
    // })
    // .catch(error => {
    //     console.error(error);
    //     // 处理上传失败后的逻辑
    // });
}

export const getArticles =
    (cate: string, year: any, page_size: string, page_num: any, isAdmin: number = 0) => {
        if (page_num === '') page_num = '1'
        if (year === '') year = new Date().getFullYear().toString();
        return axios.get('articles', {
            params: {
                cate: cate,
                year: year,
                page_size: page_size,
                page_num: page_num,
                is_admin: isAdmin,
            }
        })
    }

export const fetchArticleContent = (cate: string) => {
    return axios.get(`articles/${ cate }`)
}

export const checkLogin = (token: string) => {
    const formData = new FormData();
    formData.append('token', token);

    return axios.post('check_login', formData, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export const login = (username: string, password: string) => {
    return axios.post('login', {
        username: username,
        password: password
    })
}

export const updateCate = (cate: string, content: string) => {
    return axios.post('article_content/update',
        {
            id: cate,
            content: content
        },
        {
            headers: {
                'Authorization': localStorage.getItem('token'),
            },
        }
    )
}

export const deleteArticle = (id: string) => {
    return axios.post(`articles/delete`, { id }, {
        headers: {
            'Authorization': localStorage.getItem('token'),
        },
    })
}

export const fetchToday = () => {
    return axios.get('articles/today')
}

export const fetchTuku = () => {
    return axios.get('imgs')
}
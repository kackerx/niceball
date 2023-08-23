import axios from "./base";

export const submit = (data: {}) => {
    return axios.post('admin/jiaozhu', data)
}

export const upload = (file: any, title: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    return axios.post('image/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
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

export const getArticles = (cate: string, year: string, page_size: string, page_num: string) => {
    if (page_num === '') page_num = '1'
    if (year === '') year = new Date().getFullYear().toString();
    return axios.get('articles', {
        params: {
            cate: cate,
            year: year,
            page_size: page_size,
            page_num: page_num
        }
    })
}

export const fetArticleContent = (cate: string) => {
    return axios.get(`articles/${cate}`)
}
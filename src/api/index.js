import request from "@/utils/request";

export const sendImage = (data) => {
    const formData = new FormData();

    Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
    });

    return request.post('/send_image', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const getImage = (name) =>
    request({
        url: `/get_image/${name}`,
        method: 'GET'
    });

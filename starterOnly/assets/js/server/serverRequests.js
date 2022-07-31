function sleep () {
    return new Promise(resolve => setTimeout(resolve, 2000));
}

const server = async (userData) => {
    let error = null
    await sleep();

    return new Promise((resolve, reject) => {
        if(!error) {
            resolve("User data added succesfully.")
        } else {
            reject("something went wrong.")
        }
    })
}


const handlePostRequest = async (userData) => {
    let response = {
        data: null,
        message: null
    };
    let error = {
        data: null,
        error: null
    };

    await server(userData).then(res => {
        response.message = res
    }).catch(err => {
        error.message = err
    })

    return new Promise((resolve, reject) => {
        if(!error.message) {
            resolve(response)
        } else {
            reject(error)
        }
    })

};

export { handlePostRequest }
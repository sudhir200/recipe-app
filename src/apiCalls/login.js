import axios from "axios";

export function getCountries() {
    return new Promise(function (resolve, reject) {
        axios.get('https://restcountries.eu/rest/v2/all').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}
export function addData(name,job,retryTimes) {
    var data = {
        "name": name,
        "job": job,
    }
    return new Promise(function (resolve, reject) {
        axios({
            method: 'post',
            url: `https:/reqres.in/api/users`,
            headers: {},
            data: data
        }).then((res, err) => {
            if (res) {
                resolve(res.data)
            } else {
                console.log(err)
                reject(err);
            }
        }).catch(function (err) {
            if (retryTimes === 1) {
                reject(err);
            } else {
                setTimeout(() => {
                    addData(retryTimes - 1).then(function (response) {
                        resolve(response.data);
                    }).catch(function (error) {
                        reject(error);
                    });
                }, 1000); //retry after 1 sec
            }
        })
    });

}

import axios from "axios";

export function getCountries() {
    return new Promise(function (resolve, reject) {
        axios.get('https://restcountries.eu/rest/v2/all').then((res) =>resolve(res))
            .catch((err) => console.log(err))
    })
}

/*
import axios from "axios";
export function getData(retryTimes) {
    return new Promise(function (resolve, reject) {
        axios.get(`url`).then((res, err) => {
            if (res) {
                resolve(res.data)
            } else {

                reject(err);
            }
        }).catch(function (err) {
            if (retryTimes === 1) {
                reject(err);
            } else {
                setTimeout(() => {
                    getData( retryTimes - 1).then(function (response) {
                        resolve(response);
                    }).catch(function (error) {
                        reject(error);
                    });
                }, 1000); //retry after 1 sec
            }
        })
    });

}


}
*/

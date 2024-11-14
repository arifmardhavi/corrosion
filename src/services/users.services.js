import axios from "axios";

export const getAllUsers = (callback) => {
    axios
        .get("http://127.0.0.1:8000/api/users")
        .then((res) => {
            callback(res.data);
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}

export const addUsers = (data, callback) => {
    axios
        .post("http://127.0.0.1:8000/api/users", data)
        .then((res) => {
            callback(res.data);
            console.log(res.data);
        }) 
        .catch((err) => {
            console.log(err);
        }) 
}
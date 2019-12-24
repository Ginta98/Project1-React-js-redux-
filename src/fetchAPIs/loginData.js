export default function loginData(data) {
    return new Promise((resolve, reject) => {
        const url = `http://localhost:3001/account?account=${data.account}&password=${data.password}`
        fetch(url, {
          method: "GET"
          
        })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
            console.log(res)
          })
          .catch((error) => {
            reject(error);
          });
      });
}
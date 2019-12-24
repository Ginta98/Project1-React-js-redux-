export default function delUser(id) {
    return new Promise((resolve, reject) => {
      
      const url = `http://localhost:3001/account/`+ id
      fetch(url, {
        method: "DELETE"
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
  
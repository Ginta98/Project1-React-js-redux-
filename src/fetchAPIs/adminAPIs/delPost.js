export default function delPost(id) {
    return new Promise((resolve, reject) => {
      
      const url = `http://localhost:3001/forumPosts/`+ id
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
  
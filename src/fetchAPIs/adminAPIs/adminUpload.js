export default function adminUpload(data) {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3001/forumPosts'
        fetch(url, {
          method: "POST",
          headers: {"Content-type":"application/json"},
          body: JSON.stringify(data)
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
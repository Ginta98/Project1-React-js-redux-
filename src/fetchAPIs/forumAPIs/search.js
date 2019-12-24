export default function search(data) {
    return new Promise((resolve, reject) => {

        const url = `http://localhost:3001/forumPosts?uploadBy=admin&q=${data}`
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

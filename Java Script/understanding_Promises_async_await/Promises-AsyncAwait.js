function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin") resolve("token_123");
            else reject("Invalid credentials");
        }, 1000);
    });
}

function getProfile(token) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 7, name: "Pratham" });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Post 1", "Post 2", "Post 3"]);
        }, 1000);
    });
}

//Promise chaining
login("admin", "1234")
    .then(token => getProfile(token))
    .then(profile => getPosts(profile.id))
    .then(posts => {
        console.log(posts);
    })
    .catch(err => {
        console.error("Error:", err);
    });

//best readability using async await:

async function loadUserData() {
    try {
        const token = await login("admin", "1234");
        const profile = await getProfile(token);
        const posts = await getPosts(profile.id);

        console.log(posts);
    } catch (err) {
        console.error("Error:", err);
    }
}

loadUserData();



//parallel fetching api s:

const [users, posts] = await Promise.all([
    fetch("/users").then(r => r.json()),
    fetch("/posts").then(r => r.json())
]);

console.log(users, posts);

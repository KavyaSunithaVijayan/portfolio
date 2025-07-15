fetch("https://jsonplaceholder.typicode.com/users") // sample API
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        setUsers(data);
        setLoading(false);
    })
    .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
    });
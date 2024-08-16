async function getUserEvents(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}/events`)
    const events = await response.json()
    return events.slice(0,10)
}

export { getUserEvents }

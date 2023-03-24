const user = {
    name: "David",
    surname: "Robert",
    job: "Web Developer",
    age: 33,
    hobbies: ["Coding", "blabla", "blablab 2"],
}

const Profil = () => {
    return (
        <article>
            <h2>{user.name} {user.surname}</h2>
            <p>Métier : {user.job}</p>
            <p>Age : {user.age}</p>
            <p>
                 Hobbies : {user.hobbies.map((el) => {
                    return(
                        <span>{el} </span>
                    )
                })}
            </p>
        </article>
    )
}

export default Profil
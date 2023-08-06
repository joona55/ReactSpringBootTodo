const person = {
    name: 'joona',
    address: {
        line1: 'Bundang',
        city: 'Seongnam',
        country: 'Korea'
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfiles: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfiles()}</div>
        </>
    )
}
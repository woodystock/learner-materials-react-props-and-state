function DogCard({name, photo, alt, species, favFoods, birthYear}) {

    return (
        <div className="card card--alt">
            <h3 className="card__text card__header">{name}</h3>
            <img className="card__image" src={photo} alt={alt}></img>
            <p className="card__text card__text--alt">Species: {species}</p>
            <p className="card__text card__text--alt">Favourite Food(s): {favFoods.join(", ")}</p>
            <p className="card__text card__text--alt">Birth Year: {birthYear}</p>
        </div>
    )
}

export default DogCard;
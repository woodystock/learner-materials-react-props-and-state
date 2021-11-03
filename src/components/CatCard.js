function CatCard(props) {

    console.log("CatCard to App, come in App? Do you read me?", props)
    
    return (
        <div className="card">
            <h3 className="card__text card__header">{props.props.name}</h3>
            <img className="card__image" src={props.props.photo} alt={props.props.alt}></img>
            <p className="card__text">Species: {props.props.species}</p>
            <p className="card__text">Favourite Food(s): {props.props.favFoods}</p>
            <p className="card__text">Birth Year: {props.props.birthYear}</p>
        </div>
    )
}

export default CatCard
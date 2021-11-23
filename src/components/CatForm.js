function CatForm({onSubmit, onReset}) {

    const [formData, setFormData] = useState();


    return (
        <div class="card__form">
            <form onSubmit={onSubmit}>
                <h2 class="card__text card__header">Concat-a-cat</h2>

                <label class="card__text" for="cat_name">Name:</label><br/>
                <input id="cat_name" class="card__text card__input" type="text" /><br/>

                <label class="card__text" for="species">Species:</label><br/>
                <input id="species" class="card__text card__input" type="text" /><br/>

                <label class="card__text" for="fav_foods">Favourite Foods:</label><br/>
                <input id="fav_foods" class="card__text card__input" type="text" /><br/>

                <label class="card__text" for="birth_year">Birth Year:</label><br/>
                <input id="birth_year" class="card__text card__input" type="text" /><br/>

                <label class="card__text" for="photo">Image URL:</label><br/>
                <input id="photo" class="card__text card__input" type="text" /><br/>

                <img class="card__image" src="" /><br/>

                <button id="submit" class="card__button" type="submit">Concat</button>
            </form>
        </div>
    )

    
}

export default CatForm;
import {useState} from 'react';

function CatForm({formData, onChange, onSubmit}) {


    return (
        <div class="card__form">
            <form onSubmit={onSubmit}>
                <h2 class="card__text card__header">Concat-a-cat</h2>

                <label class="card__text" for="cat_name">Name:</label><br/>
                <input id="cat_name" class="card__text card__input" type="text" value={formData.cat_name} onChange={onChange} /><br/>

                <label class="card__text" for="species">Species:</label><br/>
                <input id="species" class="card__text card__input" type="text" value={formData.species} onChange={onChange} /><br/>

                <label class="card__text" for="birth_year">Birth Year:</label><br/>
                <input id="birth_year" class="card__text card__input" type="text" value={formData.birth_year} onChange={onChange} /><br/>

                <label class="card__text" for="fav_foods">Favourite Foods:</label><br/>
                <input id="fav_foods" class="card__text card__input" type="text" value={formData.fav_foods} onChange={onChange} /><br/>

                <label class="card__text" for="photo">Image URL:</label><br/>
                <input id="photo" class="card__text card__input" type="text" value={formData.photo} onChange={onChange} /><br/>

                <img class="card__image" src={formData.photo} /><br />

                <label class="card__text" for="alt">Alt:</label><br/>
                <input id="alt" class="card__text card__input" type="text" value={formData.alt} onChange={onChange} /><br/>

                <button id="submit" class="card__button" type="submit">Concat</button>
            </form>
        </div>
    )

    
}

export default CatForm;
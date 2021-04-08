import editIcon from "../assets/img/edit-icon.png";
import deleteicon from "../assets/img/delete-icon.png";
import starsolid from "../assets/img/star-solid.png";

export default function MusicCard({nome, genero, lancamento}){
    return (
        <div class="music-box">
                <div class="img-music"></div>
                <div class="music-data">
                    <div class="icons">
                        <img src={editIcon} alt="Icone editar" class="edit"/>
                        <img src={deleteicon} alt="Icone deletar" class="delete"/>
                        <img src={starsolid} alt="Icone de estrela" class="stars"/>
                    </div>
                    <div class="name">
                        <label> Nome:
                            <input class="input-music" type="text" value={nome}/>
                        </label>
                    </div>
                    <div class="genre">
                        <label> Genêro:
                            <input class="input-music" type="text" value={genero}/>
                        </label>
                    </div>
                    <div class="release">
                        <label> Lançamento:
                            <input class="input-music" type="text" value={lancamento}/>
                        </label>
                    </div>
                </div>
            </div>
    )
};
import Button from "../components/Button";
import MusicCard from "../components/MusicCard";


export default function Music() {
    return <>
        <div class="container">
            <div class="filter">
            <Button classe="btn-green right">Adicionar</Button>
            </div>
        </div>
        
        <div class="container">
            <div class="music-boxes">

                <MusicCard nome="Desgraça" genero="Trap" lancamento="2020" />
                <MusicCard nome="Gatinha comunista" genero="Rock" lancamento="2015" />
                <MusicCard nome="Paradise" genero="Pop" lancamento="2019" />
                <MusicCard nome="PhoneSex" genero="Trap" lancamento="Trap" />
                <MusicCard nome="Without Me" genero="Pop" lancamento="2018" />
                <MusicCard nome="Coringa" genero="Pop" lancamento="2021" />
                <MusicCard nome="Green Light" genero="Pop" lancamento="2017" />
                <MusicCard nome="Asphyxia" genero="Pop Japônes" lancamento="2018" />
            </div>

        </div>
    </>
}
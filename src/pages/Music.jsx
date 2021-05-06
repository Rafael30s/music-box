import { useEffect, useState } from "react";
import Button from "../components/Button";
import MusicCard from "../components/MusicCard";
import api from "../services/api";

export default function Music() {
    const [listaMusica, addMusicaNaLista] = useState([]);
    useEffect(() => {
        async function getMusics() {
            const resposta = await api.get("");

            addMusicaNaLista("RESPOSTA", resposta.data);
        }
        // .then((res)=>{
        // console.log("BOOTCAMP");
        // console.log("RESPOSTA", res.data);
        // })
        getMusics();
    })


    return <>
        <div class="container">
            <div class="filter">
                <Button classe="btn-green right">Adicionar</Button>
            </div>
        </div>

        <div class="container">
            <div class="music-boxes">

                {listaMusica.map((musica) => {
                    <MusicCard
                        nome={musica.nome}
                        genero={musica.genero}
                        lancamento={musica.genero} />
                })}


            </div>

        </div>
    </>
}
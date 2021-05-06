import Button from "../components/Button";
import indexImg from "../assets/img/index-img.png";

export default function Home() {
    return <>
    
        <div class="container index">
            <div class="index-content">
                <div class="box-text-index">
                    <div class="info-index">
                        <h1>Faça parte do nosso dicionário de música </h1>
                        <h3>Contribua e fique por dentro das novidades  </h3>
                    </div>
                    <div class="img-index"></div>
                    <Button classe="btn-green">Conhecer agora</Button>

                </div>
                <img src={indexImg} alt="" class="index-img"/>
       
          </div>
        </div>
    </>
}
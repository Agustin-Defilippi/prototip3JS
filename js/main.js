const viajes = [
    {nombre:"Salta la linda",
    destino:"salta",
    duracion:"5 dias",
    boleto:"ida y vuelta",
    hospedaje:"Andina Hotel",
    precio:82500,
    categoria:"oferta",
    zona:"norte",
    imagen:"https://i.ytimg.com/vi/ulDUoyVld9E/maxresdefault.jpg",
    imagen2:"https://a.travel-assets.com/findyours-php/viewfinder/images/res40/80000/80282-Salta.jpg",
    excursiones: " City Tour en la ciudad de Salta visitando el casco histórico, monumento a Güemes y feria artesanal,Peña de Balderrama, Quebrada de Cafayate, Cachi, San Antonio de los Cobres, Quebrada de Humahuaca y Salinas Grandes",
    coordinador: "Luciano Diaz",
    salida: "17 de agosto",
    slogan : "Salta la ciudad de tus amores con Defilippi Tourlines.",
    },

    {nombre:"Formosa",
    destino:"formosa",
    duracion:"5 dias",
    boleto:"ida y vuelta",
    hospedaje:"Solar del lago cabañas",
    precio:68900,
    categoria:"oferta",
    zona:"norte",
    imagen:"https://agenfor.com.ar/wp-content/uploads/2019/12/Portada-1.png",
    imagen2:"https://convivimos.naranja.com/wp-content/uploads/Formosa_portada.jpg",
    excursiones: "<br><b>Tour en bicicleta por la laguna Oca</b>: recorreran en bicicleta los bellos paisajes de la laguna Oca, un meandro del río Paraguay declarado Reserva de la Biosfera. ¡Deporte, turismo y naturaleza unidos! <br><b>Avistamiento de aves en la laguna Oca</b>: observaremos una gran cantidad de especies endémicas como el tataupá o el yerutí.",
    coordinador: "Marcelo martin",
    salida: "19 de agosto",
    slogan : "No te pierdas de la diversidad cultural y geográfica de Formosa.",
    },

    {nombre:"Misiones, Cataratas del Iguazu",
    destino:"misiones",
    duracion:"7 dias",
    boleto:"ida y vuelta",
    hospedaje:"El salto del tigre",
    precio:112700,
    categoria:"alta",
    zona:"norte",
    imagen:"https://cdn.getyourguide.com/img/location/56125e97639e0.jpeg/70.jpg",
    imagen2:"https://bomtravel.com/wp-content/uploads/2022/05/5-45.jpg",
    excursiones: "<br><b>Excursiones Incluidas</b>: Ruinas de San Ignacio · Minas de Wanda · Cataratas Lado Argentino · Cataratas Lado Brasilero (no incluye entradas )<br><b>Opcional</b>: Ciudad del Este",
    coordinador: "Augusto Solis",
    salida: "30 junio",
    slogan : "No te pierdas de la diversidad cultural y geográfica de Misiones.",
    },
    
    {nombre:"San Luis",
    destino:"san luis",
    duracion:"3 dias",
    boleto:"ida y vuelta",
    hospedaje:"La chaqueñita cabañas",
    precio:52000,
    categoria:"oferta",
    zona:"centro",
    imagen:"https://upload.wikimedia.org/wikipedia/commons/4/42/Atardecer_con_el_Cerro_Negro.JPG",
    imagen2:"https://viapais.com.ar/resizer/oYWN8lPWR6uIWnbBuIhpzKhOZAc=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/CQ4BP34YT5E6XF3BML7MEC5544.jpg",
    excursiones: "<br><b>visitarás la mina de oro de La Carolina</b>, que durante décadas ha suscitado numerosas leyendas relacionadas con este preciado metal<br><b>City Tour:</b> recorrido por toda la ciudad y sus alrededores, haciendo paradase en el cerro Villa de Merlo.",
    coordinador: "Julieta Nievas",
    salida: "10 de marzo",
    slogan : "No te pierdas de la diversidad cultural y geográfica de San Luis.",
    },

    {nombre:"Buenos Aires",
    destino:"buenos aires",
    duracion:"3 dias",
    boleto:"ida y vuelta",
    hospedaje:"Hotel Monaco",
    precio:39500,
    categoria:"baja",
    zona:"centro",
    imagen:"https://blogskystorage.s3.amazonaws.com/2021/07/skyairline_skyairline_image_182.jpeg",
    imagen2:"https://www.cronista.com/files/image/352/352344/61251b22add52.jpg",
    excursiones: "<br><b>City tour por capital</b>: visitando palermo, caballito, la boca, nuñez.<br>Visitarás a lo mas grandes museos de la ciudad, los monumentos mas históricos de la misma y la plaza 9 de julio",
    coordinador: "Irina Bergell",
    salida: "10 de marzo",
    slogan : "No te pierdas de la diversidad cultural y geográfica de Buenos aires.",
    },

    {nombre:"San Juan",
    destino:"san juan",
    duracion:"7 dias",
    boleto:"ida y vuelta",
    hospedaje:"Temu Hoteles",
    precio:131700,
    categoria:"alta",
    zona:"centro",
    imagen:"https://i.ytimg.com/vi/x59_AVACZWo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGEcgYShlMA8=&rs=AOn4CLDvcOS2i3i3d1itVFnIebOFkjxM_Q",
    imagen2:"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/YWIJ5IZ4LBFS7CK4HSU4GDAWLE.jpg",
    excursiones: "<br><b>City tour por San juan</b>:  recorriendo Auditorio, Teatro y Casa Natal de Sarmiento (No incluye entradas). Visita al Santuario de la Difunta Correa de Regreso. <br><b>Opcionales</b>: Dique punta negra, dique de Ullum y bodega. Calingasta Barreal con Pampa de Leoncito. Iglesia, Jachal y Dique Punta del Viento",
    coordinador: "Agustin Defilippi",
    salida: "15 de marzo",
    slogan : "No te pierdas de la diversidad cultural y geográfica de San Juan.",
    },

    {nombre:"San Carlos de Bariloche",
    destino:"bariloche",
    duracion:"7 dias",
    boleto:"ida y vuelta",
    hospedaje:"Cabañas el Arriero",
    precio:157500,
    categoria:"alta",
    zona:"sur",
    imagen:"https://bariloche.org/wp-content/uploads/2019/04/nevada-30-de-mayo-2019-bariloche-org.jpg",
    imagen2:"https://www.barilochense.com/suplementos/informacion-turistica/fotos/44099.jpg",
    excursiones: "<br><b>City tour</b>: Circuito chico dentro de la ciudad de Bariloche (Es un paseo para disfrutar y saborear. La belleza del paisaje está presente en todo el recorrido.),<br><b>CERRO TRONADOR Y VENTISQUERO NEGRO – CON CASCADA LOS ALERCES</b>(incluido)",
    coordinador: "Esteban Mansur",
    salida: "4 de abril",
    slogan : "No te pierdas de la diversidad cultural y geográfica de San Carlos de Bariloche.",
    },

    {nombre:"Calafate",
    destino:"calafate",
    duracion:"5 dias",
    boleto:"ida y vuelta",
    hospedaje:"Suites la Ferrere",
    precio:185300,
    categoria:"oferta",
    zona:"sur",
    imagen:"https://i.ytimg.com/vi/54DgAZHTAEI/maxresdefault.jpg",
    imagen2:"https://www.serargentino.com/public/images/2019/12/Calafate-773x458.jpeg",
    excursiones: "<br><b>City tour completo</b>: Disfrutando de los hermosos paisaje, lagos y bosques que te ofrece la ciudad y sus alrededores.<br><b>Travesia en Barco</b>: en esta excursión desde El Calafate contemplaremos las imponentes montañas de hielo del Parque Nacional de los Glaciares. Además, completaremos la experiencia dando un paseo en barco.<br><b>Glaciar Perito Moreno</b>: en esta excursión  visitaremos el glaciar más famoso del mundo. Caminaremos entre la naturaleza de la Patagonia argentina y podrás cruzar las pasarelas de observación.",
    coordinador: "Alicia Espinoza",
    salida: "4 de abril",
    slogan : "No te pierdas de la diversidad cultural y geográfica de Santa Cruz (CALAFATE).",
    }
];

const guardadoPaquetesViajesLs = () =>{
    localStorage.setItem("viajess",JSON.stringify(viajes));
}

guardadoPaquetesViajesLs();


const paqueteViajeLs = () =>{
    return JSON.parse(localStorage.getItem("viajess"));
}

const paqueteViajes = paqueteViajeLs();



const renderProductosOfertas = () =>{
    
    const ofertas = paqueteViajes.filter(item => item.categoria === "oferta");
    let salida = ""; 
    ofertas.forEach(item => {
    salida+=
    `<div class= "mb-3 d-flex justify-content-center">
        <div class="card bg-card css-card border-dark" style="width: 18rem;">
            <img src="${item.imagen}" class=" alt="${item.destino}">
            <div class="card-body ">
            <h5 class="card-title text-center"><p>${item.nombre}</p></h5>
            <p class="card-text text-center">Tu paquete de viaje soñado, ${item.nombre} 2023.\n Es posbile con DEFILIPPI TOURLINES.</p>
            <div class= "d-flex justify-content-center css-div">
            <a href="#" class="btn bg-btn-render border-dark css-button text-light">Conoce más</a>
            </div>
            
            </div>
        </div>
    </div>`
   });
   document.getElementById("productos").innerHTML = salida;
}

renderProductosOfertas();



const formularioDestino = document.getElementById("fomularioDestino");
const busquedaViaje = document.getElementById("busquedaViaje");
const select =  document.getElementById("destinoFiltrado");

const filtrado = () => {
    let salida = "";
    let busquedaInput = busquedaViaje.value;
    const filtradoZona = paqueteViajes.filter((zonaViajes) => zonaViajes.zona == busquedaInput.toLowerCase());
    filtradoZona.forEach((zonaViajes) => {
        salida += `<option value="${zonaViajes.destino}">${zonaViajes.destino}</option>\n`;
    });
    select.innerHTML = salida;
}

busquedaViaje.addEventListener("change", () => {
    filtrado();
});


const errorCamposFormulario = () =>{

    const errorEmail = document.getElementById("errorEmail");
    if((busquedaViaje.value === "") ){
        errorEmail.innerHTML = "Error! complete el campo (zona) antes de avanzar en la busqueda"
        errorEmail.className = "text-danger mt-1";
        return false;
    }else if((busquedaViaje.value.toLowerCase() !=="norte") && (busquedaViaje.value.toLowerCase() !=="centro") && (busquedaViaje.value.toLowerCase() !== "sur")){

        errorEmail.innerHTML = "Error! ingrese (norte, centro o sur), correcta para avanzar con la busqueda."
        errorEmail.className = "text-danger mt-1";
        return false;

    }else{
        errorEmail.innerHTML = "";
        return true;
    }
       
}



formularioDestino.addEventListener("submit",(e) =>{

    e.preventDefault();
    let seguirPrograma=  errorCamposFormulario();
    if(seguirPrograma == true){

        const formularioInput = paqueteViajes.filter(zonaViajes => zonaViajes.zona == busquedaViaje.value.toLowerCase());
        const fomularioSelect = formularioInput.find(destino => destino.destino == select.value);

        localStorage.setItem("paqueteViajeBusqueda", JSON.stringify(fomularioSelect));
    
        setTimeout(() => location.href = "pages/paqueteViaje.html", 1500);
    }else{
        return false
    }
    
    
});




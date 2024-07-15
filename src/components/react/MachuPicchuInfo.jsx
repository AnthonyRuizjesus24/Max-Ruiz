// MachuPicchuInfo.jsx

import React from 'react';

const MachuPicchuInfo = () => {
  return (
    <>
      <h2>MACHU PICCHU MARAVILLA DEL MUNDO</h2>
      <p>
        Machu Picchu es una antigua ciudad inca ubicada en lo alto de los Andes peruanos.
        Fue construida en el siglo XV y es conocida por su impresionante arquitectura
        y paisajes espectaculares.
      </p>

      <h3>Cómo llegar a Machu Picchu</h3>
      <p>
        Hay varias maneras de llegar a Machu Picchu:
        <ul>
          <li>
            <strong>Tren:</strong> La forma más popular es tomar un tren desde Cusco o el Valle Sagrado hasta Aguas Calientes, el pueblo más cercano a Machu Picchu.
            <img src="/tren.jpg" alt="Tren a Machu Picchu" className="train-image"/>
          </li>
          <li>
            <strong>Caminata:</strong> Para los más aventureros, hay varias rutas de senderismo, siendo la más famosa el Camino Inca, que dura entre 2 a 5 días.
            <img src="caminando.jpg" alt="Caminando a Machu Picchu" className="caminando-image"/>
          </li>
          <li>
            <strong>Bus:</strong> Desde Aguas Calientes, puedes tomar un bus que te llevará hasta la entrada de Machu Picchu.
            <img src="/bus.jpg" alt="Bus a Machu Picchu" className="bus-image"/>
          </li>
        </ul>
      </p>

      <h3>Qué se puede ver en Machu Picchu</h3>
      <p>
        Algunos de los principales atractivos en Machu Picchu incluyen:
        <ul>
          <li>
            <strong>El Templo del Sol:</strong> Un importante templo religioso con una impresionante vista del valle.
            <img src="templo_del_sol.jpg" alt="Templo del Sol" className="templo-image"/>
          </li>
          <li>
            <strong>La Plaza Sagrada:</strong> Un área central donde se realizaban ceremonias y reuniones.
            <img src="plaza-sagrada.jpg" alt="Plaza Sagrada" className="plaza-sagrada-image"/>
          </li>
          <li>
            <strong>La Roca Sagrada:</strong> Una piedra ceremonial que se cree tenía importancia espiritual.
            <img src="roca-sagrada.jpg" alt="Roca Sagrada" className="roca-sagrada-image"/>
          </li>
          <li>
            <strong>El Intihuatana:</strong> Un reloj solar que se utilizaba para marcar los solsticios y equinoccios.
            <img src="intihuatana.jpg" alt="Intihuatana" className="intihuatana"/>
          </li>
        </ul>
      </p>

      <h3>¿Es recomendable visitar Machu Picchu?</h3>
      <p>
        Sí, visitar Machu Picchu es altamente recomendable por varias razones:
        <ul>
          <li>
            Es una de las nuevas siete maravillas del mundo y un sitio del patrimonio mundial de la UNESCO.
          </li>
          <li>
            Ofrece una experiencia única de inmersión en la historia y cultura inca.
          </li>
          <li>
            Los paisajes y la arquitectura son simplemente espectaculares, brindando oportunidades para la fotografía y la exploración.
          </li>
          <li>
            Es una experiencia inolvidable para los amantes de la historia, la arqueología y la naturaleza.
          </li>
        </ul>
      </p>
    </>
  );
}

export default MachuPicchuInfo;

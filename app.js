
    let contenedor = {
      datos: [
        { nombre: "RTX 4090", 
        arquitectura: "NVIDIA Ada Lovelace",
        memory_type: "GDDR6X",
        descripcion: "La tarjeta más potente de la serie RTX 40, ideal para 4K y IA.",
        imagen : "https://images-cdn.ubuy.com.ar/652a823904abac2439285874-nvidia-geforce-rtx-4090-founders-edition.jpg" 
        },

        { nombre: "RTX 4080 SUPER", 
        arquitectura: "NVIDIA Ada Lovelace",
        memory_type: "GDDR6X", 
        descripcion: "La tarjeta más potente de la serie RTX 40, ideal para 4K y IA.",
        imagen: "https://tecnogaming.com/wp-content/uploads/2024/01/geforce-rtx-4080-super-gpu-image-1280x960.jpg"
      
        },

        {nombre: "RTX 3080",
          arquitectura: "Ampere",
          memory_type: "GDDR6X",
          descripcion: "Alto rendimiento para gaming en 1440p y 4K.",
          imagen: "https://mla-s1-p.mlstatic.com/711595-MLA54489394797_032023-F.jpg"
        },

        {nombre: "GTX 1660 Super",
          arquitectura: "Turing (sin RT)",
          memory_type: "GDDR6",
          descripcion: "Buena opción económica para 1080p sin Ray Tracing.",
          imagen: "https://http2.mlstatic.com/D_NQ_NP_702215-MLA54494722033_032023-O.webp"
        }

      ]
    };
    
    


    const contenedorDiv = document.getElementById("contenedor");

    contenedor.datos.map(gpu => {
      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `
        <img src="${gpu.imagen}" alt="${gpu.nombre}" class="gpu-img">
        <h3>${gpu.nombre}</h3>
        <p><strong>Arquitectura:</strong> ${gpu.arquitectura}</p>
        <p><strong>Memory Type:</strong> ${gpu.memory_type}</p>
        <p><strong>Descripcion:</strong> ${gpu.descripcion}</p>
      `;
      contenedorDiv.appendChild(div);
    });

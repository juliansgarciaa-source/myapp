function mostrarContenido(estado) {

    const datos = {
        despecho: {
            titulo: "💔 Modo Despecho Activado",
            frase: "A veces perder es ganar libertad.",
            cancion: "🎵 Canción sugerida: Yeison Jiménez - Aventurero",
            hashtags: "#despecho #musicapopular #colombia #yeisonjimenez"
        },
        enamorado: {
            titulo: "❤️ Modo Enamorado",
            frase: "El amor verdadero se siente en el alma.",
            cancion: "🎵 Canción sugerida: Luis Alfonso - Mi Palabra Contra Ellos",
            hashtags: "#amor #romantico #musicacolombiana #luisalfonzo"
        },
        empoderado: {
            titulo: "😎 Modo Empoderado",
            frase: "No compitas, destaca.",
            cancion: "🎵 Canción sugerida: Jesi Uribe - Dulce Pecado",
            hashtags: "#actitud #seguridad #jesiuribe #viral"
        },
        motivado: {
            titulo: "🔥 Modo Motivado",
            frase: "Hoy puede ser el día que cambie todo.",
            cancion: "🎵 Canción sugerida: Música popular trending",
            hashtags: "#motivacion #canto #musicapopular #tiktokcolombia"
        }
    };

    document.getElementById("titulo").innerText = datos[estado].titulo;
    document.getElementById("frase").innerText = datos[estado].frase;
    document.getElementById("cancion").innerText = datos[estado].cancion;
    document.getElementById("hashtags").innerText = datos[estado].hashtags;
}

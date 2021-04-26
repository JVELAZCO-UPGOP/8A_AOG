module.exports = {
  mascotas: [
    { tipo: "Perro", nombre: "FURI", dueno: "ALE" },
    { tipo: "Gato", nombre: "LAIS", dueno: "JOSE" },
  ],
  veterinarias: [
    { nombre: "VETE", apellido: "Gálvez", documento: "0101010101" },
    { nombre: "RINA", apellido: "Ochoa", documento: "0202020202" },
  ],
  duenos: [
    { nombre: "Fernanda", apellido: "Mar", documento: "030303030" },
    { nombre: "Dani", apellido: "Hey", documento: "040404040" },
  ],
  consultas: [
    {
      mascota: 0,
      veterinaria: 0,
      fechaCreacion: new Date(),
      fechaEdicion: new Date(),
      historia: "",
      diagnostico: "diagnóstico",
    },
  ],
};

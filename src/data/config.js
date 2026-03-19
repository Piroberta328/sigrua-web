export var API = "http://72.62.82.207:3001/api";

export var PH = {
  corn: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=400&fit=crop&q=80",
  green: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=400&fit=crop&q=80",
  field: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=400&fit=crop&q=80",
  pump: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=400&fit=crop&q=80",
  hero: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=900&h=600&fit=crop&q=80"
};

export var STAGES = ["Germinacion", "Crecimiento", "Floracion", "Fructificacion", "Cosecha"];

export var CROPS = [
  { name: "Tomate", sub: "Riego Alto", icon: "tomato" },
  { name: "Lechuga", sub: "Ciclo Corto", icon: "lettuce" },
  { name: "Maiz", sub: "Pleno Sol", icon: "cornCrop" },
  { name: "Fresa", sub: "Humedad", icon: "strawberry" },
  { name: "Pimiento", sub: "Termico", icon: "pepper" },
  { name: "Zanahoria", sub: "Raiz", icon: "carrot" }
];

export var CROP_PARAMS = {
  Maiz: { tempMin: 18, tempMax: 32, humMin: 50, humMax: 70, phMin: 5.8, phMax: 7.0, riego: "Moderado", ciclo: 120 },
  Tomate: { tempMin: 20, tempMax: 30, humMin: 60, humMax: 80, phMin: 6.0, phMax: 6.8, riego: "Alto", ciclo: 90 },
  General: { tempMin: 15, tempMax: 35, humMin: 40, humMax: 80, phMin: 5.5, phMax: 7.5, riego: "Variable", ciclo: 0 }
};

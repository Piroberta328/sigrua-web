import { PH } from "./config";

export var SYSTEMS = [
  { _id: "s0", name: "Sector Norte", sub: "Maiz", status: "active", photo: PH.corn, crop: "Maiz", temp: 24, hum: 65, ph: 6.5, updated: "Hace 2 min", waterToday: 120, waterWeek: 840, harvestPct: 85, harvestEst: 1250, harvestGoal: 1500, harvestDays: 15, stage: 3, gridCols: 5, plantCount: 20, diasActivo: 45 },
  { _id: "s1", name: "Invernadero 2", sub: "Tomate", status: "alert", photo: PH.green, crop: "Tomate", temp: 28, hum: 72, ph: 6.2, updated: "Hace 5 min", waterToday: 95, waterWeek: 680, harvestPct: 60, harvestEst: 800, harvestGoal: 1200, harvestDays: 30, stage: 2, gridCols: 4, plantCount: 24, diasActivo: 120 },
  { _id: "s2", name: "Estacion Meteo", sub: "General", status: "active", photo: PH.field, crop: "General", temp: 22, hum: 58, ph: 6.8, updated: "Hace 1 min", waterToday: 0, waterWeek: 0, harvestPct: 0, harvestEst: 0, harvestGoal: 0, harvestDays: 0, stage: 0, gridCols: 0, plantCount: 0, diasActivo: 200 },
  { _id: "s3", name: "Bomba Agua", sub: "Sistema", status: "offline", photo: PH.pump, crop: "General", temp: 0, hum: 0, ph: 0, updated: "Sin datos", waterToday: 0, waterWeek: 0, harvestPct: 0, harvestEst: 0, harvestGoal: 0, harvestDays: 0, stage: 0, gridCols: 0, plantCount: 0, diasActivo: 0 }
];

export var WEATHER = { temp: 26, feelsLike: 28, hum: 68, wind: 12, rain: 15, desc: "Parcialmente nublado" };

export var ALERTS = [
  { _id: "a1", title: "Humedad baja", description: "Sector Norte - Activar riego.", type: "warn", time: "Hace 5 min", read: false, system: "Sector Norte" },
  { _id: "a3", title: "Valvula abierta", description: "Invernadero 2 - 45 min.", type: "warn", time: "Hace 30 min", read: false, system: "Invernadero 2" },
  { _id: "a2", title: "pH optimo", description: "pH 6.5 ideal.", type: "ok", time: "Hace 1 hora", read: true, system: "Sector Norte" }
];

export var ALERTS_BY_SYS = {
  0: [{ _id: "sa1", title: "Humedad baja", description: "42% - Activar riego.", type: "warn" }, { _id: "sa2", title: "pH optimo", description: "pH 6.5 ideal.", type: "ok" }],
  1: [{ _id: "sa3", title: "Valvula abierta", description: "45 min.", type: "warn" }],
  2: [], 3: []
};

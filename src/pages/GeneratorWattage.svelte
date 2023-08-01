<script>
const appliances = [
  {
    id: "ceiling-fan",
    alt: "Ceiling Fan",
    wattage: 60,
    surgeWattage: 70
  },
  {
    id: "central-ac-10000-btu",
    alt: "Central AC (10,000 BTU)",
    wattage: 1500,
    surgeWattage: 4500
  },
  {
    id: "central-ac-24000-btu",
    alt: "Central AC (24,000 BTU)",
    wattage: 3800,
    surgeWattage: 11400
  },
  {
    id: "central-ac-40000-btu",
    alt: "Central AC (40,000 BTU)",
    wattage: 6000,
    surgeWattage: 6700
  },
  {
    id: "dehumidifier",
    alt: "Dehumidifier",
    wattage: 240,
    surgeWattage: 0
  },
  {
    id: "electric-heater-fan",
    alt: "Electric Heater (Fan)",
    wattage: 2000,
    surgeWattage: 1000
  },
  {
    id: "electric-thermal-radiator",
    alt: "Electric Thermal Radiator",
    wattage: 500,
    surgeWattage: 0
  },
  {
    id: "electric-water-heater",
    alt: "Electric Water Heater",
    wattage: 4000,
    surgeWattage: 0
  },
  {
    id: "electric-water-heater-immersion",
    alt: "Electric Water Heater (Immersion)",
    wattage: 3000,
    surgeWattage: 0
  },
  {
    id: "electric-water-heater-tankless",
    alt: "Electric Water Heater (Tankless)",
    wattage: 6600,
    surgeWattage: 2200
  },
  {
    id: "evaporative-ac",
    alt: "Evaporative AC",
    wattage: 2600,
    surgeWattage: 0
  },
  {
    id: "furnace-fan-blower-1-2hp",
    alt: "Furnace Fan Blower (1/2 HP)",
    wattage: 800,
    surgeWattage: 2350
  },
  {
    id: "furnace-fan-blower-1-3hp",
    alt: "Furnace Fan Blower (1/3 HP)",
    wattage: 700,
    surgeWattage: 1400
  },
  {
    id: "garage-door-opener-1-2hp",
    alt: "Garage Door Opener (1/2 HP)",
    wattage: 875,
    surgeWattage: 2350
  },
  {
    id: "heat-pump",
    alt: "Heat Pump",
    wattage: 4700,
    surgeWattage: 4500
  },
  {
    id: "humidifier-13gal",
    alt: "Humidifier (13 Gal.)",
    wattage: 175,
    surgeWattage: 0
  },
  {
    id: "light-bulb-common",
    alt: "Light Bulb (Common)",
    wattage: 75,
    surgeWattage: 0
  },
  {
    id: "light-bulb-led",
    alt: "Light Bulb (LED)",
    wattage: 9,
    surgeWattage: 0
  },
  {
    id: "night-light",
    alt: "Night Light",
    wattage: 1,
    surgeWattage: 0
  },
  {
    id: "oversink-water-heater-hand-wash",
    alt: "Oversink Water Heater (Hand Wash)",
    wattage: 3000,
    surgeWattage: 0
  },
  {
    id: "space-heater",
    alt: "Space Heater",
    wattage: 1800,
    surgeWattage: 0
  },
  {
    id: "sump-pump-1-2hp",
    alt: "Sump Pump (1/2 HP)",
    wattage: 1050,
    surgeWattage: 2150
  },
  {
    id: "sump-pump-1-3hp",
    alt: "Sump Pump (1/3 HP)",
    wattage: 800,
    surgeWattage: 1300
  },
  {
    id: "tube-light-1500mm",
    alt: "Tube Light (1500mm)",
    wattage: 22,
    surgeWattage: 0
  },
  {
    id: "well-water-pump-1-2hp",
    alt: "Well Water Pump (1/2 HP)",
    wattage: 1000,
    surgeWattage: 2100
  },
  {
    id: "window-ac-10000-btu",
    alt: "Window AC (10,000 BTU)",
    wattage: 1200,
    surgeWattage: 3600
  },
  {
    id: "window-ac-12000-btu",
    alt: "Window AC (12,000 BTU)",
    wattage: 3250,
    surgeWattage: 9750
  },
  {
    id: "air-fryer",
    alt: "Air Fryer",
    wattage: 1500,
    surgeWattage: 0
  },
  {
    id: "coffee-maker",
    alt: "Coffee Maker",
    wattage: 1000,
    surgeWattage: 0
  },
  {
    id: "cooker-hood",
    alt: "Cooker Hood",
    wattage: 20,
    surgeWattage: 10
  },
  {
    id: "deep-freezer",
    alt: "Deep Freezer",
    wattage: 500,
    surgeWattage: 1500
  },
  {
    id: "dishwasher",
    alt: "Dishwasher",
    wattage: 1500,
    surgeWattage: 1500
  },
  {
    id: "electric-can-opener",
    alt: "Electric Can Opener",
    wattage: 170,
    surgeWattage: 0
  },
  {
    id: "electric-kettle",
    alt: "Electric Kettle",
    wattage: 1200,
    surgeWattage: 3000
  },
  {
    id: "electric-oven",
    alt: "Electric Oven",
    wattage: 2150,
    surgeWattage: 0
  },
  {
    id: "electric-stove-8-inch",
    alt: "Electric Stove (8\" Element)",
    wattage: 2100,
    surgeWattage: 0
  },
  {
    id: "espresso-coffee-machine",
    alt: "Espresso Coffee Machine",
    wattage: 1300,
    surgeWattage: 200
  },
  {
    id: "food-dehydrator",
    alt: "Food Dehydrator",
    wattage: 800,
    surgeWattage: 0
  },
  {
    id: "food-processor-blender",
    alt: "Food Processor/Blender",
    wattage: 400,
    surgeWattage: 0
  },
  {
    id: "fryer",
    alt: "Fryer",
    wattage: 1000,
    surgeWattage: 0
  },
  {
    id: "hot-water-dispenser",
    alt: "Hot Water Dispenser",
    wattage: 1200,
    surgeWattage: 100
  },
  {
    id: "induction-hob-per-hob",
    alt: "Induction Hob (Per Hob)",
    wattage: 1400,
    surgeWattage: 400
  },
  {
    id: "microwave",
    alt: "Microwave",
    wattage: 1000,
    surgeWattage: 0
  },
  {
    id: "modern-fridge-2001-2020",
    alt: "Modern Fridge (2001-2020)",
    wattage: 400,
    surgeWattage: 600
  },
  {
    id: "percolator",
    alt: "Percolator",
    wattage: 800,
    surgeWattage: 300
  },
  {
    id: "pressure-cooker",
    alt: "Pressure Cooker",
    wattage: 700,
    surgeWattage: 0
  },
  {
    id: "refrigerator-freezer",
    alt: "Refrigerator / Freezer",
    wattage: 700,
    surgeWattage: 2200
  },
  {
    id: "rice-cooker",
    alt: "Rice Cooker",
    wattage: 200,
    surgeWattage: 500
  },
  {
    id: "sandwich-maker",
    alt: "Sandwich Maker",
    wattage: 700,
    surgeWattage: 300
  },
  {
    id: "side-by-side-fridge",
    alt: "Side-by-Side Fridge",
    wattage: 800,
    surgeWattage: 1200
  },
  {
    id: "slow-cooker",
    alt: "Slow Cooker",
    wattage: 160,
    surgeWattage: 20
  },
  {
    id: "smart-fridge",
    alt: "Smart Fridge",
    wattage: 500,
    surgeWattage: 750
  },
  {
    id: "steriliser",
    alt: "Steriliser",
    wattage: 650,
    surgeWattage: 0
  },
  {
    id: "toaster",
    alt: "Toaster",
    wattage: 850,
    surgeWattage: 0
  },
  {
    id: "water-dispenser",
    alt: "Water Dispenser",
    wattage: 100,
    surgeWattage: 0
  },
  {
    id: "water-filter-cooler",
    alt: "Water Filter & Cooler",
    wattage: 70,
    surgeWattage: 30
  },
  {
    id: "wine-cooler-18-bottles",
    alt: "Wine Cooler (18 Bottles)",
    wattage: 83,
    surgeWattage: 0
  },
  {
    id: "bathroom-towel-heater",
    alt: "Bathroom Towel Heater",
    wattage: 60,
    surgeWattage: 90
  },
  {
    id: "clothes-dryer-electric",
    alt: "Clothes Dryer (Electric)",
    wattage: 5400,
    surgeWattage: 6750
  },
  {
    id: "clothes-dryer-gas",
    alt: "Clothes Dryer (Gas)",
    wattage: 700,
    surgeWattage: 1800
  },
  {
    id: "curling-iron",
    alt: "Curling Iron",
    wattage: 1500,
    surgeWattage: 0
  },
  {
    id: "electric-shaver",
    alt: "Electric Shaver",
    wattage: 15,
    surgeWattage: 20
  },
  {
    id: "electric-shaver",
    alt: "Electric Shaver",
    wattage: 15,
    surgeWattage: 5
  },
  {
    id: "extractor-fan",
    alt: "Extractor Fan",
    wattage: 12,
    surgeWattage: 0
  },
  {
    id: "hair-dryer",
    alt: "Hair Dryer",
    wattage: 1250,
    surgeWattage: 0
  },
  {
    id: "heated-bathroom-mirror",
    alt: "Heated Bathroom Mirror",
    wattage: 50,
    surgeWattage: 50
  },
  {
    id: "iron",
    alt: "Iron",
    wattage: 1200,
    surgeWattage: 0
  },
  {
    id: "power-shower",
    alt: "Power Shower",
    wattage: 7500,
    surgeWattage: 10500
  },
  {
    id: "steam-iron",
    alt: "Steam Iron",
    wattage: 2200,
    surgeWattage: 300
  },
  {
    id: "straightening-iron",
    alt: "Straightening Iron",
    wattage: 75,
    surgeWattage: 300
  },
  {
    id: "vacuum-cleaner",
    alt: "Vacuum Cleaner",
    wattage: 200,
    surgeWattage: 200
  },
  {
    id: "washing-machine",
    alt: "Washing Machine",
    wattage: 1150,
    surgeWattage: 2250
  },
  {
    id: "amazon-echo",
    alt: "Amazon Echo",
    wattage: 3,
    surgeWattage: 0
  },
  {
    id: "amazon-echo-show",
    alt: "Amazon Echo Show",
    wattage: 2,
    surgeWattage: 2
  },
  {
    id: "apple-tv",
    alt: "Apple TV",
    wattage: 3,
    surgeWattage: 3
  },
  {
    id: "av-receiver",
    alt: "AV Receiver",
    wattage: 450,
    surgeWattage: 0
  },
  {
    id: "computer-monitor",
    alt: "Computer Monitor",
    wattage: 25,
    surgeWattage: 5
  },
  {
    id: "desktop-computer",
    alt: "Desktop Computer",
    wattage: 100,
    surgeWattage: 350
  },
  {
    id: "guitar-amplifier",
    alt: "Guitar Amplifier",
    wattage: 20,
    surgeWattage: 10
  },
  {
    id: "home-internet-router",
    alt: "Home Internet Router",
    wattage: 5,
    surgeWattage: 15
  },
  {
    id: "home-phone",
    alt: "Home Phone",
    wattage: 3,
    surgeWattage: 5
  },
  {
    id: "home-sound-system",
    alt: "Home Sound System",
    wattage: 95,
    surgeWattage: 0
  },
  {
    id: "laptop",
    alt: "Laptop",
    wattage: 50,
    surgeWattage: 0
  },
  {
    id: "mi-box",
    alt: "Mi Box",
    wattage: 5,
    surgeWattage: 2
  },
  {
    id: "monitor",
    alt: "Monitor",
    wattage: 225,
    surgeWattage: 0
  },
  {
    id: "nintendo-switch-ac-adapter",
    alt: "Nintendo Switch AC Adapter",
    wattage: 7,
    surgeWattage: 33
  },
  {
    id: "playstation-4",
    alt: "Playstation 4",
    wattage: 85,
    surgeWattage: 5
  },
  {
    id: "set-top-box",
    alt: "Set Top Box",
    wattage: 27,
    surgeWattage: 3
  },
  {
    id: "stereo",
    alt: "Stereo",
    wattage: 450,
    surgeWattage: 0
  },
  {
    id: "television-22-led",
    alt: "Television (22\" LED)",
    wattage: 17,
    surgeWattage: 0
  },
  {
    id: "television-49-led",
    alt: "Television (49\" LED)",
    wattage: 85,
    surgeWattage: 0
  },
  {
    id: "television-82-led",
    alt: "Television (82\" LED)",
    wattage: 230,
    surgeWattage: 65
  },
  {
    id: "television-crt",
    alt: "Television (CRT)",
    wattage: 500,
    surgeWattage: 0
  },
  {
    id: "vcr-dvd-player",
    alt: "VCR / DVD Player",
    wattage: 100,
    surgeWattage: 0
  },
  {
    id: "video-game-system",
    alt: "Video Game System",
    wattage: 40,
    surgeWattage: 0
  },
  {
    id: "xbox-one",
    alt: "Xbox One",
    wattage: 50,
    surgeWattage: 60
  },
  {
    id: "2-way-radio-12a",
    alt: "2-Way Radio (12A)",
    wattage: 360,
    surgeWattage: 0
  },
  {
    id: "2-way-radio-23a",
    alt: "2-Way Radio (23A)",
    wattage: 840,
    surgeWattage: 0
  },
  {
    id: "2-way-radio-35a",
    alt: "2-Way Radio (35A)",
    wattage: 960,
    surgeWattage: 0
  },
  {
    id: "air-purifier",
    alt: "Air Purifier",
    wattage: 25,
    surgeWattage: 5
  },
  {
    id: "cell-phone-battery-charger",
    alt: "Cell Phone Battery Charger",
    wattage: 25,
    surgeWattage: 0
  },
  {
    id: "clock-radio",
    alt: "Clock Radio",
    wattage: 200,
    surgeWattage: 0
  },
  {
    id: "copy-machine",
    alt: "Copy Machine",
    wattage: 1600,
    surgeWattage: 0
  },
  {
    id: "dab-mains-radio",
    alt: "DAB Mains Radio",
    wattage: 5,
    surgeWattage: 4
  },
  {
    id: "electric-blanket",
    alt: "Electric Blanket",
    wattage: 200,
    surgeWattage: 0
  },
  {
    id: "electric-doorbell-transformer",
    alt: "Electric Doorbell Transformer",
    wattage: 2,
    surgeWattage: 0
  },
  {
    id: "electric-mower",
    alt: "Electric Mower",
    wattage: 1500,
    surgeWattage: 0
  },
  {
    id: "electric-trimmer",
    alt: "Electric Trimmer",
    wattage: 300,
    surgeWattage: 500
  },
  {
    id: "ev-home-charger",
    alt: "EV Home Charger",
    wattage: 1600,
    surgeWattage: 1800
  },
  {
    id: "fan-pedestal",
    alt: "Fan (Pedestal)",
    wattage: 50,
    surgeWattage: 10
  },
  {
    id: "fan-table",
    alt: "Fan (Table)",
    wattage: 10,
    surgeWattage: 15
  },
  {
    id: "fan-wall",
    alt: "Fan (Wall)",
    wattage: 45,
    surgeWattage: 15
  },
  {
    id: "fax",
    alt: "Fax",
    wattage: 60,
    surgeWattage: 80
  },
  {
    id: "garage-door-opener-1-2hp",
    alt: "Garage Door Opener (1/2 HP)",
    wattage: 875,
    surgeWattage: 2350
  },
  {
    id: "outdoor-light-string",
    alt: "Outdoor Light String",
    wattage: 250,
    surgeWattage: 0
  },
  {
    id: "paper-shredder",
    alt: "Paper Shredder",
    wattage: 200,
    surgeWattage: 220
  },
  {
    id: "printer-inkjet",
    alt: "Printer (Inkjet)",
    wattage: 20,
    surgeWattage: 10
  },
  {
    id: "printer-laser",
    alt: "Printer (Laser)",
    wattage: 600,
    surgeWattage: 200
  },
  {
    id: "projector",
    alt: "Projector",
    wattage: 220,
    surgeWattage: 270
  },
  {
    id: "scanner",
    alt: "Scanner",
    wattage: 10,
    surgeWattage: 18
  },
  {
    id: "security-system",
    alt: "Security System",
    wattage: 500,
    surgeWattage: 0
  },
  {
    id: "sewing-machine",
    alt: "Sewing Machine",
    wattage: 70,
    surgeWattage: 10
  },
  {
    id: "tablet-charger",
    alt: "Tablet Charger",
    wattage: 10,
    surgeWattage: 5
  },
  {
    id: "treadmill",
    alt: "Treadmill",
    wattage: 280,
    surgeWattage: 900
  },
  {
    id: "water-feature",
    alt: "Water Feature",
    wattage: 35,
    surgeWattage: 0
  }
];


let appliances_OLD = [
  {
    id: "laptop-charger",
    alt: "Laptop Charger",
    wattage: 45,
  },
  {
    id: "desktop-computer",
    alt: "Desktop Computer",
    wattage: 200,
  },
  {
    id: "lcd-monitor",
    alt: "LCD Monitor",
    wattage: 50,
  },
  {
    id: "lcd-tv",
    alt: "LCD TV",
    wattage: 150,
  },
  {
    id: "laser-printer",
    alt: "Laser Printer",
    wattage: 500,
  },
  {
    id: "inkjet-printer",
    alt: "Inkjet Printer",
    wattage: 30,
  },
  {
    id: "mobile-phone-charger",
    alt: "Mobile Phone Charger",
    wattage: 5,
  },
  {
    id: "furnace-fan",
    alt: "Furnace Fan",
    wattage: 600,
  },
  {
    id: "sump-pump",
    alt: "Sump Pump",
    wattage: 800,
  },
  {
    id: "well-pump",
    alt: "Well Pump",
    wattage: 1000,
  },
  {
    id: "room-air-conditioner",
    alt: "Room Air Conditioner",
    wattage: 1200,
  },
  {
    id: "central-air-conditioner",
    alt: "Central Air Conditioner",
    wattage: 3500,
  },
  {
    id: "box-fan",
    alt: "Box Fan",
    wattage: 80,
  },
  {
    id: "ceiling-fan",
    alt: "Ceiling Fan",
    wattage: 75,
  },
  {
    id: "led-bulbs",
    alt: "Led Bulbs (x4)",
    wattage: 40,
  },
  {
    id: "electric-water-heater",
    alt: "Electric Water Heater",
    wattage: 4000,
  },
  {
    id: "washing-machine",
    alt: "Washing Machine",
    wattage: 500,
  },
  {
    id: "clothes-dryer",
    alt: "Clothes Dryer",
    wattage: 3000,
  },
  {
    id: "garage-door-opener",
    alt: "Garage Door Opener",
    wattage: 350,
  },
  {
    id: "refrigerator",
    alt: "Refrigerator",
    wattage: 150,
  },
  {
    id: "microwave",
    alt: "Microwave",
    wattage: 1500,
  },
  {
    id: "coffee-machine",
    alt: "Coffee Machine",
    wattage: 1000,
  },
  {
    id: "dishwasher",
    alt: "Dishwasher",
    wattage: 1800,
  },
  {
    id: "electric-skillet",
    alt: "Electric skillet",
    wattage: 1500,
  },
  {
    id: "electric-stove",
    alt: "Electric Stove",
    wattage: 3000,
  },
  {
    id: "electric-welder",
    alt: "Electric Welder",
    wattage: 4500,
  },
  {
    id: "air-compressor",
    alt: "Air Compressor",
    wattage: 1500,
  },
  {
    id: "circular-saw",
    alt: "Circular Saw",
    wattage: 1400,
  },
  {
    id: "electric-drill",
    alt: "Electric Drill",
    wattage: 600,
  },
  {
    id: "belt-sander",
    alt: "Belt Sander",
    wattage: 1000,
  }
];


let applianceCounters = {};

function incrementCounter(applianceId) {
  if (applianceId in applianceCounters) {
    applianceCounters[applianceId]++;
  } else {
    applianceCounters[applianceId] = 1;
  }
}

function decrementCounter(applianceId) {
  if (applianceId in applianceCounters) {
    applianceCounters[applianceId]--;
    if (applianceCounters[applianceId] <= 0) {
      delete applianceCounters[applianceId];
    }
  }
}

let totalWattage = 0;
let totalStartingWattage = 0;
$: {
  totalWattage = appliances.reduce((total, appliance) => {
    const count = applianceCounters[appliance.id] || 0;
    return total + count * appliance.wattage;
  }, 0);

  totalStartingWattage = appliances.reduce((total, appliance) => {
    const count = applianceCounters[appliance.id] || 0;
    return total + count * appliance.surgeWattage;
  }, 0);
}
</script>

<div class="container mx-auto px-4 pb-20 md:pb-0"> <!-- pb-20 for mobile, removed for larger screens -->
    <section>
        <div id="counters-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {#each appliances as appliance (appliance.id)}
            <article class="flex flex-col justify-between items-center border rounded p-2 bg-white shadow-md">
               <h2 id="appliance-{appliance.id}" class="mb-2 text-lg font-bold">{appliance.alt}</h2>
               <div class="flex justify-center w-full">
                <div class="flex justify-between items-center bg-gray-200 p-2 rounded max-w-min w-full">
                  <button aria-labelledby="decrement-{appliance.id} appliance-{appliance.id}" on:click={() => decrementCounter(appliance.id)} class="bg-red-500 hover:bg-red-700 focus:bg-red-800 text-white font-bold py-1 px-2 rounded transition duration-200 ease-in-out">
                    -
                  </button>
                  <span id="decrement-{appliance.id}" class="mx-2">{applianceCounters[appliance.id] || 0}</span>
                  <button aria-labelledby="increment-{appliance.id} appliance-{appliance.id}" on:click={() => incrementCounter(appliance.id)} class="bg-blue-500 hover:bg-blue-700 focus:bg-blue-800 text-white font-bold py-1 px-2 rounded transition duration-200 ease-in-out">
                    +
                  </button>
                </div>
              </div>
            </article>
            {/each}
        </div>
        <footer class="fixed bottom-0 inset-x-0 p-4 bg-white text-center shadow-md rounded mx-auto w-full max-w-md">
          <p><strong id="total-wattage" class="font-bold text-xl">Total Wattage:</strong> <span class="text-xl">{totalWattage}</span> Watts</p>
          <p><strong id="starting-wattage" class="font-bold text-xl">Total Starting Wattage:</strong> <span class="text-xl">{totalStartingWattage}</span> Watts</p>
        </footer>    
    </section>
</div>

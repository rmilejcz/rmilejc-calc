<script>
let appliances = [
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
  $: {
    totalWattage = appliances.reduce((total, appliance) => {
      const count = applianceCounters[appliance.id] || 0;
      return total + count * appliance.wattage;
    }, 0);
  }
</script>

<div class="container mx-auto px-4">
  <p class="text-center my-4 font-bold text-lg">Select the <strong>most necessary!~</strong> electrical appliances to understand your power requirements.</p>
  <section>
    <div id="counters-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {#each appliances as appliance (appliance.id)}
      <div class="flex flex-col justify-between items-center border rounded p-2 bg-white shadow-md">
        <span class="mb-2">{appliance.alt}</span>
        <div class="flex justify-center w-full">
          <div class="flex justify-between items-center bg-gray-200 p-2 rounded max-w-xs w-full">
            <button on:click={() => decrementCounter(appliance.id)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
              -
            </button>
            <span class="mx-2">{applianceCounters[appliance.id] || 0}</span>
            <button on:click={() => incrementCounter(appliance.id)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              +
            </button>
          </div>
        </div>
      </div>
      {/each}
    </div>
    <div class="my-4 text-center">
      <strong class="font-bold text-2xl">Total Wattage:</strong> <span class="text-2xl">{totalWattage}</span> Watts
    </div>
  </section>
</div>
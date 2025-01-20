import { h } from "preact";
import { useState } from "preact/hooks";
const diagrams = [
    {
      "id": 1,
      "name": "Ammunition, Blunt (x5)",
      "craftingDC": 12,
      "time": 1,
      "investmentCost": 74
    },
    {
      "id": 2,
      "name": "Ammunition, Standard (x30)",
      "craftingDC": 10,
      "time": 2,
      "investmentCost": 14
    },
    {
      "id": 3,
      "name": "Arming Sword",
      "craftingDC": 13,
      "time": 7,
      "investmentCost": 404
    },
    {
      "id": 4,
      "name": "Brass Knuckles",
      "craftingDC": 10,
      "time": 2,
      "investmentCost": 125
    },
    {
      "id": 5,
      "name": "Dagger",
      "craftingDC": 8,
      "time": 2,
      "investmentCost": 74
    },
    {
      "id": 6,
      "name": "Gleddyf",
      "craftingDC": 14,
      "time": 7,
      "investmentCost": 426
    },
    {
      "id": 7,
      "name": "Hand Axe",
      "craftingDC": 10,
      "time": 3,
      "investmentCost": 306
    },
    {
      "id": 8,
      "name": "Hunter’s Falchion",
      "craftingDC": 14,
      "time": 7,
      "investmentCost": 486
    },
    {
      "id": 9,
      "name": "Iron Long Sword",
      "craftingDC": 10,
      "time": 5,
      "investmentCost": 240
    },
    {
      "id": 10,
      "name": "Orions (x3)",
      "craftingDC": 12,
      "time": 1,
      "investmentCost": 125
    },
    {
      "id": 11,
      "name": "Short Bow",
      "craftingDC": 15,
      "time": 8,
      "investmentCost": 434
    },
    {
      "id": 12,
      "name": "Spear",
      "craftingDC": 12,
      "time": 6,
      "investmentCost": 562
    },
    {
      "id": 13,
      "name": "Throwing Axes (x3)",
      "craftingDC": 10,
      "time": 1,
      "investmentCost": 116
    },
    {
      "id": 14,
      "name": "Throwing Knives (x3)",
      "craftingDC": 8,
      "time": 1,
      "investmentCost": 74
    },
    {
        "id": 15,
        "name": "Ammunition, Bodkin (x10)",
        "craftingDC": 16,
        "time": 1,
        "investmentCost": 224
    },
    {
        "id": 16,
        "name": "Ammunition, Broadhead (x10)",
        "craftingDC": 15,
        "time": 1,
        "investmentCost": 125
    },
    {
        "id": 17,
        "name": "Battle Axe",
        "craftingDC": 17,
        "time": 9,
        "investmentCost": 786
    },
    {
        "id": 18,
        "name": "Crossbow",
        "craftingDC": 17,
        "time": 9,
        "investmentCost": 682
    },
    {
        "id": 19,
        "name": "Esboda",
        "craftingDC": 17,
        "time": 9,
        "investmentCost": 974
    },
    {
        "id": 20,
        "name": "Hand Crossbow",
        "craftingDC": 15,
        "time": 8,
        "investmentCost": 426
    },
    {
        "id": 21,
        "name": "Hooked Staff",
        "craftingDC": 18,
        "time": 9,
        "investmentCost": 824
    },
    {
        "id": 22,
        "name": "Krigsverd",
        "craftingDC": 16,
        "time": 8,
        "investmentCost": 854
    },
    {
        "id": 23,
        "name": "Long Bow",
        "craftingDC": 16,
        "time": 8,
        "investmentCost": 712
    },
    {
        "id": 24,
        "name": "Mace",
        "craftingDC": 16,
        "time": 8,
        "investmentCost": 786
    },
    {
        "id": 25,
        "name": "Pole Axe",
        "craftingDC": 16,
        "time": 8,
        "investmentCost": 690
    },
    {
        "id": 26,
        "name": "Poniard",
        "craftingDC": 18,
        "time": 4,
        "investmentCost": 534
    },
    {
        "id": 27,
        "name": "Staff",
        "craftingDC": 18,
        "time": 9,
        "investmentCost": 502
    },
    {
        "id": 28,
        "name": "Stiletto",
        "craftingDC": 16,
        "time": 4,
        "investmentCost": 412
    },
    {
        "id": 29,
        "name": "Berserker’s Axe",
        "craftingDC": 25,
        "time": 13,
        "investmentCost": 1440
    },
    {
        "id": 30,
        "name": "Crystal Staff",
        "craftingDC": 25,
        "time": 13,
        "investmentCost": 1296
    },
    {
        "id": 31,
        "name": "Highland Mauler",
        "craftingDC": 25,
        "time": 13,
        "investmentCost": 1440
    },
    {
        "id": 32,
        "name": "Iron Staff",
        "craftingDC": 20,
        "time": 10,
        "investmentCost": 1012
    },
    {
        "id": 33,
        "name": "Jambiya",
        "craftingDC": 20,
        "time": 5,
        "investmentCost": 660
    },
    {
        "id": 34,
        "name": "Kord",
        "craftingDC": 22,
        "time": 11,
        "investmentCost": 1012
    },
    {
        "id": 35,
        "name": "Monster Hunter’s Crossbow",
        "craftingDC": 24,
        "time": 12,
        "investmentCost": 1686
    },
    {
        "id": 36,
        "name": "Red Halberd",
        "craftingDC": 22,
        "time": 11,
        "investmentCost": 1296
    },
    {
        "id": 37,
        "name": "Torrwr",
        "craftingDC": 25,
        "time": 13,
        "investmentCost": 1462
    },
    {
        "id": 38,
        "name": "Vicovarian Blade",
        "craftingDC": 24,
        "time": 12,
        "investmentCost": 1282
    },
    {
        "id": 39,
        "name": "War Bow",
        "craftingDC": 22,
        "time": 11,
        "investmentCost": 1296
    }   
  ]

  export default function Calculator() {
    const [investment, setInvestment] = useState(0);
    const [time, setTime] = useState(0);
    const [chosenDiagrams, setChosenDiagrams] = useState<{ id: number, name: string, craftingDC: number, time: number, investmentCost: number, qty: number }[]>([]);
    const [calinvestment, setCalinvestment] = useState(0);
    const [caltime, setCaltime] = useState(0);

    function CalculatorLogic(addORsub: string, id: number, name: string, craftingDC: number, time: number, investmentCost: number, qty: number) {
        const handlerArray = { id, name, craftingDC, time, investmentCost, qty };
        const queryTheId = chosenDiagrams.find(diagram => diagram.id === id);
        if (addORsub === 'add') {
            if (!queryTheId) {
                setChosenDiagrams([...chosenDiagrams, { ...handlerArray, qty: 1 }]);
                setCalinvestment(calinvestment + investmentCost / 2);
                setCaltime(caltime + time);
            } else {
                const updatedDiagrams = chosenDiagrams.map(diagram =>
                    diagram.id === id ? { ...diagram, qty: diagram.qty + 1 } : diagram
                );
                setChosenDiagrams(updatedDiagrams);
                setCalinvestment(calinvestment + investmentCost / 2);
                setCaltime(caltime + time);
            }
        } else if (addORsub === 'sub' && queryTheId) {
            if (queryTheId.qty > 1) {
                const updatedDiagrams = chosenDiagrams.map(diagram =>
                    diagram.id === id ? { ...diagram, qty: diagram.qty - 1 } : diagram
                );
                setChosenDiagrams(updatedDiagrams);
                setCalinvestment(calinvestment - investmentCost / 2);
                setCaltime(caltime - time);
            } else {
                setChosenDiagrams(chosenDiagrams.filter(diagram => diagram.id !== id));
                setCalinvestment(calinvestment - investmentCost / 2);
                setCaltime(caltime - time);
            }
        }
    }

    function AnvilOnTheHorse() {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Diagrams List</h1>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Time</th>
                            <th className="py-2 px-4 border-b">Investment Materials</th>
                            <th className="py-2 px-4 border-b">Purchase Cost</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {diagrams.map(diagram => (
                            <tr key={diagram.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{diagram.name}</td>
                                <td className="py-2 px-4 border-b">{diagram.time}</td>
                                <td className="py-2 px-4 border-b">{diagram.investmentCost / 2}</td>
                                <td className="py-2 px-4 border-b">{diagram.investmentCost}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2" onClick={() => CalculatorLogic('add', diagram.id, diagram.name, diagram.craftingDC, diagram.time, diagram.investmentCost / 2, 1)}>Add</button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => CalculatorLogic('sub', diagram.id, diagram.name, diagram.craftingDC, diagram.time, diagram.investmentCost / 2, 1)}>Subtract</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div className="p-4">
            <div className="mb-4">
                <label htmlFor="investment" className="block text-sm font-medium text-gray-700">Investment:</label>
                <input
                    id="investment"
                    type="number"
                    value={investment}
                    onChange={(e) => setInvestment(parseFloat(e.target.value) || 0)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time:</label>
                <input
                    id="time"
                    type="number"
                    value={time}
                    onChange={(e) => setTime(parseFloat(e.target.value) || 0)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <AnvilOnTheHorse />
            <div className="mt-8">
                <h1 className="text-2xl font-bold mb-4">Chosen Diagrams List</h1>
                <h2 className="text-lg mb-2">Total Investment: {calinvestment}</h2>
                <h2 className="text-lg mb-2">Total Time: {caltime}</h2>
                <h2 className="text-lg mb-2">Money Left: {investment - calinvestment}</h2>
                <h2 className="text-lg mb-4">Time Left: {time - caltime}</h2>
                <ul className="list-disc pl-5">
                    {chosenDiagrams.map(diagram => (
                        <li key={diagram.id} className="mb-2">
                            <h2 className="text-lg font-semibold">{diagram.name}</h2>
                            <p>Time: {diagram.time}</p>
                            <p>QTY: {diagram.qty}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
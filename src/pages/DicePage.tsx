import React, { useState } from 'react';

const DicePage = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [diceValue, setDiceValue] = useState('');
    const [isSpinning, setIsSpinning] = useState(false);

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        rollDice();
    };

    const rollDice = () => {
        const newDiceValue = getDiceValue(selectedOption);
        setDiceValue(newDiceValue);
        setIsSpinning(true);
        setTimeout(() => {
            setIsSpinning(false);
        }, 500);
    };

    const getDiceValue = (optionValue) => {
        const fixDice = parseInt(optionValue.replace(/\D/g, ''), 10);
        const diceValue = Math.floor(Math.random() * fixDice) + 1;
        return isNaN(diceValue) ? '' : diceValue;
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div>
                <label>
                    <select
                        value={selectedOption}
                        onChange={handleOptionChange}
                        className="transition-all border px-4 py-4 rounded outline-0 ring-0 ring-blue-200 focus:border-blue-500 focus:ring-2"
                    >
                        <option value="ilu-Matey.png">Select...</option>
                        <option value="d4.png">d4</option>
                        <option value="d6.png">d6</option>
                        <option value="d20.png">d20</option>
                    </select>
                </label>
                <button
                    onClick={rollDice}
                    className="text-4xl font-bold"
                    style={{ position: 'relative', display: 'inline-block' }}
                >
                    <img
                        src={selectedOption}
                        alt={`dice ${diceValue}`}
                        className={isSpinning ? 'spin' : ''}
                    />
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                        {diceValue}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default DicePage;
import { useState } from "react"
import diceEmpty from "../../assets/images/dice-empty.png"
import dice1 from "../../assets/images/dice1.png"
import dice2 from "../../assets/images/dice2.png"
import dice3 from "../../assets/images/dice3.png"
import dice4 from "../../assets/images/dice4.png"
import dice5 from "../../assets/images/dice5.png"
import dice6 from "../../assets/images/dice6.png"

function Dice () {
    const [currentImage, setCurrentImage] = useState(dice3);

    const DiceType = [dice1, dice2, dice3, dice4, dice5, dice6];

    const handleClick = () => {
        setCurrentImage(diceEmpty);
        setTimeout(() => {
            setCurrentImage(DiceType[Math.floor(Math.random() * DiceType.length)]);
            }, 1000);
    };


    return (
        <img style={{width: 120, height:120}} src={currentImage} onClick={handleClick} />
    )
}

export default Dice;
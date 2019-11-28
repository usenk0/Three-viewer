import colors from '../assets/json/colors.json'
import fruits from '../assets/json/fruits.json'
import tastes from '../assets/json/tastes.json'
import { getRandomInt } from './int-random'

export default function nameGen() {
    return `${colors[getRandomInt(colors.length)]} ${tastes[getRandomInt(tastes.length)]} ${fruits[getRandomInt(fruits.length)]}`;
}
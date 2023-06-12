const bugIcon = '../../assets/icons/bug.svg'
const darkIcon = '../../assets/icons/dark.svg'
const dragonIcon = '../../assets/icons/dragon.svg'
const electricIcon = '../../assets/icons/electric.svg'
const fairyIcon = '../../assets/icons/fairy.svg'
const fightingIcon = '../../assets/icons/fighting.svg'
const fireIcon = '../../assets/icons/fire.svg'
const flyingIcon = '../../assets/icons/flying.svg'
const ghostIcon = '../../assets/icons/ghost.svg'
const grassIcon = '../../assets/icons/grass.svg'
const groundIcon = '../../assets/icons/ground.svg'
const iceIcon = '../../assets/icons/ice.svg'
const normalIcon = '../../assets/icons/normal.svg'
const poisonIcon = '../../assets/icons/poison.svg'
const psychicIcon = '../../assets/icons/psychic.svg'
const rockIcon = '../../assets/icons/rock.svg'
const steelIcon = '../../assets/icons/steel.svg'
const waterIcon = '../../assets/icons/water.svg'

const TYPE_ICONS = [
    {
        type_name: "bug",
        type_icon: bugIcon,
        background: "#92bd2d"
    },
    {
        type_name: "dark",
        type_icon: darkIcon,
        background: "#595761"
    },
    {
        type_name: "dragon",
        type_icon: dragonIcon,
        background: "#0c6ac8"
    },
    {
        type_name: "electric",
        type_icon: electricIcon,
        background: "#f2d94e"
    },
    {
        type_name: "fairy",
        type_icon: fairyIcon,
        background: "#ef90e6"
    },
    {
        type_name: "fighting",
        type_icon: fightingIcon,
        background: "#d3425f"
    },
    {
        type_name: "fire",
        type_icon: fireIcon,
        background: "#fba64c"
    },
    {
        type_name: "flying",
        type_icon: flyingIcon,
        background: "#a1bbec"
    },
    {
        type_name: "ghost",
        type_icon: ghostIcon,
        background: "#5f6dbc"
    },
    {
        type_name: "grass",
        type_icon: grassIcon,
        background: "#60bd58"
    },
    {
        type_name: "ground",
        type_icon: groundIcon,
        background: "#da7c4d"
    },
    {
        type_name: "ice",
        type_icon: iceIcon,
        background: "#76d1c1"
    },
    {
        type_name: "normal",
        type_icon: normalIcon,
        background: "#a0a29f"
    },
    {
        type_name: "poison",
        type_icon: poisonIcon,
        background: "#b763cf"
    },
    {
        type_name: "psychic",
        type_icon: psychicIcon,
        background: "#fa8582"
    },
    {
        type_name: "rock",
        type_icon: rockIcon,
        background: "#c9bc8a"
    },
    {
        type_name: "steel",
        type_icon: steelIcon,
        background: "#5795a3"
    },
    {
        type_name: "water",
        type_icon: waterIcon,
        background: "#539ddf"
    }
]

function getIconByType(type, isStyle = false) {
    if (!type) return "";
    const icon = TYPE_ICONS.find((icon) => {
        if (isStyle && icon.type_name === type) return true;
        return icon.type_name === type;
    });
    if (!icon) return "";
    return isStyle ? icon.background : icon.type_icon;
}

export default getIconByType
import saiajin1 from '../components/imgManga/saiajin1.webp'
import saiajin2 from '../components/imgManga/saiajin2.webp'
import saiajin3 from '../components/imgManga/saiajin3.webp'
import freezer1 from '../components/imgManga/freezer1.webp'
import freezer2 from '../components/imgManga/freezer2.webp'
import freezer3 from '../components/imgManga/freezer3.webp'
import freezer4 from '../components/imgManga/freezer4.webp'
import freezer5 from '../components/imgManga/freezer5.webp'
import cell1 from '../components/imgManga/cell1.webp'
import cell2 from '../components/imgManga/cell2.webp'
import cell3 from '../components/imgManga/cell3.webp'
import cell4 from '../components/imgManga/cell4.webp'
import cell5 from '../components/imgManga/cell5.webp'
import cell6 from '../components/imgManga/cell6.webp'
import boo1 from '../components/imgManga/boo1.webp'
import boo2 from '../components/imgManga/boo2.webp'
import boo3 from '../components/imgManga/boo3.webp'
import boo4 from '../components/imgManga/boo4.webp'
import boo5 from '../components/imgManga/boo5.webp'
import boo6 from '../components/imgManga/boo6.webp'
import '../components/styles/Manga.css'


//Creando el objeto manga para llamar en Card
const Manga = [
    {
        id:1,
        saga: "Saiajin",
        tomo: 1,
        precio: 3800,
        imagen: saiajin1
    },
    {
        id:2,
        saga: "Saiajin",
        tomo: 2,
        precio: 2699,
        imagen: saiajin2
    },
    {
        id:3,
        saga: "Saiajin",
        tomo: 3,
        precio: 3420,
        imagen: saiajin3
    },
    {
        id:4,
        saga: "Freezer",
        tomo: 1,
        precio: 3740,
        imagen: freezer1
    },
    {
        id:5,
        saga: "Freezer",
        tomo: 2,
        precio: 4790,
        imagen: freezer2
    },
    {
        id:6,
        saga: "Freezer",
        tomo: 3,
        precio: 3600,
        imagen: freezer3
    },
    {
        id:7,
        saga: "Freezer",
        tomo: 4,
        precio: 2900,
        imagen: freezer4
    },
    {
        id:8,
        saga: "Freezer",
        tomo: 5,
        precio: 6240,
        imagen: freezer5
    },
    {
        id:9,
        saga: "Cell",
        tomo: 1,
        precio: 5210,
        imagen: cell1
    },
    {
        id:10,
        saga: "Cell",
        tomo: 2,
        precio: 7000,
        imagen: cell2
    },
    {
        id:11,
        saga: "Cell",
        tomo: 3,
        precio: 4700,
        imagen: cell3
    },
    {
        id:12,
        saga: "Cell",
        tomo: 4,
        precio: 5500,
        imagen: cell4
    },
    {
        id:13,
        saga: "Cell",
        tomo: 5,
        precio: 2900,
        imagen: cell5
    }, 
    {
        id:14,
        saga: "Cell",
        tomo: 6,
        precio: 4000,
        imagen: cell6
    },
    {
        id:15,
        saga: "Majin Boo",
        tomo: 1,
        precio: 4500,
        imagen: boo1
    },
    {
        id:16,
        saga: "Majin Boo",
        tomo: 2,
        precio: 4000,
        imagen: boo2
    },
    {
        id:17,
        saga: "Majin Boo",
        tomo: 3,
        precio: 3500,
        imagen: boo3
    },
    {
        id:18,
        saga: "Majin Boo",
        tomo: 4,
        precio: 6200,
        imagen: boo4
    },
    {
        id:19,
        saga: "Majin Boo",
        tomo: 5,
        precio: 3800,
        imagen: boo5
    },
    {
        id:20,
        saga: "Majin Boo",
        tomo: 6,
        precio: 8200,
        imagen: boo6
    },

];


export default Manga


export const getCharacterById = (id) =>{
    return Manga[id];
  }
  
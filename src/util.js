import { v4 as uuidv4 } from "uuid"

function chillHop() {
    return [
        {
            name: "Perfect Storm",
            artist: "1",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=23057",
            id: uuidv4(),
            active: true,
            color: ["#ba4a46", "#fdf0dd"]
        },
        {
            name: "Two Thousand Miles",
            artist: "2",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=23067",
            id: uuidv4(),
            active: false
        },
        {
            name: "Sketchbook Memory",
            artist: "3",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=23067",
            id: uuidv4(),
            active: false
        },
        {
            name: "Sorry Matthew",
            artist: "4",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=23069",
            id: uuidv4(),
            active: false
        },
    ];
}
export default chillHop
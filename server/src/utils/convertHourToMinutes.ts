export default function convertHourTuMinutes(time: string){
    
    // 8:00
    // desestruturação para pegar a hora e minutos separaddos
    const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes
}
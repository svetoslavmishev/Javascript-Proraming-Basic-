function speedInfo([arg1]) {
    let speed = parseFloat([arg1]);
    if (speed <= 10) {
        console.log("slow");
    } else if (speed > 10 && speed <= 50) {
        console.log("average");
    } else if (speed > 50 && speed <= 150) {
        console.log("fast");
    } else if (speed > 150 && speed <= 1000) {
        console.log("ultra fast");
    } else if (speed > 1000) {
        console.log("extremely fast");
    }
}
speedInfo([8]);
speedInfo([49.5]);
speedInfo([126]);
speedInfo([160]);
speedInfo([3500]);
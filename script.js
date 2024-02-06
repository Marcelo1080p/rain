const rain = () => {

    let body = document.querySelector("body");
    let snowflakesNumber = 500;
    const windowWidth = window.innerWidth;
    

    for(let i = 0; i < snowflakesNumber; i++) {

        const posX = Math.floor(Math.random() * windowWidth);
        let width = Math.random() * 50;

        let flakes = document.createElement("p");
        flakes.style.left = `${posX}px`
        flakes.style.width = `${width}px`
        flakes.style.height = `${width}px`
        flakes.style.filter = `blur(${Math.random() * 10}px)`
        flakes.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`
        flakes.style.animationDelay = `${Math.random() * - 20}s`
        flakes.style.animationDuration = `${Math.floor(Math.random() * 10)}s`

        body.append(flakes);

    }
}

rain();
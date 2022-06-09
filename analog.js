*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #2f363e;
}

.container{
    position: relative;
    background: #2f363e;
    border-radius: 20px;
    border-top-left-radius: 225px;
    border-top-right-radius: 225px;
    box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.75),
    10px 10px 70px rgba(0, 0, 0, 0.25),
    inset 5px 5px 10px rgba(0, 0, 0, 0.5),
    inset 5px 5px 20px rgba(255, 255, 255, 0.2),
    inset -5px -5px 10px rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.clock{
    position: relative;
    width: 450px;
    height: 450px;
    background: #2f363e;
    border-radius: 50%;
    box-shadow: 10px 50px 70px rgba(0, 0, 0, 0.25),
    inset 5px 5px 10px rgba(0, 0, 0, 0.5),
    inset 5px 5px 20px rgba(255, 255, 255, 0.2),
    inset -5px -5px 10px rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
}

.clock::before{
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: #2f363e;
    border: 3px solid #fff;
    border-radius: 50%;
    z-index: 10000;
}

.clock span{
    position: absolute;
    inset: 20px;
    color: #fff;
    text-align: center;
    transform: rotate(calc(30deg * var(--i)));
}

.clock span b{
    font-size: 2em;
    opacity: 0.25;
    font-weight: 600;
    display: inherit-block;
    transform: rotate(calc(-30deg * var(--i)));
}

.circle{
    position:absolute;
    width: 300px;
    height: 300px;
    border: 2px solid rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 10;
}

.circle i{
    position: absolute;
    width: 6px;
    height: 50%;
    background: var(--clr);
    opacity: 0.75;
    transform-origin: bottom;
    transform: scaleY(0.5);
}

.circle:nth-chil(1) i{
    width: 2px;
}

.circle:nth-chil(2) i{
    width: 6px;
}

.circle2{
    width: 240px;
    height: 240px;
    z-index: 9;
}

.circle3{
    width: 180px;
    height: 180px;
    z-index: 8;
}

.circle::before{
    content: '';
    position: absolute;
    top: -8.5px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: var(--clr);
    box-shadow: 0 0 20px var(--clr),
    0 0 60px var(--clr);
}

/* DIGITAL CLOCK */

#time{
    margin-bottom: 40px;
    display: flex;
    padding: 10px 20px;
    font-size: 2em;
    font-weight: 600;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 40px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5),
    inset 5px 5px 20px rgba(255, 255, 255, 0.2),
    inset -5px -5px 15px rgba(0, 0, 0, 0.75);
}

#time div{
    position: relative;
    width: 60px;
    text-align: center;
    font-weight: 500;
    color: var(--clr);
}

#time div:nth-child(1)::after,
#time div:nth-child(2)::after{
    content: '';
    position: absolute;
    right: -4px;
}

#time div:last-child{
    font-size: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}

#time div:nth-child(2)::after{
    animation: animate 1s steps(1) infinte;
}

@keyframes animate{
    0%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
}

'use client'

import {useEffect} from "react";

export default function Aquarium() {
    const bubbleCount: number = 30;
    let bubbleField: HTMLElement | null;

    useEffect(() => {
        bubbleField  = document.getElementById("bubble-field");

        //generate bubbles with randomly timed animation durations
        for (let i = 0; i < bubbleCount; i++) {
            const randNum = Math.floor(Math.random() * 20) + 1;
            const animDur = 2 + (0.5 * randNum);
            let moveEl = document.createElement('div');
            moveEl.setAttribute('class', 'bubble-rise');
            moveEl.setAttribute('style', 'animation-duration: ' + animDur + 's;');

            let bubbleEl = document.createElement('div');
            bubbleEl.setAttribute('class', 'bubble');
            let bubbleElContent = document.createTextNode('');
            bubbleEl.appendChild(bubbleElContent);

            moveEl.appendChild(bubbleEl)
            if (bubbleField != null) {
                bubbleField.appendChild(moveEl);
            }
        }
    }, [])

    return (
        <div id="fish-tank">
            <div id="bubble-field"></div>
            <div className="plant">
                <div className="leaf-1"></div>
            </div>
            <div className="fish"><img src={"fish1.png"}/></div>
            <div className="fish blue-fish"><img src={"fish2.png"}/></div>
        </div>
    )
}


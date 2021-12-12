function Clock() {
    const HTML = `<div class="time">
                    <div class="value">432</div>
                    <div class="label">Days</div>
                </div>
                <div class="time">
                    <div class="value">09</div>
                    <div class="label">Hours</div>
                </div>
                <div class="time">
                    <div class="value">37</div>
                    <div class="label">Minutes</div>
                </div>
                <div class="time">
                    <div class="value">39</div>
                    <div class="label">Seconds</div>
                </div>`;
    const selector = '.clock';
    const DOM = document.querySelector(selector);

    DOM.innerText = 'Labas'

}
export {Clock}
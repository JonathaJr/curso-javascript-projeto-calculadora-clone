class CalcController {

    constructor() {
        this._displayCalc = '0';
        this._currentDate;
        this.initialize()
    }

    initialize() {
       let displayCalEl = document.querySelector("#display");
       let dateEl = document.querySelector("#data");
       let timeEl = document.querySelector("#hora");

        displayCalEl.innerHTML = "4550";
        dateEl.innerHTML = "29/09/2024";
        timeEl.innerHTML = "15:18";

    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(valor) {
        this._displayCalc = valor;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(valor) {
        this._currentDate = valor;
    }

};
export default class HelloWorld {
    constructor() {
        this.template = '<div><span>{{ text }}</span> <span ya-update="count"></span> <span>{{text2}}</span><button class="button" ya-click="clickfunction">Click mich</button></div>';
        this.text = "I was clicked"; 
        this.text2 = "times."
        this.count = 0;
    }

    clickfunction() {
        this.count++;
    }
}
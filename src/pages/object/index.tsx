import { useEffect } from "react"

interface IPerson {
    age: number;
    name: string;
    introduce: () => void;
}

export default () => {
    useEffect(() => {
        const stage = document.querySelector(".stage");

        let p1 = {
            age: 10,
            name: '1',
            introduce: function () {
                console.log(this.age, this.name);
            }
        }
        let p2 = {
            age: 20,
            name: '2',
            introduce: function () {
                console.log(this.age, this.name);
            }
        }

        p1.introduce();
        p2.introduce();

        function Person(name, age) {
            this.name = name;
            this.age = age;
        }

        Person.prototype.introduce = function () {
            console.log(this.age, this.name);
        }

        const person1 = new Person('1', 20);
        const person2 = new Person('2', 10);

        person1.introduce();
        person2.introduce();

        function Card(num, color) {
            this.num = num;
            this.color = color;
            this.init()
        }

        Card.prototype = {
            ...Card.prototype,
            init: function () {
                const main = document.createElement('div');
                main.style.color = this.color;
                main.style.fontSize = "2em";
                main.innerHTML = this.num;
                main.classList.add('card');

                stage.appendChild(main);
            }
        }


        let c1 = new Card(1, 'red');
        let c2 = new Card(7, 'green');

        console.log(c1);
        console.log(c2);

        return () => {

        }
    }, [])
    return (
        <div className="stage">
            <h1>Object</h1>
        </div>
    )
}
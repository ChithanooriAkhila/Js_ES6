class People {
    constructor(name) {
          this.name = name;
        }
        getName() {
          return this.name;
        }
        setName(name) {
          this.name = name;
        }
    }
    let person = new People("Jon Snow");
    console.log(person.getName());
    person.setName("Dany");
    console.log(person.getName());

    class Pupil {
        constructor(name) {
              this.name = name;
            }
            get Name() {
              return this.name;
            }
            set Name(name) {
              this.name = name;
            }
        }
         person = new Pupil("Jon Snow");
        console.log(person.Name);
        person.Name = "Dany";
        console.log(person.Name);
import { Component } from '@angular/core';

// ამისთვის არსებობს ცალკე type interface

// ინტერფეისის შექმნა

// სახელი შეიძლება იყოს ნებისმიერი
interface Actor {
  personName: string;
  personLastName: string;
  personAge: number;
  isStillActor: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project2';
  // როგორც ვხედავთ angular-ის პროექტში ერთ javascript ფაილსაც ვერ ვხედავთ
  // რადგან მთლიანი angular-ი დაფუძნებულია .ts (typescript-ზე) რომელიც
  // წარმოადგენს angular-ის გაუმჯობესებულ ვერსიას!

  // აქ პირდაპირ ვწერთ ცვლადის სახელს და მის ტიპს ხოლო შემდეგ კი მის მნიშნელობას!
  // string ანუ სიტყვა
  userName: string = 'ლაშა';
  //number ანუ ციფრი
  userAge: number = 111;
  //boolean ანუ (true/false)
  isAdmin: boolean = true;

  // მასივის შექმნა
  // ჯერ ვუთითებთ მასივის ტიპს შემდეგ კი ვანიშნებთ რომ ის არის მასივი
  users: string[] = ['Lasha', 'Giorgi', 'Toma', 'Tekla', 'Mdinara'];

  // ობიექტი
  // ჯერ ვუთითებთ ობიექტის ტიპს შემდეგ კი ვანიშნებთ რომ ის არის ობიექტი
  // ეს არიყო ტიპიზირებული ობიექტი
  user: object = {
    name: 'Lasha',
    age: 111,
    isAdmin: true,
  };

  // ფრჩხილებს შიგნით იწერება ტიპიზაცია
  typedUser: {
    name: string;
    age: number;
    isAdmin: boolean;
  } = {
    name: 'Lasha',
    age: 111,
    isAdmin: true,
  };

  // ფუნქციის შექმნა
  sayHello() {
    alert('Hello');
  }

  // private და public ს შორის
  nameToDisplay: string = 'Lasha!!!';

  // private ტიპის ცვლადები ხელმისაწვდია მხოლოდ იმ ფაილშ სადაც ის შეიქმნა
  private privateName: string = 'დამალული ინფორმაცია!';

  // მასივების დამუშავება html-ში

  letters: string[] = ['a', 'b', 'c', 'd'];

  //უნივერსალური ცვლადის ტიპი
  something: any = 'any ში შეიძლება ყველაფრის შენახვა';

  // ობიექტი html-ში
  person: {
    personName: string;
    personLastName: string;
    personAge: number;
    personIsActor: boolean;
  } = {
    personName: 'Johnny',
    personLastName: 'Depp',
    personAge: 58,
    personIsActor: true,
  };
  
  person2: Actor = {
    personName: 'Jack',
    personLastName: 'Sparrow',
    personAge: 55,
    isStillActor: true,
  };
}

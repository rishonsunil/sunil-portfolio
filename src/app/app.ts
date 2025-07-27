import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./core/navbar/navbar";
import { Hero } from "./core/hero/hero";
import { Footer } from "./core/footer/footer";
import { About } from "./core/about/about";
import { Education } from "./core/education/education";
import { Skills } from "./core/skills/skills";
import { Contact } from "./core/contact/contact";
import { Impact } from "./core/impact/impact";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Footer, About, Education, Skills, Contact, Impact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sunil-portfolio');
}

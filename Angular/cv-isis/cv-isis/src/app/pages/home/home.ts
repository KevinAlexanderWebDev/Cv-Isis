import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../components/header/header';
import { About } from "../../components/about/about";
import { Experience } from '../../components/experience/experience';
import { Skills } from '../../components/skills/skills';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Header, About, Experience, Skills, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}

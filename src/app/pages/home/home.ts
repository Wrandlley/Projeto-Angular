import { Component } from '@angular/core';
import { Selection } from '../../components/selection/selection';
import { Navigation } from '../../components/navigation/navigation';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Selection, Navigation, Footer, Header],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';
import { Navigation } from '../../components/navigation/navigation';

@Component({
  selector: 'app-novo',
  standalone: true,
  imports: [RouterModule, Footer, Header, Navigation],
  templateUrl: './novo.html',
  styleUrl: './novo.css'
})
export class Novo {

}

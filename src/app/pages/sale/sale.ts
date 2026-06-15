import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../components/header/header';
import { Navigation } from '../../components/navigation/navigation';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [RouterModule, Header, Navigation, Footer],
  templateUrl: './sale.html',
  styleUrl: './sale.css'
})
export class Sale {

}

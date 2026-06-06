import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Oil {
  name: string;
  origin: string;
  note: string;
  image: string;
  price: string;
}

interface Benefit {
  icon: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  heroImg = 'images/4.jpg';

  oils: Oil[] = [
    { name: 'לבנדר',    origin: 'פרובאנס, צרפת',     note: 'מרגיע · פרחוני',  image: 'images/2.jpg',   price: '₪89' },
    { name: 'אקליפטוס', origin: 'יערות אוסטרליה',    note: 'מרענן · ממריץ',   image: 'images/3.jpg', price: '₪75' },
    { name: 'תפוז מתוק', origin: 'פרדסי סיציליה',    note: 'מאיר · מתוק',     image: 'images/1.jpg',     price: '₪62' },
  ];

  benefits: Benefit[] = [
    { icon: '🌿', title: '100% טבעי',     text: 'צמחים מגידול אורגני, ללא חומרי הדברה או תוספים.' },
    { icon: '💧', title: 'טהור ומרוכז',   text: 'זיקוק באדים לשמירה על כל התכונות הפעילות של הצמח.' },
    { icon: '✨', title: 'טקס חושי',      text: 'העירו את החושים, הרגיעו את הנפש, אזנו את היומיום שלכם.' },
    { icon: '🌸', title: 'קטיף ידני',     text: 'נקטף ביד על ידי החקלאים השותפים שלנו, בשיא הארומה.' },
  ];

tabs = [
  { id: 'home', label: 'בית', href: '#top', icon: '🏠' },
  { id: 'collection', label: 'הקולקציה', href: '#collection', icon: '🛍️' },
  { id: 'rituel', label: 'הטקס', href: '#rituel', icon: '✨' },
  { id: 'histoire', label: 'הסיפור', href: '#histoire', icon: '📖' }
];
  activeTab = 'home';

  sidebarOpen = true;
  toggleSidebar() { this.sidebarOpen = !this.sidebarOpen; }
  setActive(id: string) { this.activeTab = id; }
}

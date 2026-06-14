import { Component, ElementRef, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {
  @ViewChild('instagramSlider')
instagramSlider!: ElementRef<HTMLDivElement>;

slideInstagram(direction: 'next' | 'prev') {
  const slider = this.instagramSlider.nativeElement;
  const distance = slider.clientWidth;

  slider.scrollBy({
    left: direction === 'next' ? distance : -distance,
    behavior: 'smooth'
  });
}
  products = [
    { name: 'הידרוסול - מי ורדים', price: '₪44.00', reviews: 22, image: '/images/home/1.jpg' },
    { name: 'חומצה היאלורונית ננו', price: '₪164.00', reviews: 29, image: '/images/home/2.jpg' },
    { name: 'תמצית CO2 גרגרים', price: '₪90.00', reviews: 16, image: '/images/home/3.jpg' },
    { name: 'Citron oil - שמן אתרוגים', price: '₪54.00', reviews: 22, image: '/images/home/4.jpg' },
    { name: 'HYALURONIC ACID', price: '₪95.00', reviews: 52, image: '/images/home/5.jpg' }
  ];

  posts = [
    { title: 'חומצה סליצילית לפנים – מה היא עושה?', image: '/images/home/6.jpg' },
    { title: 'ניאצינמיד וויטמין C – האם אפשר לשלב?', image: '/images/home/7.jpg' },
    { title: 'אלפא ארבוטין – חומר גלם שמבהיר כתמים', image: '/images/home/8.jpg' }
  ];

  cards = [
    { title: 'מתחילה בעולם הקוסמטיקה הטבעית?', image: '/images/home/9.jpg', button: 'לקריאה במאמר' },
    { title: 'מחפשת רעיון מקורי להפעלה או סדנה?', image: '/images/home/10.jpg', button: 'לפרטים נוספים' },
    { title: 'קורס קוסמטיקה טבעית - פרונטלי', image: '/images/home/11.jpg', button: 'לפרטים נוספים' }
  ];

  instagram = [
    '/images/home/12.jpg',
    '/images/home/13.jpg',
    '/images/home/14.jpg',
    '/images/home/15.jpg'
  ];
}
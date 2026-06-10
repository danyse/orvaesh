import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-images/home-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {
  products = [
    { name: 'הידרוסול - מי ורדים', price: '₪44.00', reviews: 22, image: '/images/home/product-1.png' },
    { name: 'חומצה היאלורונית ננו', price: '₪164.00', reviews: 29, image: '/images/home/product-2.png' },
    { name: 'תמצית CO2 גרגרים', price: '₪90.00', reviews: 16, image: '/images/home/product-3.png' },
    { name: 'Citron oil - שמן אתרוגים', price: '₪54.00', reviews: 22, image: '/images/home/product-4.png' },
    { name: 'HYALURONIC ACID', price: '₪95.00', reviews: 52, image: '/images/home/product-5.png' }
  ];

  posts = [
    { title: 'חומצה סליצילית לפנים – מה היא עושה?', image: '/images/home/blog-1.jpg' },
    { title: 'ניאצינמיד וויטמין C – האם אפשר לשלב?', image: '/images/home/blog-2.jpg' },
    { title: 'אלפא ארבוטין – חומר גלם שמבהיר כתמים', image: '/images/home/blog-3.jpg' }
  ];

  cards = [
    { title: 'מתחילה בעולם הקוסמטיקה הטבעית?', image: '/images/home/card-1.jpg', button: 'לקריאה במאמר' },
    { title: 'מחפשת רעיון מקורי להפעלה או סדנה?', image: '/images/home/card-2.jpg', button: 'לפרטים נוספים' },
    { title: 'קורס קוסמטיקה טבעית - פרונטלי', image: '/images/home/card-3.jpg', button: 'לפרטים נוספים' }
  ];

  instagram = [
    '/images/home/blog-1.jpg',
    '/images/home/blog-1.jpg',
    '/images/home/blog-1.jpg',
    '/images/home/blog-1.jpg',
   
  ];
}
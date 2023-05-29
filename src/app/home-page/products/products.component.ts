import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      save: 'Save',
      savePace: 'Save at your own pace!',
      subtitle:
        ' Save your money daily, weekly, or monthly. No pressure. We work at your pace',
      list: [
        'Create Unlimited savings plans',
        'Withdraw anytime',
        'Save with Friends with SAN ID',
        'Be better at saving',
        'Accountability profile',
        'Activity and report',
      ],
      img: 'assets/images/product-save.png',
    },
    {
      save: 'Learn',
      savePace: 'Financial freedom begins with You and Ardilla',
      subtitle:
        'Ardila offers wealth-building tips from great financial minds to help you get to where you need to be.',
      list: [
        'Learn to invest in 2hrs',
        'Get a portfolio manager',
        'Stay on top of your finances',
        'Learn with family and friends',
        'Earn points and reward',
      ],
      img: 'assets/images/product-learn.png',
    },
    {
      save: 'Invest',
      savePace: 'Multiply your finances',
      subtitle:
        'Investment opportunities that gets you closer to financial freedom',
      list: [
        'Portfolio management',
        'Track your returns',
        'Risk Assessment',
        'Vetted Investment opportunities',
        'Invest within your risk appetite',
        'Invest in Naira and Dollars',
      ],
      img: 'assets/images/product-invest.png',
    },
    {
      save: 'Budget',
      savePace: 'Plan your money',
      subtitle: 'Every good budget starts with a good plan for your money',
      list: [
        'Save as you spend',
        'Track your expenses',
        'Organize your finances',
        'Sync and share budgets',
        'Financial guide',
        'Better decision-making',
      ],
      img: 'assets/images/product-budget.png',
    },
    {
      save: 'Insurance',
      savePace: 'Protect your interest',
      subtitle: 'Stay protected, live freely',
      list: [
        'Vehicle insurance',
        'Home insurance',
        'Mutual Insurance',
        'Life Insurance',
        'Health Insurance',
        'Travel Insurance',
      ],
      img: 'assets/images/product-insurance.png',
    },
  ];
  activeIndicator: number = 1;
  _percentage: any = `${(this.activeIndicator / this.products.length) * 100}%`;
  constructor() {}

  ngOnInit(): void {
    this.activeIndicator = 1;
    setInterval(() => {
      this.activeIndicator++;
      if (this.activeIndicator > this.products.length) {
        this.activeIndicator = 1;
      }
      this._percentage = `${
        (this.activeIndicator / this.products.length) * 100
      }%`;
    }, 7000);
  }
}
